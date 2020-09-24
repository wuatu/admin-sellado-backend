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
                    producctionSearch = yield database_1.default.query(' SELECT * FROM registro_diario_caja_sellada WHERE  rut_usuario = ? AND (fecha_sellado BETWEEN ? AND ?) ORDER BY fecha_sellado ASC', [rutSearch, fromDateSearch, toDateSearch]);
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
                console.log(rutSearch);
                console.log(fromDateSearch);
                console.log(toDateSearch);
                let producctionSearch;
                if (rutSearch && fromDateSearch && toDateSearch) {
                    producctionSearch = yield database_1.default.query('SELECT fecha_sellado, COUNT(fecha_sellado) as numero FROM registro_diario_caja_sellada  WHERE rut_usuario = ? AND (fecha_sellado BETWEEN ? AND ?) GROUP BY fecha_sellado', [rutSearch, fromDateSearch, toDateSearch]);
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
                console.log("HOLA MUNDO");
                const { id } = req.params;
                console.log(req.body);
                let registerUser;
                if (id) {
                    registerUser = yield database_1.default.query('UPDATE registro_diario_caja_sellada SET ? WHERE id = ?', [req.body, id]);
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
                console.log("HOLA MUNDO CTM !!!!!");
                res.status(404).json({ text: 'No se pudo actualizar el registro' });
            }
        });
    }
}
exports.produccionColaboradorController = new ProduccionColaboradorController();
