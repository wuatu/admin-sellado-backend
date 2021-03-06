"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioenlineaControllersi_1 = require("../controllers/usuarioenlineaControllersi");
class UsuarioEnLineaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/usuarios_en_linea/:id_linea/:id_calibrador', usuarioenlineaControllersi_1.usuarioEnLineaController.list);
        this.router.post('/usuario_en_linea', usuarioenlineaControllersi_1.usuarioEnLineaController.create);
        this.router.get('/usuario_en_linea_busqueda/:rutSearch/:fromDateSearch', usuarioenlineaControllersi_1.usuarioEnLineaController.search);
        //this.router.get('/usuario_en_linea/:id',usuarioEnLineaController.getOne);
        //this.router.put('/usuario_en_linea/:id',usuarioEnLineaController.update);
        //this.router.delete('/usuario_en_Linea/:id',usuarioEnLineaController.delete);
    }
}
const usuarioEnLineaRoutes = new UsuarioEnLineaRoutes();
exports.default = usuarioEnLineaRoutes.router;
