"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginController_1 = require("../controllers/loginController");
class loginRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', loginController_1.loginController.getOne);
    }
}
const gamesRoutes = new loginRoutes();
exports.default = gamesRoutes.router;
