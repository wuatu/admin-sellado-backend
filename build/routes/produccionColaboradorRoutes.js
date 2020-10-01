"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const produccionColaboradorController_1 = require("../controllers/produccionColaboradorController");
class ProduccionColaboradorRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/registros_produccion_colaborador/:rutSearch/:fromDateSearch/:toDateSearch', produccionColaboradorController_1.produccionColaboradorController.search);
        this.router.get('/registros_produccion_colaborador_cajas_diarias/:rutSearch/:fromDateSearch/:toDateSearch', produccionColaboradorController_1.produccionColaboradorController.searchCount);
        this.router.get('/registros_produccion_colaborador_tipo_cajas_diarias/:rutSearch/:fromDateSearch/:toDateSearch', produccionColaboradorController_1.produccionColaboradorController.searchBoxByType);
        this.router.put('/registro_produccion_colaborador_update/:id', produccionColaboradorController_1.produccionColaboradorController.update);
    }
}
const produccionColaboradorRoute = new ProduccionColaboradorRoutes();
exports.default = produccionColaboradorRoute.router;
