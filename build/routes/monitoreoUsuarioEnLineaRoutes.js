"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const monitoreoUsuarioEnLineaController_1 = require("../controllers/monitoreoUsuarioEnLineaController");
class MonitoreoUsuarioEnLineaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        console.log("routes!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        this.router.get('/monitoreo_usuarios_en_linea/:id_linea/:id_calibrador/:id_turno/:nombre_linea', monitoreoUsuarioEnLineaController_1.monitoreoUsuarioEnLineaController.list);
        this.router.put('/monitoreo_usuarios_en_linea/:id_turno/:id_usuario/:id_linea/:fecha_termino/:hora_termino', monitoreoUsuarioEnLineaController_1.monitoreoUsuarioEnLineaController.closeTurnCollaborators);
    }
}
const monitoreoUsuarioEnLineaRoutes = new MonitoreoUsuarioEnLineaRoutes();
exports.default = monitoreoUsuarioEnLineaRoutes.router;
