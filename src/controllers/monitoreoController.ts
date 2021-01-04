
import { Request, Response } from 'express';
import pool from '../database';
class MonitoreoController{
    //Este método obiene el último turno registrado en la base de datos, el cual es el turno que se mantiene activo
    public async getLastTurno(req: Request, res: Response){
        try{
            const {fk_calibrador} = req.params;
            console.log("entre al try ");
            let lastTurno: any;
            lastTurno = await pool.query('SELECT * FROM apertura_cierre_de_turno WHERE fecha_cierre = "" AND hora_cierre = "" AND fk_calibrador = ? ORDER by ID DESC LIMIT 1;', [fk_calibrador]);
            if(lastTurno.length > 0){
                console.log("entre al if > 0")
                return res.status(200).json(lastTurno);
            }else{
                res.status(204).json({ text: 'Sin registros para esta búsqueda' });
                console.log("entre al else > 0")
            }
        }catch{
            console.log("entre al catch");
            res.status(404).json({ text: 'No se pudo realizar la búsqueda' });
        }
        
    }
    /**************************************************************************************/
    //Este método obtiene los turnos actuales activos de de cada calibrador
    public async getActualTurnosCalibradores(req: Request, res: Response){
        try{
            //const {calibradores} = req.params;
            let calibradores:any;
            calibradores = await pool.query('SELECT id FROM calibrador');
            console.log("calibradores encontrados con SELECT id FROM calibrador");
            console.log(calibradores);
            let lastTurno: any;
            let turnos: any = [];
            for(let i = 0; i < calibradores.length; i++){
                let calibrador = calibradores[i];
                lastTurno = await pool.query('SELECT * FROM apertura_cierre_de_turno WHERE fecha_cierre = "" AND hora_cierre = "" AND fk_calibrador = ? ORDER by ID DESC LIMIT 1', [calibrador.id]);
                if(lastTurno.length > 0){
                    turnos.push(lastTurno[0]);
                    //return res.status(200).json(lastTurno);
                }else{
                    turnos.push({id: "undefine",fk_calibrador: calibrador.id});
                }
            }
            console.log("Turnos despues del for!!!");
            console.log(turnos);

            if(turnos.length > 0){
                console.log("se entro al if");
                return res.status(200).json(turnos);
            }else{
                console.log("se entro al else");
                return res.status(204).json({ text: 'No existen turnos activos' });
            }
            
        }catch{
            console.log("entre al catch");
            res.status(404).json({ text: 'No se pudo realizar la búsqueda' });
        }
        
    }
    /**************************************************************************************/

    public async countBoxBycaliper2(req: Request, res: Response) {
        try {
            console.log("countBoxByCaliper2");
            const { id_caliper, id_turno, fecha_apertura, hora_apertura } = req.params;
            console.log(id_caliper);
            console.log(id_turno);
            console.log(fecha_apertura);
            console.log(hora_apertura);

            console.log("countBoxBycaliper2()");
        
            let searchBox: any;

            //crear variable dateApertura desde la fecha y la hora de apertura del turno para ello se pasa la fecha y la hora en formato ISO UTC
            var dateApertura = new Date(fecha_apertura + "T" + hora_apertura + "Z");
            console.log("date apertura: "+dateApertura);
            dateApertura = new Date(fecha_apertura+ "T"+ hora_apertura);
            console.log("date apertura: "+dateApertura);

            //se buscan todos los registros (borré validado=1) para que llegue todo al fronted despues se fultra en el front. fecha_sellado_time es la clave para buscar cuando se pasa de un dia a otro.
            searchBox = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada_aux WHERE id_calibrador = ? AND id_apertura_cierre_de_turno = ? AND is_verificado = 1', [id_caliper, id_turno]);

            if (searchBox.length > 0) {
                console.log("produccion turno : "+searchBox[0].total);
                return res.status(200).json(searchBox);

            } else {
                res.status(404).json({ text: 'Sin registros para esta búsqueda' });
            }

        } catch {
            res.status(404).json({ text: 'No se pudo obtener cajas' });
        }
        

    }

