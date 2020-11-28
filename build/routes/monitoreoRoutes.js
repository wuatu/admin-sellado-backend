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
        /****************************************************************************************************************************************************************************************************/
        this.router.get('/monitoreo_produccion_turno/:date/:time/:id_caliper/:option/:fecha_actual', monitoreoController_1.monitoreoController.countBoxBycaliper);
        this.router.get('/monitoreo_produccion_turno2/:id_caliper/:id_turno/:fecha_apertura/:hora_apertura', monitoreoController_1.monitoreoController.countBoxBycaliper2);
        /****************************************************************************************************************************************************************************************************/
        /****************************************************************************************************************************************************************************************************/
        this.router.get('/monitoreo_produccion_minuto/:date/:time/:id_caliper/:option/:fecha_actual', monitoreoController_1.monitoreoController.searchAverageforMinute);
        this.router.get('/monitoreo_produccion_minuto2/:id_caliper/:id_turno/:fecha_apertura/:hora_apertura', monitoreoController_1.monitoreoController.searchAverageforMinute2);
        /****************************************************************************************************************************************************************************************************/
        /****************************************************************************************************************************************************************************************************/
        this.router.get('/monitoreo_produccion_minuto_ultima_hora/:date/:time/:id_caliper/:option/:fecha_actual', monitoreoController_1.monitoreoController.searchAverageLastHourforMinute);
        this.router.get('/monitoreo_produccion_minuto_ultima_hora2/:id_caliper/:id_turno/:fecha_apertura/:hora_apertura', monitoreoController_1.monitoreoController.searchAverageLastHourforMinute2);
        /****************************************************************************************************************************************************************************************************/
        this.router.get('/monitoreo_last_turno/', monitoreoController_1.monitoreoController.getLastTurno);
    }
}
const monitoreoRoutes = new MonitoreoRoutes();
exports.default = monitoreoRoutes.router;
