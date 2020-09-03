"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const calibradorController_1 = require("../controllers/calibradorController");
class CalibradorRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/calibradores', calibradorController_1.calibradorController.list);
        this.router.post('/calibrador', calibradorController_1.calibradorController.create);
        this.router.get('/calibrador/:id', calibradorController_1.calibradorController.getOne);
        this.router.put('/calibrador/:id', calibradorController_1.calibradorController.update);
        this.router.delete('/calibrador/:id', calibradorController_1.calibradorController.delete);
    }
}
const calibradorRoutes = new CalibradorRoutes();
exports.default = calibradorRoutes.router;
