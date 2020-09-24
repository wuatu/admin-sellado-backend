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
exports.produccionPorLineaController = void 0;
const database_1 = __importDefault(require("../database"));
class ProduccionPorLineaController {
    //obtengo las lineas del calibrador
    countBoxByline(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_caliper, id_line, fromDateSearch, toDateSearch } = req.params;
                console.log(id_caliper + id_line + fromDateSearch + toDateSearch);
                let searchBox;
                if (id_caliper && id_line) {
                    searchBox = yield database_1.default.query(' SELECT fecha_sellado, COUNT(fecha_sellado) as numero FROM registro_diario_caja_sellada  WHERE id_calibrador = ? AND id_linea = ? AND (fecha_sellado BETWEEN ? AND ?) GROUP BY fecha_sellado', [id_caliper, id_line, fromDateSearch, toDateSearch]);
                    //console.log(producctionSearch);
                }
                else {
                    res.status(404).json({ text: 'error en datos de busqueda de cajas' });
                }
                if (searchBox.length > 0) {
                    return res.status(200).json(searchBox);
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
}
exports.produccionPorLineaController = new ProduccionPorLineaController();
