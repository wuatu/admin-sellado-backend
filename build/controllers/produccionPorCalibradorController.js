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
exports.produccionPorCalibradorController = void 0;
const database_1 = __importDefault(require("../database"));
class ProduccionPorCalibradorController {
    //obtengo las lineas del calibrador
    countBoxInCaliper(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_caliper, fromDateSearch, toDateSearch } = req.params;
                console.log(id_caliper + fromDateSearch + toDateSearch);
                let numberBox;
                if (id_caliper) {
                    numberBox = yield database_1.default.query('SELECT fecha_sellado, Count(fecha_sellado) as numero FROM registro_diario_caja_sellada WHERE id_calibrador = ? AND (fecha_sellado BETWEEN ? AND ?) group by fecha_sellado', [id_caliper, fromDateSearch, toDateSearch]);
                    //numberBox = await pool.query('SELECT substr(fecha_sellado,1,10) as fecha_sellado2, Count(DATE_FORMAT(fecha_sellado, "%Y-%m-%d")) as numero FROM registro_diario_caja_sellada WHERE id_calibrador = ? AND (fecha_sellado BETWEEN ? AND ?) group by fecha_sellado2', [id_caliper, fromDateSearch, toDateSearch]);
                    //console.log(producctionSearch);
                }
                else {
                    res.status(404).json({ text: 'error en datos de busqueda del calibrador' });
                }
                if (numberBox.length > 0) {
                    return res.status(200).json(numberBox);
                }
                else {
                    res.status(404).json({ text: 'Sin registros para esta busqueda' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo realizar la busqueda' });
            }
        });
    }
    searchRegisterCaliper(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_caliper, fromDateSearch, toDateSearch } = req.params;
                console.log(id_caliper + fromDateSearch + toDateSearch);
                let searchCaliper;
                if (id_caliper) {
                    searchCaliper = yield database_1.default.query(' SELECT * FROM registro_diario_caja_sellada  WHERE id_calibrador = ? AND (fecha_sellado BETWEEN ? AND ?) ORDER BY fecha_sellado, hora_sellado ASC', [id_caliper, fromDateSearch, toDateSearch]);
                    //console.log(producctionSearch);
                }
                else {
                    res.status(404).json({ text: 'error en datos de busqueda del calibrador' });
                }
                if (searchCaliper.length > 0) {
                    return res.status(200).json(searchCaliper);
                }
                else {
                    res.status(204).json({ text: 'Sin registros para esta busqueda' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo realizar la busqueda' });
            }
        });
    }
    //Actualiza todos los colaboradores que estan en la linea
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                console.log(req.body);
                let registerUser;
                if (id) {
                    registerUser = yield database_1.default.query('UPDATE registro_diario_caja_sellada SET is_verificado = ?, is_before_time = ? WHERE id_calibrador = ? AND id_linea = ? AND codigo_de_barra = ? AND fecha_sellado = ? AND hora_sellado = ?', [req.body.is_verificado, req.body.is_before_time, req.body.id_calibrador, req.body.id_linea, req.body.codigo_de_barra, req.body.fecha_sellado, req.body.hora_sellado]);
                }
                else {
                    res.status(404).json({ text: 'id invalido' });
                }
                if (registerUser != null) {
                    if (registerUser.affectedRows > 0) {
                        res.status(200).json({ message: 'Registro actualizado' });
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo actualizar el registro' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo actualizar el registro' });
            }
        });
    }
}
exports.produccionPorCalibradorController = new ProduccionPorCalibradorController();
