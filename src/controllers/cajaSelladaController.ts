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
                res.status(204).json({ text: 'No existen registros de seguimiento de cajas para mostrar' });
            }
        } catch {
            res.status(404).json({ text: 'No se pudo obtener registro de seguimiento de cajas' });
        }
    }

    public async countBoxUnique(req: Request, res: Response) {
        try {
            const { criterionSearch, toSearch, fromDateSearch, toDateSearch, idLine, idCaliper, validadas } = req.params;

            let verificadas=0;
            if(validadas=="true"){
                verificadas=1;
            }

            console.log(validadas);
            //console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa");
            //console.log("criterionSearch: "+criterionSearch+ " toSearch: "+ toSearch+ "fromDateSearch: "+ fromDateSearch+" toDateSearch: "+toDateSearch+" idLine: "+ idLine+ " idCaliper: "+ idCaliper);

            let registerByCriterion: any;
            console.log("1|234das");
            if (criterionSearch == "Calibre" && fromDateSearch && toDateSearch && toSearch && idLine && idCaliper) {
                console.log("Calibre");
                registerByCriterion = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) as cantidadFROM registro_diario_caja_sellada WHERE calibre_caja = ? AND (fecha_sellado BETWEEN ? AND ?) AND id_linea = ? AND id_calibrador = ? AND is_verificado = ?', [toSearch, fromDateSearch, toDateSearch, idLine, idCaliper, verificadas]);

            } else if (criterionSearch == "Categoria" && fromDateSearch && toDateSearch && toSearch && idLine && idCaliper) {
                console.log("Categoria");
                registerByCriterion = await pool.query(' SELECT COUNT(DISTINCT(codigo_de_barra)) as cantidad FROM registro_diario_caja_sellada WHERE categoria_caja = ? AND (fecha_sellado BETWEEN ? AND ?) AND id_linea = ? AND id_calibrador = ? AND is_verificado = ?', [toSearch, fromDateSearch, toDateSearch, idLine, idCaliper, verificadas]);

            } else if (criterionSearch == "Variedad" && fromDateSearch && toDateSearch && toSearch && idLine && idCaliper) {
                console.log("Variedad");
                registerByCriterion = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) as cantidad FROM registro_diario_caja_sellada WHERE variedad_caja = ? AND (fecha_sellado BETWEEN ? AND ?) AND id_linea = ? AND id_calibrador = ? AND is_verificado = ?', [toSearch, fromDateSearch, toDateSearch, idLine, idCaliper, verificadas]);

            } else if (criterionSearch == "Envase" && fromDateSearch && toDateSearch && toSearch && idLine && idCaliper) {
                console.log("Envase");
                registerByCriterion = await pool.query(' SELECT COUNT(DISTINCT(codigo_de_barra)) as cantidad FROM registro_diario_caja_sellada WHERE envase_caja = ? AND (fecha_sellado BETWEEN ? AND ?) AND id_linea = ? AND id_calibrador = ? AND is_verificado = ?', [toSearch, fromDateSearch, toDateSearch, idLine, idCaliper, verificadas]);
            } else if (criterionSearch == "undefined" && fromDateSearch && fromDateSearch != "null") {
                //console.log("aquiiiiiiiiiiii");
                registerByCriterion = await pool.query(' SELECT COUNT(DISTINCT(codigo_de_barra)) as cantidad FROM registro_diario_caja_sellada WHERE (fecha_sellado like ?) AND id_linea = ? AND id_calibrador = ? AND is_verificado = ?', [fromDateSearch, idLine, idCaliper, verificadas]);
            } else if (criterionSearch == "undefined" && fromDateSearch && fromDateSearch) {
                console.log("asas");
                registerByCriterion = await pool.query(' SELECT COUNT(DISTINCT(codigo_de_barra)) as cantidad FROM registro_diario_caja_sellada WHERE (fecha_sellado BETWEEN ? AND ?) AND id_linea = ? AND id_calibrador = ? AND is_verificado = ?', [fromDateSearch, toDateSearch, idLine, idCaliper, verificadas]);
            }

            if (registerByCriterion.length > 0) {
                return res.status(200).json(registerByCriterion);

            } else {
                res.status(204).json({ text: 'No existen registros de seguimiento de cajas para mostrar' });
            }
        } catch {
            res.status(404).json({ text: 'No se pudo realizar la busqueda' });
        }



        try {
            const { rutSearch, fromDateSearch, toDateSearch } = req.params;
            let producctionSearch: any;
            if (rutSearch && fromDateSearch && toDateSearch) {
                producctionSearch = await pool.query('SELECT fecha_sellado, Count(fecha_sellado) as numero FROM registro_diario_caja_sellada WHERE rut_usuario = ? AND (fecha_sellado BETWEEN ? AND ?) group by fecha_sellado', [rutSearch, fromDateSearch, toDateSearch]);
                console.log(producctionSearch);
            } else {
                res.status(404).json({ text: 'error en datos de busqueda' });
            }

            if (producctionSearch.length > 0) {
                return res.status(200).json(producctionSearch);

            } else {
                console.log("Sin registros para esta busqueda");
                res.status(404).json({ text: 'Sin registros para esta busqueda' });
            }
        } catch {
            res.status(404).json({ text: 'No se pudo realizar la busqueda' });
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
        } catch {
            res.status(404).json({ text: 'No se pudo crear el registro de seguimiento de cajas' });
        }
    }

    /*public async search(req: Request, res: Response) {
        try {
            const { criterionSearch, toSearch, fromDateSearch, toDateSearch } = req.params;            
             console.log(criterionSearch);
             console.log(toSearch);
             console.log(fromDateSearch);
             console.log(toDateSearch);
            
             let registerByCriterion: any;
            
            if (criterionSearch == "Calibre" && fromDateSearch && toDateSearch && toSearch) {
                console.log("Calibre");
                registerByCriterion = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE  calibre_caja = ? AND (fecha_sellado BETWEEN ? AND ?) ORDER BY fecha_sellado, hora_sellado ASC', [toSearch, fromDateSearch, toDateSearch]);
            
            } else if(criterionSearch == "Categoria" && fromDateSearch && toDateSearch && toSearch){
                console.log("Categoria");
                registerByCriterion = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE  categoria_caja = ? AND (fecha_sellado BETWEEN ? AND ?) ORDER BY fecha_sellado, hora_sellado ASC', [toSearch, fromDateSearch, toDateSearch]);
            
            } else if (criterionSearch == "Variedad" && fromDateSearch && toDateSearch && toSearch) {
                console.log("Variedad");
                registerByCriterion = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE  variedad_caja = ? AND (fecha_sellado BETWEEN ? AND ?) ORDER BY fecha_sellado, hora_sellado ASC', [toSearch, fromDateSearch, toDateSearch]);
            
            } else if(criterionSearch == "Envase" && fromDateSearch && toDateSearch && toSearch){
                console.log("Envase entreeeee!!!!");
                registerByCriterion = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE  envase_caja = ? AND (fecha_sellado BETWEEN ? AND ?) ORDER BY fecha_sellado, hora_sellado ASC', [toSearch, fromDateSearch, toDateSearch]);
            }
            
            if (registerByCriterion.length > 0) {
                return res.status(200).json(registerByCriterion);
            
            } else {
                res.status(404).json({ text: 'Sin registros para esta busqueda' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo realizar la busqueda' });
        }

    }*/

    public async searchLineAndCaliper(req: Request, res: Response) {
        try {
            const { criterionSearch, toSearch, fromDateSearch, toDateSearch, idLine, idCaliper, validadas } = req.params;

            let verificadas=0;
            if(validadas=="true"){
                verificadas=1;
            }

            console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
            console.log(validadas);
            console.log(verificadas);
            console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
            //console.log("criterionSearch: " + criterionSearch + " toSearch: " + toSearch + "fromDateSearch: " + fromDateSearch + " toDateSearch: " + toDateSearch + " idLine: " + idLine + " idCaliper: " + idCaliper);
            
            let registerByCriterion: any;
            //console.log("1|234das");
            if (criterionSearch == "Calibre" && fromDateSearch && toDateSearch && toSearch && idLine && idCaliper) {
                console.log("Calibre");
                registerByCriterion = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE  calibre_caja = ? AND (fecha_sellado BETWEEN ? AND ?) AND id_linea = ? AND id_calibrador = ? AND is_verificado = ? ORDER BY fecha_sellado, hora_sellado ASC', [toSearch, fromDateSearch, toDateSearch, idLine, idCaliper, verificadas]);

            } else if (criterionSearch == "Categoria" && fromDateSearch && toDateSearch && toSearch && idLine && idCaliper) {
                console.log("Categoria");
                registerByCriterion = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE  categoria_caja = ? AND (fecha_sellado BETWEEN ? AND ?) AND id_linea = ? AND id_calibrador = ? AND is_verificado = ? ORDER BY fecha_sellado, hora_sellado ASC', [toSearch, fromDateSearch, toDateSearch, idLine, idCaliper, verificadas]);

            } else if (criterionSearch == "Variedad" && fromDateSearch && toDateSearch && toSearch && idLine && idCaliper) {
                console.log("Variedad");
                registerByCriterion = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE  variedad_caja = ? AND (fecha_sellado BETWEEN ? AND ?) AND id_linea = ? AND id_calibrador = ? AND is_verificado = ? ORDER BY fecha_sellado, hora_sellado ASC', [toSearch, fromDateSearch, toDateSearch, idLine, idCaliper, verificadas]);

            } else if (criterionSearch == "Envase" && fromDateSearch && toDateSearch && toSearch && idLine && idCaliper) {
                console.log("Envase");
                registerByCriterion = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE  envase_caja = ? AND (fecha_sellado BETWEEN ? AND ?) AND id_linea = ? AND id_calibrador = ? AND is_verificado = ? ORDER BY fecha_sellado, hora_sellado ASC', [toSearch, fromDateSearch, toDateSearch, idLine, idCaliper, verificadas]);
            } else if (criterionSearch == "undefined" && fromDateSearch && fromDateSearch != "null") {
                console.log("aquiiiiiiiiiiii");
                registerByCriterion = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE (fecha_sellado like ?) AND id_linea = ? AND id_calibrador = ? AND is_verificado = ? ORDER BY fecha_sellado, hora_sellado ASC', [fromDateSearch, idLine, idCaliper, verificadas]);
            } else if (criterionSearch == "undefined" && fromDateSearch && fromDateSearch) {
                console.log("asas");
                registerByCriterion = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE (fecha_sellado BETWEEN ? AND ?) AND id_linea = ? AND id_calibrador = ? AND is_verificado = ? ORDER BY fecha_sellado, hora_sellado ASC', [fromDateSearch, toDateSearch, idLine, idCaliper, verificadas]);
            }

            if (registerByCriterion.length > 0) {
                return res.status(200).json(registerByCriterion);

            } else {
                res.status(204).json({ text: 'No existen registros de seguimiento de cajas para mostrar' });
            }
        } catch {
            res.status(404).json({ text: 'No se pudo realizar la busqueda' });
        }

    }
}

export const cajaSelladaController = new CajaSelladaController();