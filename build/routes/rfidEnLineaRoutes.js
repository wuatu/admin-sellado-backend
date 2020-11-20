"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rfidEnLineaController_1 = require("../controllers/rfidEnLineaController");
class RfidEnLineaController {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/rfid_linea/:id', rfidEnLineaController_1.rfidEnLineaController.getLastRfidInLine);
    }
}
const rfidEnLineaRoutes = new RfidEnLineaController();
exports.default = rfidEnLineaRoutes.router;
