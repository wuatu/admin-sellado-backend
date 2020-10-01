"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const produccionPorLineaController_1 = require("../controllers/produccionPorLineaController");
class ProduccionPorLineaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/contador_cajas_calibrador_linea/:id_caliper/:id_line/:fromDateSearch/:toDateSearch', produccionPorLineaController_1.produccionPorLineaController.countBoxByline);
        this.router.get('/registros_cajas_calibrador_linea/:id_caliper/:id_line/:fromDateSearch/:toDateSearch', produccionPorLineaController_1.produccionPorLineaController.searchRegisterLine);
        this.router.put('/registro_produccion_linea_update/:id', produccionPorLineaController_1.produccionPorLineaController.update);
    }
}
const produccionPorLineaRoute = new ProduccionPorLineaRoutes();
exports.default = produccionPorLineaRoute.router;
