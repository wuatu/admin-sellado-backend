import { Request, Response } from 'express';
import pool from '../database';
class CajaSelladaController {

    public async list(req: Request, res: Response) {
        try {
            const { id_linea, id_calibrador } = req.params;
            let usuariosEnLinea: any;
            if (id_calibrador != "0" && id_linea != "0") {
                usuariosEnLinea = await pool.query('SELECT * FROM registro_diario_caja_sellada WHERE id_linea = ? and id_calibrador = ? ORDER BY fecha_sellado, hora_sellado ASC', [id_linea, id_calibrador]);
            }
            
            if (usuariosEnLinea.length > 0) {
                return res.status(200).json(usuariosEnLinea);
            } else {
                res.status(404).json({ text: 'Sin registros de seguimiento de cajas' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo obtener registro de seguimiento de cajas' });
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {
            console.log(req.body);
            const registroSegimientoCaja = await pool.query('INSERT INTO registro_diario_caja_sellada set ?', [req.body]);
            if (registroSegimientoCaja != null) {
                console.log(registroSegimientoCaja);
                if (registroSegimientoCaja != null) {
                    if (registroSegimientoCaja.affectedRows > 0) {
                        res.status(200).json({ message: 'registro de seguimiento de cajas creado' });
                    }
                } else {
                    res.status(404).json({ text: 'No se pudo crear el registro de seguimiento de cajasssssss' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo crear el registro de seguimiento de cajas' });
        }
    }

    public async search(req: Request, res: Response) {
        try {
            const { criterionSearch, toSearch, fromDateSearch, toDateSearch } = req.params;            
             console.log(criterionSearch);
             console.log(toSearch);
             console.log(fromDateSearch);
             console.log(toDateSearch);
            
             let registerByCriterion: any;
            
            if (criterionSearch == "codCalibre" && fromDateSearch && toDateSearch && toSearch) {
                console.log("codCalibre");
                registerByCriterion = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE  calibre_caja = ? AND (fecha_sellado BETWEEN ? AND ?) ORDER BY fecha_sellado, hora_sellado ASC', [toSearch, fromDateSearch+"%", toDateSearch+"%"]);
            
            } else if(criterionSearch == "codCategoria" && fromDateSearch && toDateSearch && toSearch){
                console.log("codCategoria");
                registerByCriterion = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE  categoria_caja = ? AND (fecha_sellado BETWEEN ? AND ?) ORDER BY fecha_sellado, hora_sellado ASC', [toSearch, fromDateSearch+"%", toDateSearch+"%"]);
            
            } else if (criterionSearch == "codVariedad" && fromDateSearch && toDateSearch && toSearch) {
                console.log("codVariedad");
                registerByCriterion = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE  variedad_caja = ? AND (fecha_sellado BETWEEN ? AND ?) ORDER BY fecha_sellado, hora_sellado ASC', [toSearch, fromDateSearch+"%", toDateSearch+"%"]);
            
            } else if(criterionSearch == "codEnvase" && fromDateSearch && toDateSearch && toSearch){
                console.log("codEnvase");
                registerByCriterion = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE  envase_caja = ? AND (fecha_sellado BETWEEN ? AND ?) ORDER BY fecha_sellado, hora_sellado ASC', [toSearch, fromDateSearch+"%", toDateSearch+"%"]);
            }
            
            if (registerByCriterion.length > 0) {
                return res.status(200).json(registerByCriterion);
            
            } else {
                res.status(404).json({ text: 'Sin registros para esta busqueda' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo realizar la busqueda' });
        }

    }

    public async searchLineAndCaliper(req: Request, res: Response) {
        try {
            const { criterionSearch, toSearch, fromDateSearch, toDateSearch , idLine, idCaliper} = req.params;            
             console.log(criterionSearch);
             console.log(toSearch);
             console.log(fromDateSearch);
             console.log(toDateSearch);
             console.log(idLine);
             console.log(idCaliper);
            
             let registerByCriterion: any;
            
            if (criterionSearch == "codCalibre" && fromDateSearch && toDateSearch && toSearch && idLine && idCaliper) {
                console.log("codCalibre");
                registerByCriterion = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE  calibre_caja = ? AND (fecha_sellado BETWEEN ? AND ?) AND id_linea = ? AND id_calibrador = ? ORDER BY fecha_sellado, hora_sellado ASC', [toSearch, fromDateSearch+"%", toDateSearch+"%", idLine, idCaliper]);
            
            } else if(criterionSearch == "codCategoria" && fromDateSearch && toDateSearch && toSearch && idLine && idCaliper){
                console.log("codCategoria");
                registerByCriterion = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE  categoria_caja = ? AND (fecha_sellado BETWEEN ? AND ?) AND id_linea = ? AND id_calibrador = ? ORDER BY fecha_sellado, hora_sellado ASC', [toSearch, fromDateSearch+"%", toDateSearch+"%", idLine, idCaliper]);
            
            } else if (criterionSearch == "codVariedad" && fromDateSearch && toDateSearch && toSearch && idLine && idCaliper) {
                console.log("codVariedad");
                registerByCriterion = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE  variedad_caja = ? AND (fecha_sellado BETWEEN ? AND ?) AND id_linea = ? AND id_calibrador = ? ORDER BY fecha_sellado, hora_sellado ASC', [toSearch, fromDateSearch+"%", toDateSearch+"%", idLine, idCaliper]);
            
            } else if(criterionSearch == "codEnvase" && fromDateSearch && toDateSearch && toSearch && idLine && idCaliper){
                console.log("codEnvase");
                registerByCriterion = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE  envase_caja = ? AND (fecha_sellado BETWEEN ? AND ?) AND id_linea = ? AND id_calibrador = ? ORDER BY fecha_sellado, hora_sellado ASC', [toSearch, fromDateSearch+"%", toDateSearch+"%", idLine, idCaliper]);
            }
            
            if (registerByCriterion.length > 0) {
                return res.status(200).json(registerByCriterion);
            
            } else {
                res.status(404).json({ text: 'Sin registros para esta busqueda' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo realizar la busqueda' });
        }
        
    }
}

export const cajaSelladaController = new CajaSelladaController();