import { Request, Response } from 'express';
import pool from '../database';

const bcrypt = require('bcryptjs');
class UserAdminController {

    public async list(req: Request, res: Response) {
        try {
            const {  } = req.params;
            let administradores: any;

            administradores = await pool.query('SELECT administrador.id, administrador.rut,administrador.nombre,administrador.apellido,administrador.rol FROM administrador WHERE administrador.rol=2');
            
            if (administradores.length > 0) {
                return res.status(200).json(administradores);
            } else {
                res.status(404).json({ text: 'Sin registros' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo obtener administrador(es)' });
        }
    }
    

    public async getOne(req: Request, res: Response) {
        console.log("entre getOne");
        try {
            const { id } = req.params;
            console.log("id: "+ id);
            const administrador = await pool.query('SELECT * FROM administrador WHERE id = ?', [id]);
            if (administrador.length > 0) {
                return res.status(200).json(administrador[0]);
                
            }
            res.status(404).json({ text: 'No se pudo obtener administrador' });
        } catch{
            res.status(404).json({ text: 'No se pudo obtener administrador' });
        }
    }
    public async get(req: Request, res: Response) {
        try {
            const { rut } = req.params;
            const administrador = await pool.query('SELECT * FROM administrador WHERE rut = ?', [rut]);
            if (administrador.length > 0) {
                return res.status(200).json(administrador[0]);
                
            }
            res.status(404).json({ text: 'No se pudo obtener administrador' });
        } catch{
            res.status(404).json({ text: 'No se pudo obtener administrador' });
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {
            console.log("entre a la wea !!!");
            const newUser = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                rut: req.body.rut,
                password: bcrypt.hashSync(req.body.password),
                rol: req.body.rol
            }
            const administrador = await pool.query('INSERT INTO administrador set ?', newUser);
            if (administrador != null) {
                console.log(administrador);
                if (administrador != null) {
                    if (administrador.affectedRows > 0) {
                        res.status(200).json({ message: 'administrador creado' });
                    }
                } else {
                    res.status(404).json({ text: 'No se pudo crear administrador' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo crear administrador' });
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const newUser = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                rut: req.body.rut,
                password: bcrypt.hashSync(req.body.password),
                rol: req.body.rol
            }
            const { id } = req.params;
            const administrador = await pool.query('UPDATE administrador SET ? WHERE id = ?', [newUser, id]);
            if (administrador != null) {
                if (administrador.affectedRows > 0) {
                    res.status(200).json({ message: 'administrador actualizado' });
                } else {
                    res.status(404).json({ text: 'No se pudo actualizar administrador' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo actualizar administrador' });
        }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const administrador = await pool.query('DELETE FROM administrador WHERE id = ?', [id]);
            if (administrador != null) {
                if (administrador.affectedRows > 0) {
                    res.status(200).json({ message: 'administrador eliminado' });
                } else {
                    res.status(404).json({ text: 'No se pudo eliminar administrador' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo eliminar administrador' });
        }
    }

    
    
}

export const userAdminController = new UserAdminController();