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
exports.produccionColaboradorController = void 0;
const database_1 = __importDefault(require("../database"));
class ProduccionColaboradorController {
    search(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { rutSearch, fromDateSearch, toDateSearch } = req.params;
                console.log(rutSearch);
                console.log(fromDateSearch);
                console.log(toDateSearch);
                let producctionSearch;
                if (rutSearch && fromDateSearch && toDateSearch) {
                    producctionSearch = yield database_1.default.query(' SELECT * FROM registro_diario_caja_sellada WHERE  rut_usuario = ? AND (fecha_sellado BETWEEN ? AND ?) ORDER BY fecha_sellado, hora_sellado ASC', [rutSearch, fromDateSearch, toDateSearch]);
                    //producctionSearch = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE  rut_usuario = ? AND fecha_sellado >= ? AND fecha_sellado <= ? ORDER BY fecha_sellado ASC', [rutSearch, fromDateSearch, toDateSearch]);
                    //console.log(producctionSearch);
                }
                else {
                    res.status(404).json({ text: 'error en datos de busqueda' });
                }
                if (producctionSearch.length > 0) {
                    return res.status(200).json(producctionSearch);
                }
                else {
                    console.log("Sin registros para esta busqueda");
                    res.status(404).json({ text: 'Sin registros para esta busqueda' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo realizar la busqueda' });
            }
        });
    }
    searchCount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { rutSearch, fromDateSearch, toDateSearch } = req.params;
                let producctionSearch;
                if (rutSearch && fromDateSearch && toDateSearch) {
                    producctionSearch = yield database_1.default.query('SELECT fecha_sellado, Count(fecha_sellado) as numero FROM registro_diario_caja_sellada WHERE rut_usuario = ? AND (fecha_sellado BETWEEN ? AND ?) group by fecha_sellado', [rutSearch, fromDateSearch, toDateSearch]);
                    console.log(producctionSearch);
                }
                else {
                    res.status(404).json({ text: 'error en datos de busqueda' });
                }
                if (producctionSearch.length > 0) {
                    return res.status(200).json(producctionSearch);
                }
                else {
                    console.log("Sin registros para esta busqueda");
                    res.status(404).json({ text: 'Sin registros para esta busqueda' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo realizar la busqueda' });
            }
        });
    }
    searchBoxByType(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { rutSearch, fromDateSearch, toDateSearch } = req.params;
                console.log(rutSearch);
                console.log(fromDateSearch);
                console.log(toDateSearch);
                let producctionSearch;
                if (rutSearch && fromDateSearch && toDateSearch) {
                    producctionSearch = yield database_1.default.query('SELECT envase_caja AS ENVASE, Count(envase_caja) as CANTIDAD FROM registro_diario_caja_sellada WHERE rut_usuario = ? AND (fecha_sellado BETWEEN ? AND ?) group by envase', [rutSearch, fromDateSearch, toDateSearch]);
                    console.log(producctionSearch);
                }
                else {
                    res.status(404).json({ text: 'error en datos de busqueda' });
                }
                if (producctionSearch.length > 0) {
                    return res.status(200).json(producctionSearch);
                }
                else {
                    console.log("Sin registros para esta busqueda");
                    res.status(404).json({ text: 'Sin registros para esta busqueda' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo realizar la busqueda' });
            }
        });
    }
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
exports.produccionColaboradorController = new ProduccionColaboradorController();
