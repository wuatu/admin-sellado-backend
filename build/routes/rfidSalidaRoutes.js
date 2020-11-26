"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rfidSalidaController_1 = require("../controllers/rfidSalidaController");
class RfidSalidaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/rfids_salida/:id_calibrador', rfidSalidaController_1.rfidSalidaController.list);
        this.router.post('/rfid_salida', rfidSalidaController_1.rfidSalidaController.create);
        this.router.get('/rfid_salida/:id', rfidSalidaController_1.rfidSalidaController.getOne);
        this.router.put('/rfid_salida/:id', rfidSalidaController_1.rfidSalidaController.update);
        this.router.delete('/rfid_salida/:id', rfidSalidaController_1.rfidSalidaController.delete);
    }
}
const rfidSalidaRoutes = new RfidSalidaRoutes();
exports.default = rfidSalidaRoutes.router;
