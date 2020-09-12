"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registroController_1 = require("../controllers/registroController");
class RegistroRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/registros', registroController_1.registroController.list);
        this.router.post('/registro', registroController_1.registroController.create);
    }
}
const registroRoutes = new RegistroRoutes();
exports.default = registroRoutes.router;
