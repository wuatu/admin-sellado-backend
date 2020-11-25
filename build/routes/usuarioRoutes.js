"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioController_1 = require("../controllers/usuarioController");
class UsuarioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/usuarios', usuarioController_1.usuarioController.list);
        this.router.post('/usuario', usuarioController_1.usuarioController.create);
        this.router.get('/usuario/:id', usuarioController_1.usuarioController.getOne);
        this.router.get('/registro_rfid', usuarioController_1.usuarioController.getRegisterRfid);
        this.router.delete('/registro_rfid', usuarioController_1.usuarioController.deleteRegisterRfid);
        this.router.put('/usuario/:id', usuarioController_1.usuarioController.update);
        this.router.delete('/usuario/:id', usuarioController_1.usuarioController.delete);
    }
}
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;
