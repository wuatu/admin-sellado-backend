"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lineaController_1 = require("../controllers/lineaController");
class LineaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/lineas', lineaController_1.lineaController.list);
        this.router.get('/lineas/:id', lineaController_1.lineaController.list);
        this.router.post('/linea/', lineaController_1.lineaController.create);
        this.router.get('/linea/:id', lineaController_1.lineaController.getOne);
        this.router.put('/linea/:id', lineaController_1.lineaController.update);
        this.router.delete('/linea/:id', lineaController_1.lineaController.delete);
    }
}
const lineaRoutes = new LineaRoutes();
exports.default = lineaRoutes.router;
