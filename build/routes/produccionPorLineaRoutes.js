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
        this.router.get('/registros_lineas_calibrador/:id_caliper/:id_line/:fromDateSearch/:toDateSearch', produccionPorLineaController_1.produccionPorLineaController.countBoxByline);
    }
}
const produccionPorLineaRoute = new ProduccionPorLineaRoutes();
exports.default = produccionPorLineaRoute.router;