    public async countTotalBoxBycaliper2(req: Request, res: Response) {
        try {
            console.log("countTotalBoxByCaliper2");
            const { id_caliper, id_turno, fecha_apertura, hora_apertura } = req.params;
            console.log(id_caliper);
            console.log(id_turno);
            console.log(fecha_apertura);
            console.log(hora_apertura);

            console.log("countBoxBycaliper2()");
        
            let searchBox: any;

            //crear variable dateApertura desde la fecha y la hora de apertura del turno para ello se pasa la fecha y la hora en formato ISO UTC
            var dateApertura = new Date(fecha_apertura + "T" + hora_apertura + "Z");
            console.log("date apertura: "+dateApertura);
            dateApertura = new Date(fecha_apertura+ "T"+ hora_apertura);
            console.log("date apertura: "+dateApertura);

            //se buscan todos los registros (borré validado=1) para que llegue todo al fronted despues se fultra en el front. fecha_sellado_time es la clave para buscar cuando se pasa de un dia a otro.
            searchBox = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada_aux WHERE id_calibrador = ? AND id_apertura_cierre_de_turno = ?', [id_caliper, id_turno]);

            if (searchBox.length > 0) {
                console.log("produccion turno : "+searchBox[0].total);
                return res.status(200).json(searchBox);

            } else {
                res.status(404).json({ text: 'Sin registros para esta búsqueda' });
            }

        } catch {
            res.status(404).json({ text: 'No se pudo obtener cajas' });
        }
        

    }

   //promedio de cajas por minuto en turno, se consulta solo por las cajas en un calibrador y turno x, ya que se necesitan las cajas de todo el turno
    //al tener el id no es necesario saber si el turno esta en un dia u otro.
    public async searchAverageforMinute2(req: Request, res: Response) {
        try {
            const { id_caliper, id_turno, fecha_apertura, hora_apertura} = req.params;
           
            //console.log(id_caliper);
            //console.log(id_turno);
            //console.log(fecha_apertura);
            //console.log(hora_apertura);
            console.log("searchAverageForMinute2");
       

            //console.log("getAverageforMinute2()");

            let searchBox: any;
            let numLine: any;

            //crear variable dateApertura desde la fecha y la hora de apertura del turno para ello se pasa la fecha y la hora en formato ISO UTC
            //var dateApertura = new Date(fecha_apertura + "T" + hora_apertura + "Z");
            var dateApertura = new Date(fecha_apertura + "T" + hora_apertura);
            console.log("date apertura: " + dateApertura);

            //creo variable date que corresponde a la fecha actual
            var date = (new Date());
            // Se calcula la cantidad de minutos para realizar el promedio 
            var tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos = (date.getTime() - dateApertura.getTime()) / 60000;
            //console.log("tiempo transcurrido desde que se inicia el turno : " + tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos);
            console.log("Tiempo transcurrido desde el inicio del turno : " + tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos);
            //se buscan todos los registros (borré validado=1) para que llegue todo al fronted despues se fultra en el front. fecha_sellado_time es la clave para buscar cuando se pasa de un dia a otro.
            searchBox = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada_aux WHERE id_calibrador = ? AND id_apertura_cierre_de_turno = ? AND is_verificado = 1', [id_caliper, id_turno]);
            numLine = await pool.query('SELECT COUNT(DISTINCT(id_linea)) AS totalLine FROM registro_diario_caja_sellada_aux WHERE id_calibrador = ? AND id_apertura_cierre_de_turno = ? AND is_verificado = 1', [id_caliper, id_turno]);
            console.log("El total de lineas en produccion es : "+numLine[0].totalLine);
            if (searchBox.length > 0) {
                //console.log("total de cajas encontradas : " + searchBox[0].total);
                //se divide el total de cajas encontradas por la cantidas de minutos transcurridos en el turno.  
                searchBox[0].total = ((searchBox[0].total / tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos) / numLine[0].totalLine).toFixed(1);                

                return res.status(200).json(searchBox);

            } else {
                res.status(404).json({ text: 'Sin registros para esta búsqueda' });
            }

        } catch {
            res.status(404).json({ text: 'No se pudo obtener cajas' });
        }

    }

