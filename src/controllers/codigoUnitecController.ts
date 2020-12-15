import { Request, Response } from 'express';
import pool from '../database';
class CodigoUnitecController {

    public async list(req: Request, res: Response) {
        try {
            let registrosDev: any;
            registrosDev = await pool.query('SELECT DISTINCT Codigo_Confection_Unitec AS codigo_confection, Confection_Unitec AS confection, Codigo_Embalaje_Unitec AS codigo_embalaje, Embalaje_Unitec AS embalaje, Codigo_Envase_Unitec AS codigo_envase, Envase_Unitec AS envase, Categoria_Unitec AS categoria, Categoria_Timbrada_Unitec AS categoria_timbrada  FROM registro_diario_caja_sellada ORDER BY id DESC');
            if (registrosDev.length > 0) {
                return res.status(200).json(registrosDev);
            } else {
                res.status(204).json({ text: 'No existen codigos unitec para mostrar' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudieron obtener los códigos unitec' });
        }
    }

    public async searchCodeBox(req: Request, res: Response) {
        try {
            const { code } = req.params;
            let cajas: any;
            cajas = await pool.query('SELECT DISTINCT Codigo_Confection_Unitec AS codigo_confection, Confection_Unitec AS confection, Codigo_Embalaje_Unitec AS codigo_embalaje, Embalaje_Unitec AS embalaje, Codigo_Envase_Unitec AS codigo_envase, Envase_Unitec AS envase, Categoria_Unitec AS categoria, Categoria_Timbrada_Unitec AS categoria_timbrada FROM registro_diario_caja_sellada WHERE Cod_Caja_Unitec = ? ', [code]);
            if (cajas.length > 0) {
                return res.status(200).json(cajas);
            }
            res.status(204).json({ text: 'No existen registros de cajas para mostrar' });
        } catch{
            res.status(404).json({ text: 'No se pudo obtener caja' });
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {
            console.log(req.body);
            const registroDev = await pool.query('INSERT INTO codigo_unitec set ?', [req.body]);            
            if (registroDev != null) {
                if (registroDev.affectedRows > 0) {
                    res.status(200).json({ message: 'código unitec creado' });
                }
            } else {
                res.status(404).json({ text: 'No se pudo crear el código unitec' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo crear el código unitec' });
        }
    }

    
}

export const codigoUnitecController = new CodigoUnitecController();