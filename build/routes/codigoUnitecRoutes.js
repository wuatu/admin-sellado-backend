"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const codigoUnitecController_1 = require("../controllers/codigoUnitecController");
class CodigoUnitecRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/registros_cod_unitec', codigoUnitecController_1.codigoUnitecController.list);
        this.router.get('/busqueda_cod_unitec/:code', codigoUnitecController_1.codigoUnitecController.searchCodeBox);
        this.router.post('/registros_cod_unitec', codigoUnitecController_1.codigoUnitecController.create);
    }
}
const codigoUnitecRoutes = new CodigoUnitecRoutes();
exports.default = codigoUnitecRoutes.router;
