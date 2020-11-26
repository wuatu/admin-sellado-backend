"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rfidRegistroColaboradorController_1 = require("../controllers/rfidRegistroColaboradorController");
class RfidRegistroColaboradorRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/rfids_registro_colaborador/', rfidRegistroColaboradorController_1.rfidRegistroColaboradorController.list);
        this.router.post('/rfid_registro_colaborador/', rfidRegistroColaboradorController_1.rfidRegistroColaboradorController.create);
        this.router.get('/rfid_registro_colaborador/:id', rfidRegistroColaboradorController_1.rfidRegistroColaboradorController.getOne);
        this.router.put('/rfid_registro_colaborador/:id', rfidRegistroColaboradorController_1.rfidRegistroColaboradorController.update);
        this.router.delete('/rfid_registro_colaborador/:id', rfidRegistroColaboradorController_1.rfidRegistroColaboradorController.delete);
    }
}
const rfidRegistroColaboradorRoutes = new RfidRegistroColaboradorRoutes();
exports.default = rfidRegistroColaboradorRoutes.router;