    public async searchAverageLastHourforMinute2(req: Request, res: Response) {
        try {
            const { id_caliper, id_turno, fecha_apertura, hora_apertura} = req.params;
      
            /*
            console.log(id_caliper);
            console.log(id_turno);
            console.log(fecha_apertura);
            console.log(hora_apertura);            
            */
            console.log("searchAverageLastHourforMinute2");
            let searchBox: any;
            let numLine: any;
            let MinutosDiv = 60;

            //crear variable dateApertura desde la fecha y la hora de apertura del turno para ello se pasa la fecha y la hora en formato ISO UTC
            var dateApertura = new Date(fecha_apertura + "T" + hora_apertura);
            //console.log("date apertura: " + dateApertura);


            //creo variable date que corresponde a la fecha actual
            var date = (new Date());
            //var tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos = (date.getTime() - dateApertura.getTime()) / 60000;
            //se calcula la cantidad de minutos previamente para saber si el turno comenzo hace menos de una hora y asi no restar una hora a la consulta.
            var tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos = (date.getTime() - dateApertura.getTime()) / (60000);
            //console.log("tiempo transcurrido desde que se inicia el turno : " + tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos);

            if (tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos < 60) {
                MinutosDiv = tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos;
                var tiempoMenosUnaHora: number = (dateApertura.getTime());
            }else{
                var tiempoMenosUnaHora: number = (date.getTime() - (60000 * 60));
            }

            if(tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos<1){
                MinutosDiv=1;
            }
            console.log("la fecha de apertura es : "+dateApertura);
            console.log("tiempo transcurrido : "+ tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos)
            console.log("minutosDivvvvvvvvvvv:"+MinutosDiv);

            //restar una hora a la hora actual, se obtiene un valor númerico con el que se puede hacer la comparación
            //var tiempoMenosUnaHora: number = (date.getTime() - (60000 * 60));
            //var tiempoMenosUnaHora: number = date.getHours() - 1;
            //console.log("hora actual menos una hora  : " + tiempoMenosUnaHora);
            console.log("tiempo menos una hora :"+tiempoMenosUnaHora);
            //se buscan todos los registros (borré validado=1) para que llegue todo al fronted despues se fultra en el front. fecha_sellado_time es la clave para buscar cuando se pasa de un dia a otro.
            console.log("antes de la consulta !!");
            searchBox = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada_aux WHERE id_calibrador = ? AND id_apertura_cierre_de_turno = ? AND fecha_validacion_time >= ? AND is_verificado = 1', [id_caliper, id_turno, tiempoMenosUnaHora]);
            numLine = await pool.query('SELECT COUNT(DISTINCT(id_linea)) AS totalLine FROM registro_diario_caja_sellada_aux WHERE id_calibrador = ? AND id_apertura_cierre_de_turno = ? AND fecha_validacion_time >= ? AND is_verificado = 1', [id_caliper, id_turno, tiempoMenosUnaHora]);
            console.log("despues de la consulta ");
            console.log("La cantidad de linea en produccion es : "+ numLine[0].totalLine);
            if (searchBox.length > 0) {
                //console.log("total de cajas encontradas : " + searchBox[0].total);
                //se divide el total de cajas encontradas por la cantidas de minutos de la última hora (60) o los minutos transcurridos en el turno en la primera hora depúes de ser iniciado.  
                console.log("total de cajas: " + searchBox[0].total);
                //searchBox[0].total = Math.round(searchBox[0].total / MinutosDiv);
                searchBox[0].total = ((searchBox[0].total / MinutosDiv) / numLine[0].totalLine).toFixed(1);
                console.log("el promedio es  : "+searchBox[0].total)
                return res.status(200).json(searchBox);

            } else {
                res.status(404).json({ text: 'Sin registros para esta búsqueda' });
            }

        } catch {
            res.status(404).json({ text: 'No se pudo obtener cajas' });
        }

    }

}
export const monitoreoController = new MonitoreoController();