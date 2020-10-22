"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.monitoreoController = void 0;
const database_1 = __importDefault(require("../database"));
class MonitoreoController {
    //Este método obiene el último turno registrado en la base de datos, el cual es el turno que se mantiene activo
    getLastTurno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let lastTurno;
                lastTurno = yield database_1.default.query('SELECT * FROM apertura_cierre_de_turno ORDER by ID DESC LIMIT 1;');
                if (lastTurno.length > 0) {
                    return res.status(200).json(lastTurno);
                }
                else {
                    res.status(404).json({ text: 'Sin registros para esta búsqueda' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo realizar la búsqueda' });
            }
        });
    }
    //Este método cuenta todos los registros de cajas selladas dentro del turno en un calibrador en específico
    //Recive los parametros date, que es la fecha del dia en que se inicio el turno, time es la hora en que se inicio el turno, 
    //id_caliper es el id del calibrador que se desea saber la cantidad de cajas que se han sellado en el y option toma los valores 
    //de 1 y 2, en donde 1 representa un turno que esta dentro del mismo día y 2 da a conocer si el turno comenzo el dia anterior.
    countBoxBycaliper(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { date, time, id_caliper, option } = req.params;
                let searchBox;
                let searchBoxAux;
                // option 1, para contar las cajas del turno que se encuentra en un mismo día
                if (option == '1') {
                    if (date && time && id_caliper) {
                        console.log("promedio turno");
                        searchBox = yield database_1.default.query('SELECT COUNT(registro_diario_caja_sellada.id) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado > ? AND id_calibrador = ?', [date, time, id_caliper]);
                    }
                    else {
                        res.status(404).json({ text: 'error en datos de búsqueda de cajas' });
                    }
                }
                else if (option == '2') {
                    if (date && time && id_caliper) {
                        //Esta sección realiza la captura de la fecha actual del sistema, que se utiliza para realizar la consulta en el 
                        //caso de la option 2, para consultar la cantidad de caja en dos días.
                        var fecha = new Date();
                        let year = fecha.getFullYear() + "";
                        console.log("hora.length: " + year.length);
                        let month = fecha.getMonth() + "";
                        console.log("minuto.length: " + month.length);
                        let day = fecha.getDate() + "";
                        console.log("segundo.length: " + day.length);
                        if (month.length == 1) {
                            month = "0" + month;
                        }
                        if (day.length == 1) {
                            day = "0" + day;
                        }
                        let fechaActual = year + "-" + month + "-" + day;
                        console.log("fechaActual: " + fechaActual);
                        /**********************************************************************************************************/
                        console.log("option 2");
                        //let dateToday = this.fecha().substring(0,10);
                        searchBox = yield database_1.default.query('SELECT COUNT(registro_diario_caja_sellada.id) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado > ? AND id_calibrador = ?', [date, time, id_caliper]);
                        searchBoxAux = yield database_1.default.query('SELECT COUNT(registro_diario_caja_sellada.id) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado > ? AND id_calibrador = ?', [fechaActual, '00:00:00', id_caliper]);
                        searchBox[0].total = searchBox[0].total + searchBoxAux[0].total;
                    }
                    else {
                        res.status(404).json({ text: 'error en datos de búsqueda de cajas' });
                    }
                }
                if (searchBox.length > 0) {
                    return res.status(200).json(searchBox);
                }
                else {
                    res.status(404).json({ text: 'Sin registros para esta búsqueda' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo realizar la búsqueda' });
            }
        });
    }
    //Este método cuenta todos los registros de cajas selladas dentro del turno por minuto en un calibrador en específico.
    //Recive los parametros date, que es la fecha del dia en que se inicio el turno, time es la hora en que se inicio el turno, 
    //id_caliper es el id del calibrador que se desea saber la cantidad de cajas que se han sellado en el y option toma los valores 
    //de 1 y 2, en donde 1 representa un turno que esta dentro del mismo día y 2 da a conocer si el turno comenzo el dia anterior.
    searchAverageforMinute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //En esta sección se captura la hora actual del sistema. Se útiliza para saber cuantos minutos 
            //han transcurrido desde que comenzo el turno hasta el momento de la consulta.
            var hoy = new Date();
            let hora = hoy.getHours() + "";
            console.log("hora.length: " + hora.length);
            let minuto = hoy.getMinutes() + "";
            console.log("minuto.length: " + minuto.length);
            let segundo = hoy.getSeconds() + "";
            console.log("segundo.length: " + segundo.length);
            if (hora.length == 1) {
                hora = "0" + hora;
            }
            if (minuto.length == 1) {
                minuto = "0" + minuto;
            }
            if (segundo.length == 1) {
                segundo = "0" + segundo;
            }
            let horaActual = hora + ":" + minuto + ":" + segundo;
            console.log("horaActual: " + horaActual);
            /******************************************************************************************************/
            //Esta sección realiza la captura de la fecha actual del sistema, que se utiliza para realizar la consulta en el 
            //caso de la option 2, para consultar la cantidad de caja en dos días.
            var fecha = new Date();
            let year = fecha.getFullYear() + "";
            console.log("hora.length: " + year.length);
            let month = fecha.getMonth() + "";
            console.log("minuto.length: " + month.length);
            let day = fecha.getDate() + "";
            console.log("segundo.length: " + day.length);
            if (month.length == 1) {
                month = "0" + month;
            }
            if (day.length == 1) {
                day = "0" + day;
            }
            let fechaActual = year + "-" + month + "-" + day;
            console.log("fechaActual: " + fechaActual);
            /**********************************************************************************************************/
            try {
                const { date, time, id_caliper, option } = req.params;
                let searchBox;
                let searchBoxAux;
                let totalMinutos = 0;
                let totalMinutosAux = 0;
                // option 1, para contar las cajas del turno que se encuentra en un mismo día
                if (option == '1') {
                    console.log("pase if ");
                    console.log("promedio minuto if consulta");
                    // En esta sección se calcula la cantidad de minutos transcurridos desde el inicio del turno. 
                    // hasta la hora actual al momento de realizar la consulta a la base de datos.
                    var hora1 = time.split(":");
                    var hora2 = horaActual.split(":");
                    var t1 = new Date();
                    var t2 = new Date();
                    t1.setHours(parseInt(hora1[0]), parseInt(hora1[1]), parseInt(hora1[2]));
                    t2.setHours(parseInt(hora2[0]), parseInt(hora2[1]), parseInt(hora2[2]));
                    if ((t2.getHours() - t1.getHours()) == 0) {
                        totalMinutos = t2.getMinutes() - t1.getMinutes();
                    }
                    else {
                        totalMinutos = (t2.getHours() - t1.getHours()) * 60;
                        if ((t2.getMinutes() - t1.getMinutes()) < 0) {
                            totalMinutos = (totalMinutos - (t2.getMinutes() - t1.getMinutes()) * -1);
                        }
                        else {
                            totalMinutos = totalMinutos + (t2.getMinutes() - t1.getMinutes());
                        }
                    }
                    console.log("totalMinutos: " + totalMinutos);
                    /**********************************************************************************************************/
                    //Consulta a la base de datos.
                    searchBox = yield database_1.default.query('SELECT COUNT(registro_diario_caja_sellada.id) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado > ? AND id_calibrador = ?', [date, time, id_caliper]);
                    console.log("respuesta: " + searchBox[0].total);
                    //option 2, se utiliza cuando la duración de un turno se extiende de un día a otro 
                }
                else if (option == '2') {
                    if (date && time && id_caliper) {
                        console.log("option 2");
                        // En esta sección se calcula la cantidad de minutos transcurridos desde el inicio del turno. 
                        // hasta la hora actual al momento de realizar la consulta a la base de datos. Primer día
                        var hora1 = time.split(":");
                        var hora2 = '23:59:59'.split(":");
                        var t1 = new Date();
                        var t2 = new Date();
                        t1.setHours(parseInt(hora1[0]), parseInt(hora1[1]), parseInt(hora1[2]));
                        t2.setHours(parseInt(hora2[0]), parseInt(hora2[1]), parseInt(hora2[2]));
                        if ((t2.getHours() - t1.getHours()) == 0) {
                            totalMinutosAux = t2.getMinutes() - t1.getMinutes();
                        }
                        else {
                            totalMinutosAux = (t2.getHours() - t1.getHours()) * 60;
                            if ((t2.getMinutes() - t1.getMinutes()) < 0) {
                                totalMinutosAux = (totalMinutosAux - (t2.getMinutes() - t1.getMinutes()) * -1);
                            }
                            else {
                                totalMinutosAux = totalMinutosAux + (t2.getMinutes() - t1.getMinutes());
                            }
                        }
                        /**********************************************************************************************************/
                        // En esta sección se calcula la cantidad de minutos transcurridos desde el inicio del turno. 
                        // hasta la hora actual al momento de realizar la consulta a la base de datos. Segundo día 
                        var hora1 = '00:00:00'.split(":");
                        var hora2 = horaActual.split(":");
                        var t1 = new Date();
                        var t2 = new Date();
                        t1.setHours(parseInt(hora1[0]), parseInt(hora1[1]), parseInt(hora1[2]));
                        t2.setHours(parseInt(hora2[0]), parseInt(hora2[1]), parseInt(hora2[2]));
                        if ((t2.getHours() - t1.getHours()) == 0) {
                            totalMinutos = t2.getMinutes() - t1.getMinutes();
                        }
                        else {
                            totalMinutos = (t2.getHours() - t1.getHours()) * 60;
                            if ((t2.getMinutes() - t1.getMinutes()) < 0) {
                                totalMinutos = (totalMinutos - (t2.getMinutes() - t1.getMinutes()) * -1);
                            }
                            else {
                                totalMinutos = totalMinutos + (t2.getMinutes() - t1.getMinutes());
                            }
                        }
                        totalMinutos = totalMinutosAux + totalMinutos;
                        /**********************************************************************************************************/
                        searchBox = yield database_1.default.query('SELECT COUNT(registro_diario_caja_sellada.id) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado > ? AND id_calibrador = ?', [date, time, id_caliper]);
                        searchBoxAux = yield database_1.default.query('SELECT COUNT(registro_diario_caja_sellada.id) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado > ? AND id_calibrador = ?', [fechaActual, '00:00:00', id_caliper]);
                        searchBox[0].total = searchBox[0].total + searchBoxAux[0].total;
                    }
                    else {
                        res.status(404).json({ text: 'error en datos de búsqueda de cajas' });
                    }
                }
                if (searchBox.length > 0) {
                    console.log("entre al if del length");
                    console.log(searchBox[0].total);
                    console.log(totalMinutos);
                    searchBox[0].total = Math.round(searchBox[0].total / totalMinutos);
                    return res.status(200).json(searchBox);
                }
                else {
                    res.status(404).json({ text: 'Sin registros para esta búsqueda' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener cajas' });
            }
        });
    }
    //Este método cuenta todos los registros de cajas selladas dentro del turno por minuto en la ultima hora en un calibrador en específico.
    //Recive los parametros date, que es la fecha del dia en que se inicio el turno, time es la hora en que se inicio el turno, 
    //id_caliper es el id del calibrador que se desea saber la cantidad de cajas que se han sellado en el y option toma los valores 
    //de 1 y 2, en donde 1 representa un turno que esta dentro del mismo día y 2 da a conocer si el turno comenzo el dia anterior.
    searchAverageLastHourforMinute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { date, time, id_caliper, option } = req.params;
                let searchBox;
                let searchBoxAux;
                let hourSearch;
                let MinutosDiv = 60;
                let totalMinutosAux = 0;
                //En esta sección se captura la hora actual del sistema. Se útiliza para saber cuantos minutos 
                //han transcurrido desde que comenzo el turno hasta el momento de la consulta.
                var fecha = new Date();
                let hora = fecha.getHours() + "";
                console.log("hora.length: " + hora.length);
                let minuto = fecha.getMinutes() + "";
                console.log("minuto.length: " + minuto.length);
                let segundo = fecha.getSeconds() + "";
                console.log("segundo.length: " + segundo.length);
                if (hora.length == 1) {
                    hora = "0" + hora;
                }
                if (minuto.length == 1) {
                    minuto = "0" + minuto;
                }
                if (segundo.length == 1) {
                    segundo = "0" + segundo;
                }
                let horaActual = hora + ":" + minuto + ":" + segundo;
                console.log("horaActual: " + horaActual);
                /************************************************************************************************************************/
                //se calcula la cantidad de minutos previamente para saber si el turno comenzo hace menos de una hora y asi no restar una hora a la consulta.
                var hora1 = time.split(":");
                var hora2 = horaActual.split(":");
                var t1 = new Date();
                var t2 = new Date();
                t1.setHours(parseInt(hora1[0]), parseInt(hora1[1]), parseInt(hora1[2]));
                t2.setHours(parseInt(hora2[0]), parseInt(hora2[1]), parseInt(hora2[2]));
                if ((t2.getHours() - t1.getHours()) == 0) {
                    totalMinutosAux = t2.getMinutes() - t1.getMinutes();
                }
                else {
                    totalMinutosAux = (t2.getHours() - t1.getHours()) * 60;
                    if ((t2.getMinutes() - t1.getMinutes()) < 0) {
                        totalMinutosAux = (totalMinutosAux - (t2.getMinutes() - t1.getMinutes()) * -1);
                    }
                    else {
                        totalMinutosAux = totalMinutosAux + (t2.getMinutes() - t1.getMinutes());
                    }
                }
                /************************************************************************************************************************/
                //Esta sección realiza la captura de la fecha actual del sistema, que se utiliza para realizar la consulta en el 
                //caso de la option 2, para consultar la cantidad de caja en dos días.
                var fecha = new Date();
                console.log("fecha date : " + fecha);
                let year = fecha.getFullYear() + "";
                console.log("hora.length: " + year.length);
                let month = fecha.getMonth() + "";
                console.log("minuto.length: " + month.length);
                let day = fecha.getDate() + "";
                console.log("segundo.length: " + day.length);
                if (month.length == 1) {
                    month = "0" + month;
                }
                if (day.length == 1) {
                    day = "0" + day;
                }
                let fechaActual = year + "-" + month + "-" + day;
                console.log("fechaActual: " + fechaActual);
                /*****************************************************************************************************************/
                // option 1, para contar las cajas del turno que se encuentra en un mismo día
                if (option == '1') {
                    console.log("opcion 1");
                    if (date && time && id_caliper) {
                        if (totalMinutosAux < 60) {
                            // se calcula los minutos para realizar la division de cajas por minuto. 
                            var hora1 = time.split(":");
                            var hora2 = horaActual.split(":");
                            var t1 = new Date();
                            var t2 = new Date();
                            var totalMinutos;
                            t1.setHours(parseInt(hora1[0]), parseInt(hora1[1]), parseInt(hora1[2]));
                            t2.setHours(parseInt(hora2[0]), parseInt(hora2[1]), parseInt(hora2[2]));
                            if ((t2.getHours() - t1.getHours()) == 0) {
                                totalMinutos = t2.getMinutes() - t1.getMinutes();
                            }
                            else {
                                totalMinutos = (t2.getHours() - t1.getHours()) * 60;
                                if ((t2.getMinutes() - t1.getMinutes()) < 0) {
                                    totalMinutos = (totalMinutos - (t2.getMinutes() - t1.getMinutes()) * -1);
                                }
                                else {
                                    totalMinutos = totalMinutos + (t2.getMinutes() - t1.getMinutes());
                                }
                            }
                            MinutosDiv = totalMinutos;
                            searchBox = yield database_1.default.query('SELECT COUNT(registro_diario_caja_sellada.id) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado > ? AND id_calibrador = ?', [date, time, id_caliper]);
                        }
                        else {
                            //En esta sección se resta  una hora a la hora actual para realizar la consulta.
                            var t1 = new Date();
                            let horaSplit = horaActual.split(":");
                            t1.setHours(parseInt(horaSplit[0]), parseInt(horaSplit[1]), parseInt(horaSplit[2]));
                            t1.setHours(t1.getHours() - 1);
                            if (t1.getHours() < 10) {
                                hourSearch = "0" + t1.getHours() + ":";
                            }
                            else {
                                hourSearch = t1.getHours() + ":";
                            }
                            if (t1.getMinutes() < 10) {
                                hourSearch = hourSearch + "0" + t1.getMinutes() + ":";
                            }
                            else {
                                hourSearch = hourSearch + t1.getMinutes() + ":";
                            }
                            if (t1.getSeconds() < 10) {
                                hourSearch = hourSearch + "0" + t1.getSeconds();
                            }
                            else {
                                hourSearch = hourSearch + t1.getSeconds();
                            }
                            console.log("la hora actual es : " + horaActual);
                            console.log("La hora a buscar es :" + hourSearch);
                            /*********************************************************************************/
                            searchBox = yield database_1.default.query('SELECT COUNT(registro_diario_caja_sellada.id) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ?  AND hora_sellado > ? AND id_calibrador = ?', [date, hourSearch, id_caliper]);
                        }
                    }
                    else {
                        res.status(404).json({ text: 'error en datos de búsqueda de cajas' });
                    }
                    //option dos, que indica que la duración del turno se extiende de un día a otro. 
                }
                else if (option == '2') {
                    if (date && time && id_caliper) {
                        console.log("opcion 2 ");
                        // si son las 00 horas con xx minutos, se resta una hora, por lo que serian las 11 horas con xx minutos del dia anterior
                        if (hora == '00') {
                            console.log("if de 00");
                            let horaMenosUna = "11" + ":" + minuto + ":" + segundo;
                            searchBox = yield database_1.default.query('SELECT COUNT(registro_diario_caja_sellada.id) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado > ? AND hora_sellado < ? AND id_calibrador = ?', [date, horaMenosUna, '23:59:59', id_caliper]);
                            searchBoxAux = yield database_1.default.query('SELECT COUNT(registro_diario_caja_sellada.id) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado > ?  AND id_calibrador = ?', [fechaActual, '00:00:00', id_caliper]);
                            searchBox[0].total = searchBox[0].total + searchBoxAux[0].total;
                            // sino, sinifica que son mas de las 00 horas y se realiza la resta normal de una hora a la hora actual del dia actual del turno. 
                        }
                        else {
                            //se resta  una hora a la hora actual.
                            console.log("en el else");
                            var t1 = new Date();
                            let horaSplit = horaActual.split(":");
                            t1.setHours(parseInt(horaSplit[0]), parseInt(horaSplit[1]), parseInt(horaSplit[2]));
                            t1.setHours(t1.getHours() - 1);
                            if (t1.getHours() < 10) {
                                hourSearch = "0" + t1.getHours() + ":";
                            }
                            else {
                                hourSearch = t1.getHours() + ":";
                            }
                            if (t1.getMinutes() < 10) {
                                hourSearch = hourSearch + "0" + t1.getMinutes() + ":";
                            }
                            else {
                                hourSearch = hourSearch + t1.getMinutes() + ":";
                            }
                            if (t1.getSeconds() < 10) {
                                hourSearch = hourSearch + "0" + t1.getSeconds();
                            }
                            else {
                                hourSearch = hourSearch + t1.getSeconds();
                            }
                            console.log("la hora actual es : " + horaActual);
                            console.log("La hora a buscar es :" + hourSearch);
                            /***************************************************************************************/
                            searchBox = yield database_1.default.query('SELECT COUNT(registro_diario_caja_sellada.id) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ?  AND hora_sellado > ? AND id_calibrador = ?', [fechaActual, hourSearch, id_caliper]);
                        }
                    }
                    else {
                        res.status(404).json({ text: 'error en datos de búsqueda de cajas' });
                    }
                }
                if (searchBox.length > 0) {
                    console.log("total de cajas encontradas : " + searchBox[0].total);
                    //se divide el total de cajas encontradas por la cantidas de minutos de la última hora (60) o los minutos transcurridos en el turno en la primera hora depúes de ser iniciado.  
                    searchBox[0].total = Math.round(searchBox[0].total / MinutosDiv);
                    return res.status(200).json(searchBox);
                }
                else {
                    res.status(404).json({ text: 'Sin registros para esta búsqueda' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener cajas' });
            }
        });
    }
}
exports.monitoreoController = new MonitoreoController();
