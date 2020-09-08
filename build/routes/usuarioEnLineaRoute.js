"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioEnLineaController_1 = require("../controllers/usuarioEnLineaController");
class UsuarioEnLineaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/usuario_en_lineas', usuarioEnLineaController_1.usuarioEnLineaController.list);
        this.router.post('/usuario_en_linea', usuarioEnLineaController_1.usuarioEnLineaController.create);
        this.router.get('/usuario_en_linea/:id', usuarioEnLineaController_1.usuarioEnLineaController.getOne);
        this.router.put('/usuario_en_linea/:id', usuarioEnLineaController_1.usuarioEnLineaController.update);
        this.router.delete('/usuario_en_linea/:id', usuarioEnLineaController_1.usuarioEnLineaController.delete);
    }
}
const registro_diario_usuario_en_lineaRoutes = new UsuarioEnLineaRoutes();
exports.default = registro_diario_usuario_en_lineaRoutes.router;
