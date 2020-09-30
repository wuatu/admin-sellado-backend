"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const produccionPorCalibradorController_1 = require("../controllers/produccionPorCalibradorController");
class ProduccionPorCalibradorRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/numero_cajas_calibrador/:id_caliper/:fromDateSearch/:toDateSearch', produccionPorCalibradorController_1.produccionPorCalibradorController.countBoxInCaliper);
        this.router.get('/registros_cajas_calibrador/:id_caliper/:fromDateSearch/:toDateSearch', produccionPorCalibradorController_1.produccionPorCalibradorController.searchRegisterCaliper);
        this.router.put('/registro_produccion_calibrador_update/:id', produccionPorCalibradorController_1.produccionPorCalibradorController.update);
    }
}
const produccionPorCalibradorRoute = new ProduccionPorCalibradorRoutes();
exports.default = produccionPorCalibradorRoute.router;
