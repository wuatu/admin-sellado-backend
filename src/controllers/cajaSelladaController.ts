import { Request, Response } from 'express';
import pool from '../database';
class CajaSelladaController {
    public async list(req: Request, res: Response) {
        try {
            const { id_linea, id_calibrador } = req.params;
            let usuariosEnLinea: any;
            if (id_calibrador != "0" && id_linea != "0") {
                usuariosEnLinea = await pool.query('SELECT * FROM registro_diario_caja_sellada WHERE id_linea = ? and id_calibrador = ?', [id_linea, id_calibrador]);
            }
            
            if (usuariosEnLinea.length > 0) {
                return res.status(200).json(usuariosEnLinea);
            } else {
                res.status(404).json({ text: 'Sin registros de usuarios en linea' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo obtener usuarios en linea' });
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {
            console.log(req.body);
            const usuarioEnLinea = await pool.query('INSERT INTO registro_diario_caja_sellada set ?', [req.body]);
            if (usuarioEnLinea != null) {
                console.log(usuarioEnLinea);
                if (usuarioEnLinea != null) {
                    if (usuarioEnLinea.affectedRows > 0) {
                        res.status(200).json({ message: 'usuario en línea creado' });
                    }
                } else {
                    res.status(404).json({ text: 'No se pudo crear usuario en línea' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo crear usuario' });
        }
    }

    public async search(req: Request, res: Response) {
        try {
            const { rutSearch, fromDateSearch, toDateSearch } = req.params;            
             console.log(rutSearch);
             console.log(fromDateSearch);
             console.log(toDateSearch);
            let userInLineSearch: any;
            if (rutSearch && fromDateSearch && !toDateSearch) {
                userInLineSearch = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE  rut_usuario = ? AND fecha_sellado like ?', [rutSearch, "%"+fromDateSearch]);
            } else if(rutSearch && fromDateSearch && toDateSearch){
                console.log("hola");
                userInLineSearch = await pool.query(' SELECT * FROM registro_diario_caja_sellada WHERE  rut_usuario = ? AND (fecha_sellado BETWEEN ? AND ?)', [rutSearch, fromDateSearch+"%", toDateSearch+"%"]);
            }
            
            if (userInLineSearch.length > 0) {
                return res.status(200).json(userInLineSearch);
            } else {
                res.status(404).json({ text: 'Sin registros de usuarios en linea' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo obtener usuarios en linea' });
        }
    }

    public async searchTotal(req: Request, res: Response) {
        try {
            const { id_turno, id_calibrador } = req.params;           
             console.log(id_turno);
             console.log(id_calibrador);
             let usuariosEnLinea: any;
             let idTurnoTotal: any;
            let codigo_de_barra: any;
            if (id_calibrador != "0" && id_turno != "0") {
                idTurnoTotal = await pool.query('select count(registro_diario_caja_sellada.id) from registro_diario_caja_sellada where id_calibrador = ? and id_apertura_cierre_de_turno = ?', [id_calibrador,id_turno]);
            }

            
            if (idTurnoTotal.length > 0) {
                
                return res.status(200).json(idTurnoTotal);
                
            } else {
                res.status(404).json({ text: 'Sin registros de cajas' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo obtener cajas' });
        }
    }

    public async searchAverageforMinute(req: Request, res: Response) {
        try {
            const { id_turno, id_calibrador } = req.params;           
             console.log(id_turno);
             console.log(id_calibrador);
             let usuariosEnLinea: any;
            let idTurnoJson: any;
            let codigo_de_barra: any;
            let horasSellado: any;
            if (id_calibrador != "0" && id_turno != "0") {
                horasSellado = await pool.query('select hora_sellado from registro_diario_caja_sellada where id_calibrador = ? and id_apertura_cierre_de_turno = ? order by hora_sellado', [id_calibrador,id_turno]);                          
            }

            
            if (horasSellado.length > 0) {

                console.log("horasSellado.lenght: " + horasSellado.length);

                console.log("horasSellado: " + horasSellado[0].hora_sellado);

                console.log("horasSellado: " + horasSellado[horasSellado.length-1].hora_sellado);

                var hora1 = (horasSellado[horasSellado.length-1].hora_sellado).split(":");
                var hora2 = (horasSellado[0].hora_sellado).split(":");
                
                let t1 = new Date();
                let t2 = new Date();
             
                t1.setHours(hora1[0], hora1[1], hora1[2]);
                t2.setHours(hora2[0], hora2[1], hora2[2]);
                
                //Aquí hago la resta
                let ms = t1.setHours(t1.getHours() - t2.getHours(), t1.getMinutes() - t2.getMinutes(), t1.getSeconds() - t2.getSeconds());
                let minutos = Math.floor((ms % 3600000) / 60000);
                console.log("resta: " + minutos);

                console.log("prom: " + horasSellado.length/(minutos+1)); //miunto+1 para que tome el primer minuto
                
                return res.status(200).json(horasSellado.length/(minutos+1));        
                
            } else {
                res.status(404).json({ text: 'Sin registros de cajas' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo obtener cajas' });
        }
    }

    public async searchAverageLastHourforMinute(req: Request, res: Response) {
        try {
            const { id_turno, id_calibrador } = req.params;           
             console.log(id_turno);
             console.log(id_calibrador);
             let usuariosEnLinea: any;
            let idTurnoJson: any;
            let codigo_de_barra: any;
            let horasSellado: any;

            //Capturar hora actual del sistema
            var date = new Date(); 
            let hora = date.getHours()+"";
            console.log("hora.length: " + hora.length);
            let minuto = date.getMinutes()+"";
            console.log("minuto.length: " + minuto.length);
            let segundo = date.getSeconds()+"";
            console.log("segundo.length: " + segundo.length);
            if(hora.length==1){
                hora = "0"+hora;
            }
            if(minuto.length==1){
                minuto = "0"+minuto;
            }
            if(segundo.length==1){
                segundo = "0"+segundo;
            }
            let horaInicial =hora+":00:00";               
            console.log("horaInicial: " + horaInicial);
            let horaActual = hora+":"+minuto+":"+segundo;                
            console.log("horaActual: " + horaActual);

            if (id_calibrador != "0" && id_turno != "0") {
                horasSellado = await pool.query('select hora_sellado from registro_diario_caja_sellada where id_calibrador = ? and id_apertura_cierre_de_turno = ? AND hora_sellado between ? AND ? order by hora_sellado', [id_calibrador,id_turno,horaInicial,horaActual]);                          
            }

            
            if (horasSellado.length > 0) {

                console.log("horasSellado.lenght: " + horasSellado.length);

                console.log("horasSellado: " + horasSellado[0].hora_sellado);

                console.log("horasSellado: " + horasSellado[horasSellado.length-1].hora_sellado);

                var hora1 = (horasSellado[horasSellado.length-1].hora_sellado).split(":");
                var hora2 = (horasSellado[0].hora_sellado).split(":");
                
                let t1 = new Date();
                let t2 = new Date();
             
                t1.setHours(hora1[0], hora1[1], hora1[2]);
                t2.setHours(hora2[0], hora2[1], hora2[2]);
                
                //Aquí hago la resta
                let ms = t1.setHours(t1.getHours() - t2.getHours(), t1.getMinutes() - t2.getMinutes(), t1.getSeconds() - t2.getSeconds());
                let minutos = Math.floor((ms % 3600000) / 60000);
                console.log("resta: " + minutos);

                console.log("prom: " + horasSellado.length/(minutos+1)); //miunto+1 para que tome el primer minuto

                return res.status(200).json(horasSellado.length/(minutos+1));        
                
            } else {
                res.status(404).json({ text: 'Sin registros de cajas' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo obtener cajas' });
        }
    }

}

export const cajaSelladaController = new CajaSelladaController();