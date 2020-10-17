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
    constructor() {
    }
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
    countBoxBycaliper(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { date, time, id_caliper, option } = req.params;
                let searchBox;
                let searchBoxAux;
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
                        //Capturar fecha actual del sistema
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
    searchAverageforMinute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Capturar hora actual del sistema
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
            //Capturar fecha actual del sistema
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
            try {
                const { date, time, id_caliper, option } = req.params;
                let searchBox;
                let searchBoxAux;
                let totalMinutos = 0;
                let totalMinutosAux = 0;
                if (option == '1') {
                    console.log("pase if ");
                    console.log("promedio minuto if consulta");
                    // calcular la cantidad de minutos 
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
                    searchBox = yield database_1.default.query('SELECT COUNT(registro_diario_caja_sellada.id) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado > ? AND id_calibrador = ?', [date, time, id_caliper]);
                    console.log("respuesta: " + searchBox[0].total);
                    //console.log("totalMinutos: " + totalMinutos);
                }
                else if (option == '2') {
                    if (date && time && id_caliper) {
                        console.log("option 2");
                        // calcular la cantidad de minutos primer dia 
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
                        // calcular la cantidad de minutos segundo día 
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
    searchAverageLastHourforMinute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { date, time, id_caliper, option } = req.params;
                let searchBox;
                let searchBoxAux;
                let hourSearch;
                let MinutosDiv = 60;
                let totalMinutosAux = 0;
                //Capturar hora actual del sistema
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
                // calcular la cantidad de minutos primer dia 
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
                //Capturar fecha actual del sistema
                //revisar la fecha actual
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
                if (option == '1') {
                    console.log("opcion 1");
                    if (date && time && id_caliper) {
                        if (totalMinutosAux < 60) {
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
                            //se resta  una hora.
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
                            searchBox = yield database_1.default.query('SELECT COUNT(registro_diario_caja_sellada.id) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ?  AND hora_sellado > ? AND id_calibrador = ?', [date, hourSearch, id_caliper]);
                        }
                    }
                    else {
                        res.status(404).json({ text: 'error en datos de búsqueda de cajas' });
                    }
                }
                else if (option == '2') {
                    if (date && time && id_caliper) {
                        console.log("opcion 2 ");
                        if (hora == '00') {
                            console.log("if de 00");
                            let horaMenosUna = "11" + ":" + minuto + ":" + segundo;
                            searchBox = yield database_1.default.query('SELECT COUNT(registro_diario_caja_sellada.id) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado > ? AND hora_sellado < ? AND id_calibrador = ?', [date, horaMenosUna, '23:59:59', id_caliper]);
                            searchBoxAux = yield database_1.default.query('SELECT COUNT(registro_diario_caja_sellada.id) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado > ?  AND id_calibrador = ?', [fechaActual, '00:00:00', id_caliper]);
                            searchBox[0].total = searchBox[0].total + searchBoxAux[0].total;
                        }
                        else {
                            //se resta  una hora.
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
                            searchBox = yield database_1.default.query('SELECT COUNT(registro_diario_caja_sellada.id) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ?  AND hora_sellado > ? AND id_calibrador = ?', [fechaActual, hourSearch, id_caliper]);
                        }
                    }
                    else {
                        res.status(404).json({ text: 'error en datos de búsqueda de cajas' });
                    }
                }
                if (searchBox.length > 0) {
                    console.log("total de cajas encontradas : " + searchBox[0].total);
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
