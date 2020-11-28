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
                console.log("entre al try ");
                let lastTurno;
                lastTurno = yield database_1.default.query('SELECT * FROM apertura_cierre_de_turno WHERE fecha_cierre = "" AND hora_cierre = "" ORDER by ID DESC LIMIT 1;');
                if (lastTurno.length > 0) {
                    console.log("entre al if > 0");
                    return res.status(200).json(lastTurno);
                }
                else {
                    res.status(204).json({ text: 'Sin registros para esta búsqueda' });
                    console.log("entre al else > 0");
                }
            }
            catch (_a) {
                console.log("entre al catch");
                res.status(404).json({ text: 'No se pudo realizar la búsqueda' });
            }
        });
    }
    countBoxBycaliper2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("countBoxByCaliper2");
                const { id_caliper, id_turno, fecha_apertura, hora_apertura } = req.params;
                console.log(id_caliper);
                console.log(id_turno);
                console.log(fecha_apertura);
                console.log(hora_apertura);
                console.log("countBoxBycaliper2()");
                let searchBox;
                //crear variable dateApertura desde la fecha y la hora de apertura del turno para ello se pasa la fecha y la hora en formato ISO UTC
                var dateApertura = new Date(fecha_apertura + "T" + hora_apertura + "Z");
                console.log("date apertura: " + dateApertura);
                dateApertura = new Date(fecha_apertura + "T" + hora_apertura);
                console.log("date apertura: " + dateApertura);
                //se buscan todos los registros (borré validado=1) para que llegue todo al fronted despues se fultra en el front. fecha_sellado_time es la clave para buscar cuando se pasa de un dia a otro.
                searchBox = yield database_1.default.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada WHERE id_calibrador = ? AND id_apertura_cierre_de_turno = ? AND is_verificado = 1', [id_caliper, id_turno]);
                if (searchBox.length > 0) {
                    console.log("produccion turno : " + searchBox[0].total);
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
    //promedio de cajas por minuto en turno, se consulta solo por las cajas en un calibrador y turno x, ya que se necesitan las cajas de todo el turno
    //al tener el id no es necesario saber si el turno esta en un dia u otro.
    searchAverageforMinute2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_caliper, id_turno, fecha_apertura, hora_apertura } = req.params;
                console.log(id_caliper);
                console.log(id_turno);
                console.log(fecha_apertura);
                console.log(hora_apertura);
                console.log("getAverageforMinute2()");
                let searchBox;
                //crear variable dateApertura desde la fecha y la hora de apertura del turno para ello se pasa la fecha y la hora en formato ISO UTC
                var dateApertura = new Date(fecha_apertura + "T" + hora_apertura + "Z");
                dateApertura = new Date(fecha_apertura + "T" + hora_apertura);
                console.log("date apertura: " + dateApertura);
                //creo variable date que corresponde a la fecha actual
                var date = (new Date());
                // Se calcula la cantidad de minutos para realizar el promedio 
                var tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos = (date.getTime() - dateApertura.getTime()) / 60000;
                console.log("tiempo transcurrido desde que se inicia el turno : " + tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos);
                //se buscan todos los registros (borré validado=1) para que llegue todo al fronted despues se fultra en el front. fecha_sellado_time es la clave para buscar cuando se pasa de un dia a otro.
                searchBox = yield database_1.default.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada WHERE id_calibrador = ? AND id_apertura_cierre_de_turno = ? AND is_verificado = 1', [id_caliper, id_turno]);
                if (searchBox.length > 0) {
                    console.log("total de cajas encontradas : " + searchBox[0].total);
                    //se divide el total de cajas encontradas por la cantidas de minutos transcurridos en el turno.  
                    searchBox[0].total = Math.round(searchBox[0].total / tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos);
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
    searchAverageLastHourforMinute2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_caliper, id_turno, fecha_apertura, hora_apertura } = req.params;
                console.log(id_caliper);
                console.log(id_turno);
                console.log(fecha_apertura);
                console.log(hora_apertura);
                let searchBox;
                let MinutosDiv = 60;
                //crear variable dateApertura desde la fecha y la hora de apertura del turno para ello se pasa la fecha y la hora en formato ISO UTC
                var dateApertura = new Date(fecha_apertura + "T" + hora_apertura);
                console.log("date apertura: " + dateApertura);
                //creo variable date que corresponde a la fecha actual
                var date = (new Date());
                //se calcula la cantidad de minutos previamente para saber si el turno comenzo hace menos de una hora y asi no restar una hora a la consulta.
                var tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos = (date.getTime() - dateApertura.getTime()) / 60000;
                console.log("tiempo transcurrido desde que se inicia el turno : " + tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos);
                if (tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos < 60) {
                    MinutosDiv = tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos;
                }
                //restar una hora a la hora actual, se obtiene un valor númerico con el que se puede hacer la comparación
                var tiempoMenosUnaHora = (date.getTime() - (60000 * 60));
                //var tiempoMenosUnaHora: number = date.getHours() - 1;
                console.log("hora actual menos una hora  : " + tiempoMenosUnaHora);
                //se buscan todos los registros (borré validado=1) para que llegue todo al fronted despues se fultra en el front. fecha_sellado_time es la clave para buscar cuando se pasa de un dia a otro.
                searchBox = yield database_1.default.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada WHERE id_calibrador = ? AND id_apertura_cierre_de_turno = ? AND fecha_validacion_time >= ? AND is_verificado = 1', [id_caliper, id_turno, tiempoMenosUnaHora]);
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
