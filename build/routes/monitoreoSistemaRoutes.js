"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const monitoreoSistema_controllers_1 = require("../controllers/monitoreoSistema.controllers");
class MonitoreoSistemaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/monitoreo_sistema_list/:id_linea/:id_calibrador/:nombre_linea', monitoreoSistema_controllers_1.monitoreoSistemaController.list);
        this.router.get('/monitoreo_sistema_collaborators/:id_linea/:id_calibrador/:nombre_linea/:id_turno', monitoreoSistema_controllers_1.monitoreoSistemaController.getCollaboratorsInLine);
        this.router.get('/monitoreo_sistema_lector/:id_linea', monitoreoSistema_controllers_1.monitoreoSistemaController.getLectorInLine);
        this.router.get('/monitoreo_sistema_rfid/:id_linea', monitoreoSistema_controllers_1.monitoreoSistemaController.getRfidInLine);
        this.router.get('/monitoreo_sistema_lector_validador/:id_calibrador', monitoreoSistema_controllers_1.monitoreoSistemaController.getLectorValidatorInCaliper);
        this.router.get('/monitoreo_sistema_rfid_out/:id_calibrador', monitoreoSistema_controllers_1.monitoreoSistemaController.getRfidOutInCaliper);
        this.router.get('/monitoreo_sistema_last_lector_validador/:id_calibrador', monitoreoSistema_controllers_1.monitoreoSistemaController.getLastLectorValitatorIncaliper);
        this.router.get('/monitoreo_sistema_last_rfid_salida/:id_calibrador', monitoreoSistema_controllers_1.monitoreoSistemaController.getLastRfidOutInCaliper);
    }
}
const monitoreoSistemaRoutes = new MonitoreoSistemaRoutes();
exports.default = monitoreoSistemaRoutes.router;
