"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lectorValidadorController_1 = require("../controllers/lectorValidadorController");
class LectorValidadorRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/lectoresValidador/:id_calibrador', lectorValidadorController_1.lectorValidadorController.list);
        this.router.post('/lectorValidador', lectorValidadorController_1.lectorValidadorController.create);
        this.router.get('/lectorValidador/:id', lectorValidadorController_1.lectorValidadorController.getOne);
        this.router.put('/lectorValidador/:id', lectorValidadorController_1.lectorValidadorController.update);
        this.router.delete('/lectorValidador/:id', lectorValidadorController_1.lectorValidadorController.delete);
    }
}
const lectorValidadorRoutes = new LectorValidadorRoutes();
exports.default = lectorValidadorRoutes.router;
