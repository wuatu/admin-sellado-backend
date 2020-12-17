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
exports.cajaSelladaController = void 0;
const database_1 = __importDefault(require("../database"));
class CajaSelladaController {
    searchByCode(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Entre a searchByCode !!!!");
                const { criterionSearch, toSearch, validadas } = req.params;
                let verificadas = 0;
                if (validadas == "true") {
                    verificadas = 1;
                }
                let searchByCode;
                if (criterionSearch == "Codigo" && toSearch) {
                    console.log("Calibre");
                    searchByCode = yield database_1.default.query(' SELECT * FROM registro_diario_caja_sellada WHERE codigo_de_barra LIKE ? AND is_verificado = ?', [toSearch, verificadas]);
                }
                if (searchByCode.length > 0) {
                    return res.status(200).json(searchByCode);
                }
                else {
                    res.status(204).json({ text: 'No existen registros de seguimiento de cajas para mostrar' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo realizar la busqueda' });
            }
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_linea, id_calibrador } = req.params;
                let usuariosEnLinea;
                if (id_calibrador != "0" && id_linea != "0") {
                    usuariosEnLinea = yield database_1.default.query('SELECT * FROM registro_diario_caja_sellada WHERE id_linea = ? and id_calibrador = ? ORDER BY fecha_sellado, hora_sellado ASC', [id_linea, id_calibrador]);
                }
                if (usuariosEnLinea.length > 0) {
                    return res.status(200).json(usuariosEnLinea);
                }
                else {
                    res.status(204).json({ text: 'No existen registros de seguimiento de cajas para mostrar' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener registro de seguimiento de cajas' });
            }
        });
    }
    countBoxUnique(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { criterionSearch, toSearch, fromDateSearch, toDateSearch, idLine, idCaliper, validadas } = req.params;
                let verificadas = 0;
                if (validadas == "true") {
                    verificadas = 1;
                }
                console.log(validadas);
                let registerByCriterion;
                console.log("1|234das");
                if (criterionSearch == "Calibre" && fromDateSearch && toDateSearch && toSearch && idLine && idCaliper) {
                    console.log("Calibre");
                    registerByCriterion = yield database_1.default.query('SELECT COUNT(DISTINCT(codigo_de_barra)) as cantidad FROM registro_diario_caja_sellada WHERE Calibre_Unitec LIKE ? AND (fecha_sellado BETWEEN ? AND ?) AND id_linea = ? AND id_calibrador = ? AND is_verificado = ?', ['%' + toSearch + '%', fromDateSearch, toDateSearch, idLine, idCaliper, verificadas]);
                }
                else if (criterionSearch == "Categoria" && fromDateSearch && toDateSearch && toSearch && idLine && idCaliper) {
                    console.log("Categoria");
                    registerByCriterion = yield database_1.default.query('SELECT COUNT(DISTINCT(codigo_de_barra)) as cantidad FROM registro_diario_caja_sellada WHERE Categoria_Unitec LIKE ? AND (fecha_sellado BETWEEN ? AND ?) AND id_linea = ? AND id_calibrador = ? AND is_verificado = ?', ['%' + toSearch + '%', fromDateSearch, toDateSearch, idLine, idCaliper, verificadas]);
                }
                else if (criterionSearch == "Embalaje" && fromDateSearch && toDateSearch && toSearch && idLine && idCaliper) {
                    console.log("Embalaje");
                    registerByCriterion = yield database_1.default.query('SELECT COUNT(DISTINCT(codigo_de_barra)) as cantidad FROM registro_diario_caja_sellada WHERE Embalaje_Unitec LIKE ? AND (fecha_sellado BETWEEN ? AND ?) AND id_linea = ? AND id_calibrador = ? AND is_verificado = ?', ['%' + toSearch + '%', fromDateSearch, toDateSearch, idLine, idCaliper, verificadas]);
                }
                else if (criterionSearch == "Envase" && fromDateSearch && toDateSearch && toSearch && idLine && idCaliper) {
                    console.log("Envase");
                    registerByCriterion = yield database_1.default.query(' SELECT COUNT(DISTINCT(codigo_de_barra)) as cantidad FROM registro_diario_caja_sellada WHERE  Envase_Unitec LIKE ? AND (fecha_sellado BETWEEN ? AND ?) AND id_linea = ? AND id_calibrador = ? AND is_verificado = ?', ['%' + toSearch + '%', fromDateSearch, toDateSearch, idLine, idCaliper, verificadas]);
                }
                else if (criterionSearch == "undefined" && fromDateSearch && fromDateSearch && idLine && idCaliper) {
                    //console.log("aquiiiiiiiiiiii");
                    registerByCriterion = yield database_1.default.query(' SELECT COUNT(DISTINCT(codigo_de_barra)) as cantidad FROM registro_diario_caja_sellada WHERE (fecha_sellado like ?) AND id_linea = ? AND id_calibrador = ? AND is_verificado = ?', [fromDateSearch, idLine, idCaliper, verificadas]);
                }
                else if (criterionSearch == "undefined" && fromDateSearch && fromDateSearch) {
                    console.log("asas");
                    registerByCriterion = yield database_1.default.query(' SELECT COUNT(DISTINCT(codigo_de_barra)) as cantidad FROM registro_diario_caja_sellada WHERE (fecha_sellado BETWEEN ? AND ?) AND id_linea = ? AND id_calibrador = ? AND is_verificado = ?', [fromDateSearch, toDateSearch, idLine, idCaliper, verificadas]);
                }
                if (registerByCriterion.length > 0) {
                    return res.status(200).json(registerByCriterion);
                }
                else {
                    res.status(204).json({ text: 'No existen registros de seguimiento de cajas para mostrar' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo realizar la busqueda' });
            }
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
            catch (_b) {
                res.status(404).json({ text: 'No se pudo realizar la busqueda' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                const registroSegimientoCaja = yield database_1.default.query('INSERT INTO registro_diario_caja_sellada set ?', [req.body]);
                const registroSegimientoCaja2 = yield database_1.default.query('INSERT INTO registro_diario_caja_sellada_aux set ?', [req.body]);
                if (registroSegimientoCaja != null) {
                    console.log(registroSegimientoCaja);
                    if (registroSegimientoCaja != null) {
                        if (registroSegimientoCaja.affectedRows > 0) {
                            res.status(200).json({ message: 'registro de seguimiento de cajas creado' });
                        }
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo crear el registro de seguimiento de cajasssssss' });
                    }
                }
            }
            catch (_a) {
                console.log("catch!!!!!!");
                res.status(404).json({ text: 'No se pudo crear el registro de seguimiento de cajas' });
            }
        });
    }
    /*public async search(req: Request, res: Response) {
        try {
            const { criterionSearch, toSearch, fromDateSearch, toDateSearch } = req.params;
             console.log(criterionSearch);
             console.log(toSearch);
             console.log(fromDateSearch);
             console.log(toDateSearch);
            
             let registerByCriterion: any;
            
            if (criterionSearch == "Calibre" && fromDateSearch && toDateSearch && toSearch) {
                console.log("Calibre");
                registerByCriterion = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE  calibre_caja = ? AND (fecha_sellado BETWEEN ? AND ?) ORDER BY fecha_sellado, hora_sellado ASC', [toSearch, fromDateSearch, toDateSearch]);
            
            } else if(criterionSearch == "Categoria" && fromDateSearch && toDateSearch && toSearch){
                console.log("Categoria");
                registerByCriterion = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE  categoria_caja = ? AND (fecha_sellado BETWEEN ? AND ?) ORDER BY fecha_sellado, hora_sellado ASC', [toSearch, fromDateSearch, toDateSearch]);
            
            } else if (criterionSearch == "Variedad" && fromDateSearch && toDateSearch && toSearch) {
                console.log("Variedad");
                registerByCriterion = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE  variedad_caja = ? AND (fecha_sellado BETWEEN ? AND ?) ORDER BY fecha_sellado, hora_sellado ASC', [toSearch, fromDateSearch, toDateSearch]);
            
            } else if(criterionSearch == "Envase" && fromDateSearch && toDateSearch && toSearch){
                console.log("Envase entreeeee!!!!");
                registerByCriterion = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE  envase_caja = ? AND (fecha_sellado BETWEEN ? AND ?) ORDER BY fecha_sellado, hora_sellado ASC', [toSearch, fromDateSearch, toDateSearch]);
            }
            
            if (registerByCriterion.length > 0) {
                return res.status(200).json(registerByCriterion);
            
            } else {
                res.status(404).json({ text: 'Sin registros para esta busqueda' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo realizar la busqueda' });
        }

    }*/
    searchLineAndCaliper(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { criterionSearch, toSearch, fromDateSearch, toDateSearch, idLine, idCaliper, validadas } = req.params;
                let verificadas = 0;
                if (validadas == "true") {
                    verificadas = 1;
                }
                let registerByCriterion;
                if (criterionSearch == "Calibre" && fromDateSearch && toDateSearch && toSearch && idLine && idCaliper) {
                    console.log("Calibre");
                    registerByCriterion = yield database_1.default.query(' SELECT * FROM registro_diario_caja_sellada WHERE Calibre_Unitec LIKE ? AND (fecha_sellado BETWEEN ? AND ?) AND id_linea = ? AND id_calibrador = ? AND is_verificado = ? ORDER BY fecha_sellado, hora_sellado ASC', ['%' + toSearch + '%', fromDateSearch, toDateSearch, idLine, idCaliper, verificadas]);
                }
                else if (criterionSearch == "Categoria" && fromDateSearch && toDateSearch && toSearch && idLine && idCaliper) {
                    console.log("Categoria");
                    registerByCriterion = yield database_1.default.query(' SELECT * FROM registro_diario_caja_sellada WHERE  Categoria_Unitec LIKE ? AND (fecha_sellado BETWEEN ? AND ?) AND id_linea = ? AND id_calibrador = ? AND is_verificado = ? ORDER BY fecha_sellado, hora_sellado ASC', ['%' + toSearch + '%', fromDateSearch, toDateSearch, idLine, idCaliper, verificadas]);
                }
                else if (criterionSearch == "Embalaje" && fromDateSearch && toDateSearch && toSearch && idLine && idCaliper) {
                    console.log("Embalaje");
                    registerByCriterion = yield database_1.default.query(' SELECT * FROM registro_diario_caja_sellada WHERE  Embalaje_Unitec LIKE ? AND (fecha_sellado BETWEEN ? AND ?) AND id_linea = ? AND id_calibrador = ? AND is_verificado = ? ORDER BY fecha_sellado, hora_sellado ASC', ['%' + toSearch + '%', fromDateSearch, toDateSearch, idLine, idCaliper, verificadas]);
                }
                else if (criterionSearch == "Envase" && fromDateSearch && toDateSearch && toSearch && idLine && idCaliper) {
                    console.log("Envase");
                    registerByCriterion = yield database_1.default.query(' SELECT * FROM registro_diario_caja_sellada WHERE  Envase_Unitec LIKE ? AND (fecha_sellado BETWEEN ? AND ?) AND id_linea = ? AND id_calibrador = ? AND is_verificado = ? ORDER BY fecha_sellado, hora_sellado ASC', ['%' + toSearch + '%', fromDateSearch, toDateSearch, idLine, idCaliper, verificadas]);
                }
                else if (criterionSearch == "undefined" && fromDateSearch && fromDateSearch && idLine && idCaliper) {
                    console.log("aquiiiiiiiiiiii");
                    registerByCriterion = yield database_1.default.query(' SELECT * FROM registro_diario_caja_sellada WHERE (fecha_sellado like ?) AND id_linea = ? AND id_calibrador = ? AND is_verificado = ? ORDER BY fecha_sellado, hora_sellado ASC', [fromDateSearch, idLine, idCaliper, verificadas]);
                }
                else if (criterionSearch == "undefined" && fromDateSearch && fromDateSearch) {
                    console.log("asas");
                    registerByCriterion = yield database_1.default.query(' SELECT * FROM registro_diario_caja_sellada WHERE (fecha_sellado BETWEEN ? AND ?) AND id_linea = ? AND id_calibrador = ? AND is_verificado = ? ORDER BY fecha_sellado, hora_sellado ASC', [fromDateSearch, toDateSearch, idLine, idCaliper, verificadas]);
                }
                if (registerByCriterion.length > 0) {
                    return res.status(200).json(registerByCriterion);
                }
                else {
                    res.status(204).json({ text: 'No existen registros de seguimiento de cajas para mostrar' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo realizar la busqueda' });
            }
        });
    }
}
exports.cajaSelladaController = new CajaSelladaController();
