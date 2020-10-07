"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const database_1 = __importDefault(require("../database"));
class LoginController {
    index(req, res) {
        database_1.default.query('DESCRIBE administrador');
        res.json('login');
    }
    getOne(req, res) {
        const userData = {
            rut: req.body.rut,
            password: req.body.password,
        };
        res.json({ text: 'this is a admin' + req.params.id });
    }
}
exports.loginController = new LoginController();
