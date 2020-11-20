"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lectorEnLineaController_1 = require("../controllers/lectorEnLineaController");
class LectorEnLineaController {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/lector_linea/:id', lectorEnLineaController_1.lectorEnLineaController.getLastLectorInLine);
    }
}
const lectorEnLineaRoutes = new LectorEnLineaController();
exports.default = lectorEnLineaRoutes.router;
