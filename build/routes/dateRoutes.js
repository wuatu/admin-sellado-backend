"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dateController_1 = require("../controllers/dateController");
class DateRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/get_date', dateController_1.dateController.getDate);
    }
}
const dateRoutes = new DateRoutes();
exports.default = dateRoutes.router;
