"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registroProduccionController_1 = require("../controllers/registroProduccionController");
class RegistroProduccionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/registros_produccion', registroProduccionController_1.registroProduccionController.list);
        this.router.post('/registro_produccion', registroProduccionController_1.registroProduccionController.create);
    }
}
const registroProduccionRoutes = new RegistroProduccionRoutes();
exports.default = registroProduccionRoutes.router;
