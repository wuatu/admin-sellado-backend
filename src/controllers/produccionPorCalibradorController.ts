import { Request, Response } from 'express';
import pool from '../database';
class ProduccionPorCalibradorController {

    //obtengo los turnos del calibrador en un rango de fechas
    /*public async getTurnos(req: Request, res: Response) {
        try {
            const { id_caliper, fromDateSearch, toDateSearch } = req.params;            
             
            let id_turnos: any;
            let turno: any;
            let turnos: any = [];
            let aux;
            if (id_caliper && fromDateSearch && toDateSearch ) 
            {
                id_turnos = await pool.query('SELECT DISTINCT(id_apertura_cierre_de_turno) AS id_turno FROM registro_diario_caja_sellada where id_calibrador = ? AND (fecha_sellado BETWEEN ? AND ?)', [id_caliper, fromDateSearch, toDateSearch]);
                console.log(" ");
                console.log("id turnos encontrados");
                console.log(id_turnos);
                console.log(" ");
                if(id_turnos.length > 0){
                    console.log("PASE EL IF!!!!!!   :  "+ id_turnos.length);
                    for(let i = 0; i < id_turnos.length ; i++){
                        console.log("FOR!!!!!!");
                        aux = id_turnos[i].id_turno;
                        turno = await pool.query('SELECT id AS id_turno, fecha_apertura AS fApertura, hora_apertura AS hApertura, fecha_cierre AS fCierre, hora_cierre AS hCierre FROM apertura_cierre_de_turno where id = ?', [aux]);
                        console.log(turno);
                        turnos.push(turno[0]);
                    }
                    console.log(" ");
                    console.log("¡¡¡¡ TURNOS ENCONTRADOS !!!!");
                    console.log(turnos);
                    console.log(" ");
                }
                
                
                
            }else{
                res.status(404).json({ text: 'error en datos de busqueda de turnos' });
            }
            
            if (turnos.length > 0) {
                return res.status(200).json(turnos);
            
            } else {
                
                res.status(204).json({ text: 'Sin registros para la busqueda de turnos' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo realizar la busqueda de turnos' });
        }

    }*/

