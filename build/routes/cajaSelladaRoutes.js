"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cajaSelladaController_1 = require("../controllers/cajaSelladaController");
class CajaSelladaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/cajas_selladas/:id_linea/:id_calibrador', cajaSelladaController_1.cajaSelladaController.list);
        this.router.post('/caja_sellada', cajaSelladaController_1.cajaSelladaController.create);
        //this.router.get('/caja_sellada_search/:criterionSearch/:toSearch/:fromDateSearch/:toDateSearch',cajaSelladaController.search);
        this.router.get('/caja_sellada_search_line_caliper/:criterionSearch/:toSearch/:fromDateSearch/:toDateSearch/:idLine/:idCaliper/:validadas', cajaSelladaController_1.cajaSelladaController.searchLineAndCaliper);
        this.router.get('/caja_sellada_count_box/:criterionSearch/:toSearch/:fromDateSearch/:toDateSearch/:idLine/:idCaliper/:validadas', cajaSelladaController_1.cajaSelladaController.countBoxUnique);
        //this.router.get('/usuario_en_linea/:id',usuarioEnLineaController.getOne);
        //this.router.put('/usuario_en_linea/:id',usuarioEnLineaController.update);
        //this.router.delete('/usuario_en_Linea/:id',usuarioEnLineaController.delete);
    }
}
const cajaSelladaRoutes = new CajaSelladaRoutes();
exports.default = cajaSelladaRoutes.router;
