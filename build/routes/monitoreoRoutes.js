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
        this.router.get('/monitoreo_produccion_turno/:id_caliper/:date/:time/:option', monitoreoController_1.monitoreoController.countBoxBycaliper);
        this.router.get('/monitoreo_produccion_minuto/:id_caliper/:date/:time/:option', monitoreoController_1.monitoreoController.searchAverageforMinute);
        this.router.get('/monitoreo_produccion_minuto_ultima_hora/:id_caliper/:date/:time/:option', monitoreoController_1.monitoreoController.searchAverageLastHourforMinute);
        this.router.get('/monitoreo_last_turno/', monitoreoController_1.monitoreoController.getLastTurno);
        //this.router.get('/monitoreo_promedio_por_minuto/:id_calibrador',monitoreoController.searchAverageforMinute);
        //this.router.get('/monitoreo_promedio_ultima_hora_por_minuto/:id_calibrador',monitoreoController.searchAverageLastHourforMinute);
    }
}
const monitoreoRoutes = new MonitoreoRoutes();
exports.default = monitoreoRoutes.router;
