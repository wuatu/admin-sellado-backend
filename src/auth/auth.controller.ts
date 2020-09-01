const User = require('./auth.dao');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'secretkey123456';

import { Request, Response, request } from 'express';
import pool from '../database';
class AuthController {
    public async createUser(req: Request, res: Response) {
        const newUser = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            rut: req.body.rut,
            password: bcrypt.hashSync(req.body.password)
        }

        try {
            const user = await pool.query('insert into administrador set ? ', newUser);
            const expiresIn = 24 * 60 * 60;
            const accessToken = jwt.sign({ id: user.id },
                SECRET_KEY, {
                expiresIn: expiresIn
            });
            const userData = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                accessToken: accessToken,
                rut: req.body.rut,
                expiresIn: expiresIn,
            }
            return res.json(userData);
        } catch (err) {
            return res.status(404).json({ text: "Existe una cuenta asociada a ese rut" })
        }
    }

    public async loginUser(req: Request, res: Response) {
        const userData = {
            rut: req.body.rut,
            password: req.body.password
        }
        let user;
        try {
            user = await pool.query("SELECT * FROM administrador WHERE rut = ? ", userData.rut);
        } catch (err) {
            return res.status(404).json({ text: "Usuario no registrado" })
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
                }
                res.send({dataUser});
            }
        }
        return res.status(404).json({ text: "Usuario o contraseña invalidos" })
    }
}
export const authController = new AuthController();