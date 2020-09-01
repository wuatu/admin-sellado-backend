"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const User = require('./auth.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'secretkey123456';
const database_1 = __importDefault(require("../database"));
class AuthController {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                rut: req.body.rut,
                password: bcrypt.hashSync(req.body.password)
            };
            try {
                const user = yield database_1.default.query('insert into administrador set ? ', newUser);
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, {
                    expiresIn: expiresIn
                });
                const userData = {
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    accessToken: accessToken,
                    rut: req.body.rut,
                    expiresIn: expiresIn,
                };
                return res.json(userData);
            }
            catch (err) {
                return res.status(404).json({ text: "Existe una cuenta asociada a ese rut" });
            }
        });
    }
    loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userData = {
                rut: req.body.rut,
                password: req.body.password
            };
            let user;
            try {
                user = yield database_1.default.query("SELECT * FROM administrador WHERE rut = ? ", userData.rut);
            }
            catch (err) {
                return res.status(404).json({ text: "Usuario no registrado" });
            }
            if (user.length > 0) {
                const resultPassword = bcrypt.compareSync(userData.password, user[0].password);
                if (resultPassword) {
                    const expiresIn = 24 * 60 * 60;
                    const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: expiresIn });
                    const dataUser = {
                        rut: user[0].rut,
                        nombre: user[0].nombre,
                        apellido: user[0].apellido,
                        accessToken: accessToken,
                        expiresIn: expiresIn,
                    };
                    res.send({ dataUser });
                }
            }
            return res.status(404).json({ text: "Usuario o contraseña invalidos" });
        });
    }
}
exports.authController = new AuthController();
