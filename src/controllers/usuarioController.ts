import { Request, Response } from 'express';
import pool from '../database';
class UsuarioController {

    public async list(req: Request, res: Response) {
        try {
            let usuarios: any;

            usuarios = await pool.query('SELECT * FROM usuario');
            
            if (usuarios.length > 0) {
                return res.status(200).json(usuarios);
            } else {
                res.status(204).json({ text: 'No existen registros de usuarios para mostrar' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo obtener usuarios' });
        }
    }

    public async getOne(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const usuario = await pool.query('SELECT * FROM usuario WHERE id = ?', [id]);
            if (usuario.length > 0) {
                return res.status(200).json(usuario[0]);
            }else{
                res.status(204).json({ text: 'No existen registros de usuarios para mostrar' });
            }
            
        } catch{
            res.status(404).json({ text: 'No se pudo obtener usuario' });
        }
    }

    public async getRegisterRfid(req: Request, res: Response) {
        try {
            const registerRfid = await pool.query('SELECT * FROM registro_rfid ORDER BY id DESC LIMIT 1');
            if (registerRfid.length > 0) {
                return res.status(200).json(registerRfid[0]);
            }else{
                return res.status(204).json({ id:'undefine', codigo:'undefine'});
            }
            
        } catch{
            res.status(404).json({ text: 'No se pudo obtener el registro de rfid' });
        }
    }

    public async deleteRegisterRfid(req: Request, res: Response): Promise<void> {
        try {
            const deleteRegister = await pool.query('DELETE FROM registro_rfid');
            if (deleteRegister != null) {
                if (deleteRegister.affectedRows > 0) {
                    res.status(200).json({ message: 'registro rfid eliminado' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo eliminar el registro rfid' });
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {
            const usuario = await pool.query('INSERT INTO usuario set ?', [req.body]);
            if (usuario != null) {
                console.log(usuario);
                if (usuario != null) {
                    if (usuario.affectedRows > 0) {
                        res.status(200).json({ message: 'usuario creado' });
                    }
                } else {
                    res.status(404).json({ text: 'No se pudo crear usuario' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo crear usuario' });
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            
            const usuario = await pool.query('UPDATE usuario SET ? WHERE id = ?', [req.body, id]);
            if (usuario != null) {
                if (usuario.affectedRows > 0) {
                    res.status(200).json({ message: 'usuario actualizado' });
                } else {
                    res.status(404).json({ text: 'No se pudo actualizar usuario' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo actualizar usuario' });
        }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const usuario = await pool.query('DELETE FROM usuario WHERE id = ?', [id]);
            if (usuario != null) {
                if (usuario.affectedRows > 0) {
                    res.status(200).json({ message: 'usuario eliminado' });
                } else {
                    res.status(404).json({ text: 'No se pudo eliminar usuario' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo eliminar usuario' });
        }
    }
}

export const usuarioController = new UsuarioController();