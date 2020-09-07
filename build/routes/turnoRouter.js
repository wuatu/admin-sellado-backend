"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const turnoController_1 = require("../controllers/turnoController");
class TurnoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/turnos', turnoController_1.turnoController.list);
        this.router.post('/turno', turnoController_1.turnoController.create);
        this.router.get('/turno/:id', turnoController_1.turnoController.getOne);
        this.router.get('/turno', turnoController_1.turnoController.getOneSinId);
        this.router.put('/turno/:id', turnoController_1.turnoController.update);
        this.router.delete('/turno/:id', turnoController_1.turnoController.delete);
    }
}
const turnoRoutes = new TurnoRoutes();
exports.default = turnoRoutes.router;
