import { Request, Response } from 'express';
import pool from '../database';

const bcrypt = require('bcryptjs');
class AdministradorController {

    public async list(req: Request, res: Response) {
        try {
            const {  } = req.params;
            let administradores: any;

            administradores = await pool.query('SELECT administrador.id, administrador.rut,administrador.nombre,administrador.apellido,administrador.superadmin FROM administrador WHERE administrador.superadmin=0');
            
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
        try {
            const { id } = req.params;
            const administrador = await pool.query('SELECT * FROM administrador WHERE id = ?', [id]);
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
            const newUser = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                rut: req.body.rut,
                password: bcrypt.hashSync(req.body.password)
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
                password: bcrypt.hashSync(req.body.password)
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

    public async login(req: Request, res: Response) {        
        const { rut,password } = req.params;
        console.log(rut);
        let user;
        try {
            user = await pool.query("SELECT * FROM administrador WHERE rut = ? ", [rut]);
        } catch (err) {
            return res.status(404).json({ text: "Usuario no registrado" })
        }
        if (user.length > 0) {
            const resultPassword = bcrypt.compareSync(password, user[0].password);
            if (resultPassword) {
                const dataAdmin = {
                    rut: user[0].rut,
                    nombre: user[0].nombre,
                    apellido: user[0].apellido,                    
                }
                return res.send({dataAdmin});
            } else{
                return res.status(404).json({ text: "Rut o contraseña invalidos" })
            }
        }
        return res.status(404).json({ text: "Rut o contraseña invalidos" })
    }
    
}

export const administradorController = new AdministradorController();