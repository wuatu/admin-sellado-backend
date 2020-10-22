"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lectorController_1 = require("../controllers/lectorController");
class LectorRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/lectores/:id_calibrador/:id_linea', lectorController_1.lectorController.list);
        this.router.post('/lector', lectorController_1.lectorController.create);
        this.router.get('/lector/:id', lectorController_1.lectorController.getOne);
        this.router.put('/lector/:id', lectorController_1.lectorController.update);
        this.router.delete('/lector/:id', lectorController_1.lectorController.delete);
    }
}
const lectorRoutes = new LectorRoutes();
exports.default = lectorRoutes.router;