    public async getTurnos(req: Request, res: Response) {
        try {
            const { id_caliper, fromDateSearch, toDateSearch } = req.params;            
             console.log("FECHAS : "+fromDateSearch +"  " + toDateSearch);
            let id_turnos: any;
            let turno: any;
            let turnos: any = [];
            let aux;
            if (id_caliper && fromDateSearch && toDateSearch ) 
            {
                turno = await pool.query('SELECT id AS id_turno, fecha_apertura AS fApertura, hora_apertura AS hApertura, fecha_cierre AS fCierre, hora_cierre AS hCierre FROM apertura_cierre_de_turno WHERE fk_calibrador = ? AND (fecha_apertura BETWEEN ? AND ?)', [id_caliper, fromDateSearch, toDateSearch]);
                console.log(" ");
                console.log("id turnos encontrados");
                console.log(turno);
                console.log(" ");
                /*if(id_turnos.length > 0){
                    console.log("PASE EL IF!!!!!!   :  "+ id_turnos.length);
                    for(let i = 0; i < id_turnos.length ; i++){
                        console.log("FOR!!!!!!");
                        aux = id_turnos[i].id_turno;
                        turno = await pool.query('SELECT id AS id_turno, fecha_apertura AS fApertura, hora_apertura AS hApertura, fecha_cierre AS fCierre, hora_cierre AS hCierre FROM apertura_cierre_de_turno where id = ?', [aux]);
                        console.log(turno);
                        turnos.push(turno[0]);
                    }
                    console.log(" ");
                    console.log("¡¡¡¡ TURNOS ENCONTRADOS !!!!");
                    console.log(turnos);
                    console.log(" ");
                }*/
                
                
                
            }else{
                res.status(404).json({ text: 'error en datos de busqueda de turnos' });
            }
            
            if (turno.length > 0) {
                return res.status(200).json(turno);
            
            } else {
                
                res.status(204).json({ text: 'Sin registros para la busqueda de turnos' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo realizar la busqueda de turnos' });
        }

    }


    //obtengo las lineas del calibrador
    public async getPromedioCajasPorMinutoTurno(req: Request, res: Response) {
        try {
            const { id_calibrador, id_turno, fecha_inicio, hora_inicio, fecha_termino, hora_termino } = req.params;            
            console.log("FECHA TERMINO EN GETPROMEDIOCAJASPORMINUTOTURNO ES : "+ fecha_termino + hora_termino)
            let fechaInicio = new Date(fecha_inicio+ "T"+ hora_inicio);
            let fechaTermino : any;
            if(fecha_termino != "undefine" && hora_termino != "undefine"){
                fechaTermino = new Date(fecha_termino+ "T"+ hora_termino);
            }else{
                fechaTermino = new Date();
            }
            
            
            //let fechaTermino = new Date(fecha_termino+ "T"+ hora_termino);
            let minutosDuracionTurno = 0;
            minutosDuracionTurno = (fechaTermino.getTime() -  fechaInicio.getTime())/60000;
            let totalCajasTurno: any;
            let promedio: any;
            if (id_calibrador && id_turno) 
            {
                totalCajasTurno = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) as total FROM registro_diario_caja_sellada WHERE id_calibrador = ?  AND id_apertura_cierre_de_turno = ? AND is_verificado = 1', [id_calibrador, id_turno]);
                   
            }else{
                res.status(404).json({ text: 'error en datos de busqueda de turnos' });
            }
            
            if (totalCajasTurno.length > 0 && minutosDuracionTurno > 0) {
                promedio = totalCajasTurno[0].total/minutosDuracionTurno; 
                console.log("el total de minutos de duracion del turno es : " + minutosDuracionTurno);
                console.log("El total de cajas es : "+ totalCajasTurno[0].total);    
                console.log("El promedio de cajas es : " + promedio);
                let duracion = minutosDuracionTurno/60;
                return res.status(200).json([{Promedio_de_cajas_por_minuto_del_calibrador_en_el_turno: promedio.toFixed(1), Total_de_cajas_en_turno: totalCajasTurno[0].total, Duracion_del_turno: duracion.toFixed(1) + " hrs"}]);
            
            } else {
                
                res.status(204).json({ text: 'Sin registros para la busqueda de turnos' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo realizar la busqueda de turnos' });
        }

    }

    //obtengo la producción del colaborador por el turno seleccionado
    public async getProduccionColaborador(req: Request, res: Response) {
        try {
            const {id_turno} = req.params;            
             
            let rut_colaboradores: any;
            let totalProduccionColaborador: any = [];
            let aux: any;
            if (id_turno) 
            {
                console.log("ENTRE AL TURNO DE IF !!!")
                rut_colaboradores = await pool.query('SELECT DISTINCT(rut_usuario) AS rut FROM registro_diario_caja_sellada WHERE id_apertura_cierre_de_turno = ?', [id_turno]);
                if(rut_colaboradores.length > 0){
                    console.log("ENTRE AL IF DE COLABORADORES > 0");
                    console.log(rut_colaboradores);
                    for(let i = 0 ; i < rut_colaboradores.length ; i++){
                        let rut = rut_colaboradores[i].rut;
                        console.log("a : "+ rut);
                        console.log("i : "+ i);
                        console.log("rut en i : "+ rut_colaboradores[i].rut);
                        console.log("id_turno : "+ id_turno);
                        aux = await pool.query('SELECT nombre_usuario AS Nombre, apellido_usuario AS Apellido, rut_usuario AS Rut, COUNT(DISTINCT(codigo_de_barra)) AS Total, id_apertura_cierre_de_turno AS id_turno FROM registro_diario_caja_sellada WHERE rut_usuario = ? AND id_apertura_cierre_de_turno = ? AND is_verificado = 1', [rut, id_turno]);
                        console.log(aux[0])
                        totalProduccionColaborador.push(aux[0]);
                    }
                }
                
                
            }else{
                res.status(404).json({ text: 'error en datos de busqueda de producción' });
            }
            
            if (totalProduccionColaborador.length > 0) {
                console.log(" ");
                console.log("PRODUCCION !!! : ");
                console.log(totalProduccionColaborador);
                console.log(" ");
                return res.status(200).json(totalProduccionColaborador);
            
            } else {
                
                res.status(204).json({ text: 'Sin registros para la busqueda de produccion del usuario' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo realizar la busqueda de produccion del usuario' });
        }

    }

    //obtengo la producción del colaborador por el turno seleccionado
    public async getProduccionLineaCalibrador(req: Request, res: Response) {
        try {
            const {id_calibrador,id_turno} = req.params;            
             
            let lineasCalibrador: any;
            let produccionTotalCalibrador: any;
            let totalProduccionLineaCalibrador: any = [];
            let aux: any;
            if (id_calibrador && id_turno) 
            {
                lineasCalibrador = await pool.query('SELECT DISTINCT(id_linea) FROM registro_diario_caja_sellada WHERE id_calibrador = ? AND id_apertura_cierre_de_turno = ?', [id_calibrador, id_turno]);
                console.log("Lineas calibrador");
                console.log(lineasCalibrador);
                produccionTotalCalibrador = await pool.query('SELECT nombre_calibrador AS Calibrador, COUNT(DISTINCT(codigo_de_barra)) AS Total FROM registro_diario_caja_sellada WHERE id_calibrador = ? AND id_apertura_cierre_de_turno = ? AND is_verificado = 1', [id_calibrador, id_turno]); 
                if(lineasCalibrador.length > 0){
                    for(let i = 0 ; i < lineasCalibrador.length ; i++){
                        let id_linea = lineasCalibrador[i].id_linea;
                        console.log("id_linea");
                        console.log(id_linea);
                        aux = await pool.query('SELECT nombre_linea AS Línea, COUNT(DISTINCT(codigo_de_barra)) AS Total FROM registro_diario_caja_sellada WHERE id_calibrador = ? AND id_linea = ? AND id_apertura_cierre_de_turno = ?', [id_calibrador, id_linea, id_turno]);
                        console.log("Produccion linea");
                        console.log(aux[0]);
                        totalProduccionLineaCalibrador.push(aux[0]);
                    }
                    totalProduccionLineaCalibrador.push({Línea: produccionTotalCalibrador[0].Calibrador,Total:produccionTotalCalibrador[0].Total});
                }
                
                
            }else{
                res.status(404).json({ text: 'error en búsqueda de producción de las líneas del calibrador' });
            }
            
            if (totalProduccionLineaCalibrador.length > 0) {
                return res.status(200).json(totalProduccionLineaCalibrador);                                                                                                                                                                                
            } else {
                
                res.status(204).json({ text: 'Sin registros en la búsqueda de producción de líneas del calibrador' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo realizar la búsqueda de producción de líneas en el calibrador'});
        }

    }

    //obtengo las lineas del calibrador
    public async countBoxInCaliper(req: Request, res: Response) {
        try {
            const { id_caliper, fromDateSearch, toDateSearch, id_turno} = req.params;            
             console.log(id_caliper + fromDateSearch + toDateSearch + id_turno);
             let numberBox: any;
            if (id_caliper ) 
            {
                numberBox = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) as numero FROM registro_diario_caja_sellada WHERE id_calibrador = ?  AND is_verificado = 1 AND id_apertura_cierre_de_turno = ?', [id_caliper, id_turno]);
                //numberBox = await pool.query('SELECT substr(fecha_sellado,1,10) as fecha_sellado2, Count(DATE_FORMAT(fecha_sellado, "%Y-%m-%d")) as numero FROM registro_diario_caja_sellada WHERE id_calibrador = ? AND (fecha_sellado BETWEEN ? AND ?) group by fecha_sellado2', [id_caliper, fromDateSearch, toDateSearch]);
                //console.log(producctionSearch);
            }else{
                res.status(404).json({ text: 'error en datos de busqueda del calibrador' });
            }
            
            if (numberBox.length > 0) {
                return res.status(200).json(numberBox[0]);
            
            } else {
                
                res.status(204).json({ text: 'Sin registros para esta busqueda' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo realizar la busqueda' });
        }

    }
    //obtengo las lineas del calibrador sin turno
    public async countBoxInCaliper2(req: Request, res: Response) {
        try {
            const { id_caliper, fromDateSearch, toDateSearch} = req.params;            
             console.log(id_caliper + fromDateSearch + toDateSearch);
             let numberBox: any;
            if (id_caliper ) 
            {
                numberBox = await pool.query('SELECT fecha_sellado, COUNT(DISTINCT(codigo_de_barra)) as numero FROM registro_diario_caja_sellada WHERE id_calibrador = ? AND (fecha_sellado BETWEEN ? AND ?) AND is_verificado = 1 group by fecha_sellado', [id_caliper, fromDateSearch, toDateSearch]);
                //numberBox = await pool.query('SELECT substr(fecha_sellado,1,10) as fecha_sellado2, Count(DATE_FORMAT(fecha_sellado, "%Y-%m-%d")) as numero FROM registro_diario_caja_sellada WHERE id_calibrador = ? AND (fecha_sellado BETWEEN ? AND ?) group by fecha_sellado2', [id_caliper, fromDateSearch, toDateSearch]);
                //console.log(producctionSearch);
            }else{
                res.status(404).json({ text: 'error en datos de busqueda del calibrador' });
            }
            
            if (numberBox.length > 0) {
                return res.status(200).json(numberBox);
            
            } else {
                
                res.status(404).json({ text: 'Sin registros para esta busqueda' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo realizar la busqueda' });
        }

    }
    public async searchRegisterCaliper(req: Request, res: Response) {
        try {
            const { id_caliper, fromDateSearch, toDateSearch, id_turno} = req.params;            
             console.log(id_caliper + fromDateSearch + toDateSearch+ id_turno);
             let searchCaliper: any;
            if (id_caliper ) 
            {
                searchCaliper = await pool.query(' SELECT * FROM registro_diario_caja_sellada  WHERE id_calibrador = ? AND (fecha_sellado BETWEEN ? AND ?) AND is_verificado = 1 AND id_apertura_cierre_de_turno = ? ORDER BY fecha_sellado, hora_sellado ASC', [id_caliper, fromDateSearch, toDateSearch, id_turno]);
                //console.log(producctionSearch);
            }else{
                res.status(404).json({ text: 'error en datos de busqueda del calibrador' });
            }
            
            if (searchCaliper.length > 0) {
                return res.status(200).json(searchCaliper);
            
            } else {
                
                res.status(204).json({ text: 'Sin registros para esta busqueda' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo realizar la busqueda' });
        }

    }
    public async searchRegisterCaliper2(req: Request, res: Response) {
        try {
            const { id_caliper, fromDateSearch, toDateSearch} = req.params;            
             console.log(id_caliper + fromDateSearch + toDateSearch);
             let searchCaliper: any;
            if (id_caliper ) 
            {
                searchCaliper = await pool.query(' SELECT * FROM registro_diario_caja_sellada  WHERE id_calibrador = ? AND (fecha_sellado BETWEEN ? AND ?) AND is_verificado = 1 ORDER BY fecha_sellado, hora_sellado ASC', [id_caliper, fromDateSearch, toDateSearch]);
                //console.log(producctionSearch);
            }else{
                res.status(404).json({ text: 'error en datos de busqueda del calibrador' });
            }
            
            if (searchCaliper.length > 0) {
                return res.status(200).json(searchCaliper);
            
            } else {
                
                res.status(204).json({ text: 'Sin registros para esta busqueda' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo realizar la busqueda' });
        }

    }
    
    //Actualiza todos los colaboradores que estan en la linea
    public async update(req: Request, res: Response) {
        try {
            const { id} = req.params;
            console.log(req.body);
            let registerUser: any ;
            if(id){
                registerUser = await pool.query('UPDATE registro_diario_caja_sellada SET fecha_validacion_time = ?, is_verificado = ?, is_before_time = ? WHERE id_calibrador = ? AND id_linea = ? AND codigo_de_barra = ? AND fecha_sellado = ? AND hora_sellado = ?', [req.body.fecha_validacion_time, req.body.is_verificado, req.body.is_before_time, req.body.id_calibrador, req.body.id_linea, req.body.codigo_de_barra, req.body.fecha_sellado, req.body.hora_sellado]);
            }else{
                res.status(404).json({ text: 'id invalido' });
            }
            if (registerUser != null) {
                if (registerUser.affectedRows > 0) {
                    res.status(200).json({ message: 'Registro actualizado' });
                } else {
                    res.status(404).json({ text: 'No se pudo actualizar el registro' });
                }
            }
        } catch{
            
            res.status(404).json({ text: 'No se pudo actualizar el registro' });
        }
    }

    
}

export const produccionPorCalibradorController = new ProduccionPorCalibradorController();