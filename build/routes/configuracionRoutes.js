"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const configuracionController_1 = require("../controllers/configuracionController");
class ConfiguracionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/minutes', configuracionController_1.configuracionController.getMinutes);
        this.router.put('/minutes_wait/:id_minute', configuracionController_1.configuracionController.updateMinutes);
    }
}
const configuracionRoutes = new ConfiguracionRoutes();
exports.default = configuracionRoutes.router;
