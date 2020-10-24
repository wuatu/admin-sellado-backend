"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioenlineaController_1 = require("../controllers/usuarioenlineaController");
class UsuarioEnLineaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/usuarios_en_linea/:id_linea/:id_calibrador/:rutSearch/:fromDateSearch/:toDateSearch', usuarioenlineaController_1.usuarioEnLineaController.list);
        this.router.post('/usuario_en_linea', usuarioenlineaController_1.usuarioEnLineaController.create);
        //this.router.get('/usuario_en_linea/:rutSearch/:fromDateSearch/:toDateSearch',usuarioEnLineaController.search);
        //this.router.get('/usuario_en_linea/:id',usuarioEnLineaController.getOne);
        this.router.put('/usuario_en_linea/:id', usuarioenlineaController_1.usuarioEnLineaController.update);
        //this.router.delete('/usuario_en_Linea/:id',usuarioEnLineaController.delete);
        this.router.get('/usuarios_en_linea/:id_turno/:id_usuario/:id_linea', usuarioenlineaController_1.usuarioEnLineaController.validateCollaborator);
        this.router.put('/usuarios_en_linea/:id_turno/:id_usuario/:id_linea/:fecha_termino/:hora_termino', usuarioenlineaController_1.usuarioEnLineaController.closeTurnCollaborators);
    }
}
const usuarioEnLineaRoutes = new UsuarioEnLineaRoutes();
exports.default = usuarioEnLineaRoutes.router;
