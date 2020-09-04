"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const administradorController_1 = require("../controllers/administradorController");
class AdministradorRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/administradores', administradorController_1.administradorController.list);
        this.router.post('/administrador', administradorController_1.administradorController.create);
        this.router.get('/administrador/:id', administradorController_1.administradorController.getOne);
        this.router.put('/administrador/:id', administradorController_1.administradorController.update);
        this.router.delete('/administrador/:id', administradorController_1.administradorController.delete);
    }
}
const administradorRoutes = new AdministradorRoutes();
exports.default = administradorRoutes.router;
