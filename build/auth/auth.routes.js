"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
class AuthRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/register', auth_controller_1.authController.createUser);
        this.router.post('/login', auth_controller_1.authController.loginUser);
    }
}
const authRoutes = new AuthRoutes();
exports.default = authRoutes.router;
