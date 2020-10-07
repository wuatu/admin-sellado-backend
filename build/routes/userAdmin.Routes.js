"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userAdminController_1 = require("../controllers/userAdminController");
class UserAdminRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/user_admin', userAdminController_1.userAdminController.list);
        this.router.post('/user_admin', userAdminController_1.userAdminController.create);
        this.router.get('/user_admin/:rut', userAdminController_1.userAdminController.get);
        this.router.get('/user_admin_/:id', userAdminController_1.userAdminController.getOne);
        this.router.put('/user_admin/:id', userAdminController_1.userAdminController.update);
        this.router.delete('/user_admin/:id', userAdminController_1.userAdminController.delete);
    }
}
const userAdminRoutes = new UserAdminRoutes();
exports.default = userAdminRoutes.router;
