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
    searchTotal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_calibrador } = req.params;
                console.log(id_calibrador);
                let idTurnoTotal;
                if (id_calibrador != "0") {
                    idTurnoTotal = yield database_1.default.query('select count(registro_diario_caja_sellada.id) as total from registro_diario_caja_sellada where id_calibrador = ? and id_apertura_cierre_de_turno=(SELECT MAX(id_apertura_cierre_de_turno))', [id_calibrador]);
                }
                if (idTurnoTotal.length > 0) {
                    return res.status(200).json(idTurnoTotal);
                }
                else {
                    res.status(404).json({ text: 'Sin registros de cajas' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener cajas' });
            }
        });
    }
    searchAverageforMinute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_turno, id_calibrador } = req.params;
                console.log(id_calibrador);
                let horasSellado;
                if (id_calibrador != "0") {
                    horasSellado = yield database_1.default.query('select hora_sellado from registro_diario_caja_sellada where id_calibrador = ? and id_apertura_cierre_de_turno = (SELECT MAX(id_apertura_cierre_de_turno)) order by hora_sellado', [id_calibrador]);
                }
                if (horasSellado.length > 0) {
                    console.log("horasSellado.lenght: " + horasSellado.length);
                    console.log("horasSellado: " + horasSellado[0].hora_sellado);
                    console.log("horasSellado: " + horasSellado[horasSellado.length - 1].hora_sellado);
                    var hora1 = (horasSellado[horasSellado.length - 1].hora_sellado).split(":");
                    var hora2 = (horasSellado[0].hora_sellado).split(":");
                    let t1 = new Date();
                    let t2 = new Date();
                    t1.setHours(hora1[0] - 3, hora1[1], hora1[0]);
                    t2.setHours(hora2[0] - 3, hora2[1], hora2[0]);
                    console.log(t1);
                    console.log(t2);
                    //Aquí hago la resta
                    let ms = t1.setHours(t1.getHours() - t2.getHours(), t1.getMinutes() - t2.getMinutes(), t1.getSeconds() - t2.getSeconds());
                    console.log("resta: " + ms);
                    let minutos = Math.ceil((ms % 3600000) / 60000);
                    console.log("minutos totales en turno: " + minutos);
                    console.log("promedio cajas selladas por minuto: " + Math.round(horasSellado.length / (minutos))); //miunto+1 para que tome el primer minuto
                    return res.status(200).json(Math.round(horasSellado.length / (minutos)));
                }
                else {
                    res.status(404).json({ text: 'Sin registros de cajas' });
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
                const { id_calibrador } = req.params;
                console.log(id_calibrador);
                let horasSellado;
                //Capturar hora actual del sistema
                var date = new Date();
                let hora = date.getHours() + "";
                console.log("hora.length: " + hora.length);
                let minuto = date.getMinutes() + "";
                console.log("minuto.length: " + minuto.length);
                let segundo = date.getSeconds() + "";
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
                let horaInicial = hora + ":00:00";
                console.log("horaInicial: " + horaInicial);
                let horaActual = hora + ":" + minuto + ":" + segundo;
                console.log("horaActual: " + horaActual);
                if (id_calibrador != "0") {
                    horasSellado = yield database_1.default.query('select hora_sellado from registro_diario_caja_sellada where id_calibrador = ? and id_apertura_cierre_de_turno = (SELECT MAX(id_apertura_cierre_de_turno)) AND hora_sellado between ? AND ? order by hora_sellado', [id_calibrador, horaInicial, horaActual]);
                }
                if (horasSellado.length > 0) {
                    console.log("horasSellado.lenght: " + horasSellado.length);
                    console.log("horasSellado: " + horasSellado[0].hora_sellado);
                    console.log("horasSellado: " + horasSellado[horasSellado.length - 1].hora_sellado);
                    var hora1 = (horasSellado[horasSellado.length - 1].hora_sellado).split(":");
                    var hora2 = (horasSellado[0].hora_sellado).split(":");
                    let t1 = new Date();
                    let t2 = new Date();
                    t1.setHours(hora1[0], hora1[1], hora1[2]);
                    t2.setHours(hora2[0], hora2[1], hora2[2]);
                    //Aquí hago la resta
                    let ms = t1.setHours(t1.getHours() - t2.getHours(), t1.getMinutes() - t2.getMinutes(), t1.getSeconds() - t2.getSeconds());
                    let minutos = Math.floor((ms % 3600000) / 60000);
                    console.log("resta: " + minutos);
                    console.log("prom: " + horasSellado.length / (minutos + 1)); //miunto+1 para que tome el primer minuto
                    return res.status(200).json(horasSellado.length / (minutos + 1));
                }
                else {
                    res.status(404).json({ text: 'Sin registros de cajas' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener cajas' });
            }
        });
    }
}
exports.monitoreoController = new MonitoreoController();
