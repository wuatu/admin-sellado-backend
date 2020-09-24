"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cajaController_1 = require("../controllers/cajaController");
class CajaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/cajas', cajaController_1.cajaController.list);
        this.router.post('/caja', cajaController_1.cajaController.create);
        this.router.get('/caja/:id', cajaController_1.cajaController.getOne);
        this.router.put('/caja/:id', cajaController_1.cajaController.update);
        this.router.delete('/caja/:id', cajaController_1.cajaController.delete);
    }
}
const cajaRoutes = new CajaRoutes();
exports.default = cajaRoutes.router;
