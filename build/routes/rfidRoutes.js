"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rfidController_1 = require("../controllers/rfidController");
class RfidController {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/rfids/:id_calibrador/:id_linea', rfidController_1.rfidController.list);
        this.router.post('/rfid', rfidController_1.rfidController.create);
        this.router.get('/rfid/:id', rfidController_1.rfidController.getOne);
        this.router.put('/rfid/:id', rfidController_1.rfidController.update);
        this.router.delete('/rfid/:id', rfidController_1.rfidController.delete);
    }
}
const rfidRoutes = new RfidController();
exports.default = rfidRoutes.router;
