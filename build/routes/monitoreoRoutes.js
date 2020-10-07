"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const monitoreoController_1 = require("../controllers/monitoreoController");
class MonitoreoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/monitoreo_turno/:id_calibrador', monitoreoController_1.monitoreoController.searchTotal);
        this.router.get('/monitoreo_promedio_por_minuto/:id_calibrador', monitoreoController_1.monitoreoController.searchAverageforMinute);
        this.router.get('/monitoreo_promedio_ultima_hora_por_minuto/:id_calibrador', monitoreoController_1.monitoreoController.searchAverageLastHourforMinute);
    }
}
const monitoreoRoutes = new MonitoreoRoutes();
exports.default = monitoreoRoutes.router;
