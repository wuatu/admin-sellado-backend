"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registroDevController_1 = require("../controllers/registroDevController");
class RegistroDevRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/registros_dev', registroDevController_1.registroDevController.list);
        this.router.post('/registro_dev', registroDevController_1.registroDevController.create);
    }
}
const registroDevRoutes = new RegistroDevRoutes();
exports.default = registroDevRoutes.router;
