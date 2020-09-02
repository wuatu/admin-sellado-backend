"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const selladoraController_1 = require("../controllers/selladoraController");
class SelladoraRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/selladoras', selladoraController_1.selladoraController.list);
        this.router.post('/selladora', selladoraController_1.selladoraController.create);
        this.router.get('/selladora/:id', selladoraController_1.selladoraController.getOne);
        this.router.put('/selladora/:id', selladoraController_1.selladoraController.update);
        this.router.delete('/selladora/:id', selladoraController_1.selladoraController.delete);
    }
}
const selladoraRoutes = new SelladoraRoutes();
exports.default = selladoraRoutes.router;
