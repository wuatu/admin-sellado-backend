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
        /****************************************************************************************************************************************************************************************************/
        //this.router.get('/monitoreo_calibrador_produccion_turno/:date/:time/:id_caliper/:option/:fecha_actual/', monitoreoCalibradoresController.countBoxBycaliper);
        this.router.get('/monitoreo_calibrador_produccion_turno2/:id_caliper/:id_turno/:fecha_apertura/:hora_apertura/', monitoreoCalibradoresController_1.monitoreoCalibradoresController.countBoxBycaliper2);
        /****************************************************************************************************************************************************************************************************/
        /****************************************************************************************************************************************************************************************************/
        this.router.get('/monitoreo_calibrador_produccion_minuto/:date/:time/:id_caliper/:option/:fecha_actual/', monitoreoCalibradoresController_1.monitoreoCalibradoresController.searchAverageforMinute);
        this.router.get('/monitoreo_calibrador_produccion_minuto2/:id_caliper/:id_turno/:fecha_apertura/:hora_apertura/', monitoreoCalibradoresController_1.monitoreoCalibradoresController.searchAverageforMinute2);
        /****************************************************************************************************************************************************************************************************/
        /****************************************************************************************************************************************************************************************************/
        this.router.get('/monitoreo_calibrador_produccion_minuto_ultima_hora/:date/:time/:id_caliper/:option/:fecha_actual/', monitoreoCalibradoresController_1.monitoreoCalibradoresController.searchAverageLastHourforMinute);
        this.router.get('/monitoreo_calibrador_produccion_minuto_ultima_hora2/:id_caliper/:id_turno/:fecha_apertura/:hora_apertura', monitoreoCalibradoresController_1.monitoreoCalibradoresController.searchAverageLastHourforMinute2);
        /****************************************************************************************************************************************************************************************************/
        /****************************************************************************************************************************************************************************************************/
        this.router.get('/monitoreo_calibrador_last_turno/', monitoreoCalibradoresController_1.monitoreoCalibradoresController.getLastTurno);
        this.router.get('/monitoreo_calibrador_production_line/:id_caliper/:id_line/:name_line/:date/:time/:fecha_actual/', monitoreoCalibradoresController_1.monitoreoCalibradoresController.searchAverageLastMinuteByLine);
        /****************************************************************************************************************************************************************************************************/
        //this.router.get('/monitoreo_calibrador_production_line/:id_caliper/:id_line/:name_line/:date/:time/:option/:fecha_actual/', monitoreoCalibradoresController.getProductionLineTurno);
        //this.router.get('/monitoreo_promedio_por_minuto/:id_calibrador',monitoreoController.searchAverageforMinute);
        //this.router.get('/monitoreo_promedio_ultima_hora_por_minuto/:id_calibrador',monitoreoController.searchAverageLastHourforMinute);
    }
}
const monitoreoCalibradoresRoutes = new MonitoreoCalibradoresRoutes();
exports.default = monitoreoCalibradoresRoutes.router;
