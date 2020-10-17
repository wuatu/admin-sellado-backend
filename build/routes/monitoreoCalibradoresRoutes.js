"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const monitoreoCalibradoresController_1 = require("../controllers/monitoreoCalibradoresController");
class MonitoreoCalibradoresRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/monitoreo_calibrador_produccion_turno/:id_caliper/:date/:time/:option', monitoreoCalibradoresController_1.monitoreoCalibradoresController.countBoxBycaliper);
        this.router.get('/monitoreo_calibrador_produccion_minuto/:id_caliper/:date/:time/:option', monitoreoCalibradoresController_1.monitoreoCalibradoresController.searchAverageforMinute);
        this.router.get('/monitoreo_calibrador_produccion_minuto_ultima_hora/:id_caliper/:date/:time/:option', monitoreoCalibradoresController_1.monitoreoCalibradoresController.searchAverageLastHourforMinute);
        this.router.get('/monitoreo_calibrador_last_turno/', monitoreoCalibradoresController_1.monitoreoCalibradoresController.getLastTurno);
        this.router.get('/monitoreo_calibrador_production_line/:id_caliper/:id_line/:name_line/:date/:time/:option', monitoreoCalibradoresController_1.monitoreoCalibradoresController.getProductionLineTurno);
        //this.router.get('/monitoreo_promedio_por_minuto/:id_calibrador',monitoreoController.searchAverageforMinute);
        //this.router.get('/monitoreo_promedio_ultima_hora_por_minuto/:id_calibrador',monitoreoController.searchAverageLastHourforMinute);
    }
}
const monitoreoCalibradoresRoutes = new MonitoreoCalibradoresRoutes();
exports.default = monitoreoCalibradoresRoutes.router;
