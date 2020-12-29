import { Request, Response } from 'express';
import pool from '../database';
class MonitoreoCalibradoresController {

    public async deleteRegisterAux(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const rfid = await pool.query('DELETE FROM registro_diario_caja_sellada_aux WHERE id_apertura_cierre_de_turno = ?', [id]);
            if (rfid != null) {
                if (rfid.affectedRows > 0) {
                    res.status(200).json({ message: 'registros de cajas selladas eliminados' });
                } else {
                    res.status(204).json({ text: 'No se pudo eliminar los registros de cajas selladas' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo eliminar los registros de cajas selladas' });
        }
    }

    //Este método obiene el último turno registrado en la base de datos, el cual es el turno que se mantiene activo
    public async getLastTurno(req: Request, res: Response) {
        try {
            let lastTurno: any;
            lastTurno = await pool.query('SELECT * FROM apertura_cierre_de_turno ORDER by ID DESC LIMIT 1;');
            if (lastTurno.length > 0) {
                return res.status(200).json(lastTurno);
            } else {
                res.status(404).json({ text: 'Sin registros para esta búsqueda' });
            }
        } catch {
            res.status(404).json({ text: 'No se pudo realizar la búsqueda' });
        }

    }

    //Este método obiene el último turno registrado en la base de datos, el cual es el turno que se mantiene activo
    public async getCajasPorLinea(req: Request, res: Response) {
        try {
            const { id_calibrador, id_turno} = req.params;
            let lineasCalibrador: any;
            let totalCajasPorLinea: any = [];
            lineasCalibrador = await pool.query('SELECT DISTINCT(id_linea) FROM registro_diario_caja_sellada_aux WHERE id_calibrador = ? AND id_apertura_cierre_de_turno = ? AND is_verificado = "1" ORDER by id_linea;', [id_calibrador, id_turno]);
            if(lineasCalibrador.length > 0){
                for(let i = 0 ; i < lineasCalibrador.length; i++){
                    let id_linea =  lineasCalibrador[i].id_linea;
                    let aux = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada_aux WHERE id_calibrador = ? AND id_linea = ? AND id_apertura_cierre_de_turno = ? AND is_verificado = "1" ORDER by id_linea', [id_calibrador, id_linea, id_turno]);
                    totalCajasPorLinea.push({total:aux[0].total, id_linea: lineasCalibrador[i].id_linea});
                }
            }
            if (totalCajasPorLinea.length > 0) {
                return res.status(200).json(totalCajasPorLinea);
            } else {
                res.status(204).json({ text: 'Sin registros para esta búsqueda' });
            }
        } catch {
            res.status(404).json({ text: 'No se pudo realizar la búsqueda' });
        }

    }

    public async countBoxBycaliper2(req: Request, res: Response) {
        try {
            const { id_caliper, id_turno, fecha_apertura, hora_apertura } = req.params;
            //console.log(id_caliper);
            //console.log(id_turno);
            //console.log(fecha_apertura);
            //console.log(hora_apertura);

            //console.log("countBoxBycaliper2()");

            let searchBox: any;

            //crear variable dateApertura desde la fecha y la hora de apertura del turno para ello se pasa la fecha y la hora en formato ISO UTC
            var dateApertura = new Date(fecha_apertura + "T" + hora_apertura + "Z");
            //console.log("date apertura: " + dateApertura);
            dateApertura = new Date(fecha_apertura + "T" + hora_apertura);
            //console.log("date apertura: " + dateApertura);

            //se buscan todos los registros (borré validado=1) para que llegue todo al fronted despues se fultra en el front. fecha_sellado_time es la clave para buscar cuando se pasa de un dia a otro.
            searchBox = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada_aux WHERE id_calibrador = ? AND id_apertura_cierre_de_turno = ? AND is_verificado = 1', [id_caliper, id_turno]);

            if (searchBox.length > 0) {
                console.log("produccion turno : " + searchBox[0].total);
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
            const { id_caliper, id_turno, fecha_apertura, hora_apertura } = req.params;
            //console.log(id_caliper);
            //console.log(id_turno);
            //console.log(fecha_apertura);
            //console.log(hora_apertura);

            console.log("countTotalBoxBycaliper2()");

            let searchBox: any;

            //crear variable dateApertura desde la fecha y la hora de apertura del turno para ello se pasa la fecha y la hora en formato ISO UTC
            var dateApertura = new Date(fecha_apertura + "T" + hora_apertura + "Z");
            //console.log("date apertura: " + dateApertura);
            dateApertura = new Date(fecha_apertura + "T" + hora_apertura);
            //console.log("date apertura: " + dateApertura);

            //se buscan todos los registros (borré validado=1) para que llegue todo al fronted despues se fultra en el front. fecha_sellado_time es la clave para buscar cuando se pasa de un dia a otro.
            searchBox = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada_aux WHERE id_calibrador = ? AND id_apertura_cierre_de_turno = ?', [id_caliper, id_turno]);

            if (searchBox.length > 0) {
                console.log("produccion TOTAL turno : " + searchBox[0].total);
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
            const { id_caliper, id_turno, fecha_apertura, hora_apertura, lineas_length } = req.params;
            let totalLineas = Number(lineas_length);
            //console.log(id_caliper);
            //console.log(id_turno);
            //console.log(fecha_apertura);
            //console.log(hora_apertura);

            //console.log("getAverageforMinute2()");

            let searchBox: any;
            let numLine: any;
            //crear variable dateApertura desde la fecha y la hora de apertura del turno para ello se pasa la fecha y la hora en formato ISO UTC
            var dateApertura = new Date(fecha_apertura + "T" + hora_apertura + "Z");
            dateApertura = new Date(fecha_apertura + "T" + hora_apertura);
            console.log("date apertura: " + dateApertura);

            //creo variable date que corresponde a la fecha actual
            var date = (new Date());
            // Se calcula la cantidad de minutos para realizar el promedio 
            var tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos = (date.getTime() - dateApertura.getTime()) / 60000;
            //console.log("tiempo transcurrido desde que se inicia el turno : " + tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos);

            //se buscan todos los registros (borré validado=1) para que llegue todo al fronted despues se fultra en el front. fecha_sellado_time es la clave para buscar cuando se pasa de un dia a otro.
            searchBox = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada_aux WHERE id_calibrador = ? AND id_apertura_cierre_de_turno = ? AND is_verificado = 1', [id_caliper, id_turno]);
            numLine = await pool.query('SELECT COUNT(DISTINCT(id_linea)) AS totalLine FROM registro_diario_caja_sellada_aux WHERE id_calibrador = ? AND id_apertura_cierre_de_turno = ? AND is_verificado = 1', [id_caliper, id_turno]);
            
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
            const { id_caliper, id_turno, fecha_apertura, hora_apertura, lineas_length } = req.params;
            let totalLineas = Number(lineas_length);
            console.log(id_caliper);
            console.log(id_turno);
            console.log(fecha_apertura);
            console.log(hora_apertura);
            console.log(lineas_length);

            let searchBox: any;
            let numLine: any;
            let MinutosDiv = 60;

            //crear variable dateApertura desde la fecha y la hora de apertura del turno para ello se pasa la fecha y la hora en formato ISO UTC
            var dateApertura = new Date(fecha_apertura + "T" + hora_apertura);
            //console.log("date apertura: " + dateApertura);


            //creo variable date que corresponde a la fecha actual
            var date = (new Date());

            //se calcula la cantidad de minutos previamente para saber si el turno comenzo hace menos de una hora y asi no restar una hora a la consulta.
            var tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos = (date.getTime() - dateApertura.getTime()) / (60000);
            //console.log("tiempo transcurrido desde que se inicia el turno : " + tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos);

            if (tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos < 60) {
                MinutosDiv = tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos;
            }

            if(tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos<1){
                MinutosDiv=1;
            }

            console.log("minutosDivvvvvvvvvvv:"+MinutosDiv);

            //restar una hora a la hora actual, se obtiene un valor númerico con el que se puede hacer la comparación
            var tiempoMenosUnaHora: number = (date.getTime() - (60000 * 60));
            //var tiempoMenosUnaHora: number = date.getHours() - 1;
            //console.log("hora actual menos una hora  : " + tiempoMenosUnaHora);

            //se buscan todos los registros (borré validado=1) para que llegue todo al fronted despues se fultra en el front. fecha_sellado_time es la clave para buscar cuando se pasa de un dia a otro.
            console.log("antes de la consulta !!");
            searchBox = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada_aux WHERE id_calibrador = ? AND id_apertura_cierre_de_turno = ? AND fecha_validacion_time >= ?', [id_caliper, id_turno, tiempoMenosUnaHora]);
            numLine = await pool.query('SELECT COUNT(DISTINCT(id_linea)) AS totalLine FROM registro_diario_caja_sellada_aux WHERE id_calibrador = ? AND id_apertura_cierre_de_turno = ? AND fecha_validacion_time >= ?', [id_caliper, id_turno, tiempoMenosUnaHora]);
            console.log("despues de la consulta ");
            if (searchBox.length > 0) {
                //console.log("total de cajas encontradas : " + searchBox[0].total);
                //se divide el total de cajas encontradas por la cantidas de minutos de la última hora (60) o los minutos transcurridos en el turno en la primera hora depúes de ser iniciado.  
                console.log("total de cajas: " + searchBox[0].total);
                //searchBox[0].total = Math.round(searchBox[0].total / MinutosDiv);
                searchBox[0].total = ((searchBox[0].total / MinutosDiv) / numLine[0].totalLine).toFixed(1);

                return res.status(200).json(searchBox);

            } else {
                res.status(404).json({ text: 'Sin registros para esta búsqueda' });
            }

        } catch {
            res.status(404).json({ text: 'No se pudo obtener cajas' });
        }

    }

    public async searchAverageLastMinuteByLine2(req: Request, res: Response) {
        try {
            const { id_caliper, id_turno, fecha_apertura, hora_apertura, id_line, name_line } = req.params;
            console.log(name_line);
            console.log(id_line);
            console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
            console.log(id_caliper);
            console.log(id_turno);
            console.log(fecha_apertura);
            console.log(hora_apertura);

            let productionLine: any;

            let searchBox: any;
            let MinutosDiv = 60;
            let div;
            let cajasPorLinea: any;

            //crear variable dateApertura desde la fecha y la hora de apertura del turno para ello se pasa la fecha y la hora en formato ISO UTC
            var dateApertura = new Date(fecha_apertura + "T" + hora_apertura);
            console.log("date apertura: " + dateApertura);


            //creo variable date que corresponde a la fecha actual
            var date = (new Date());

            //se calcula la cantidad de minutos previamente para saber si el turno comenzo hace menos de una hora y asi no restar una hora a la consulta.
            var tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos = (date.getTime() - dateApertura.getTime()) / 60000;
            console.log("tiempo transcurrido desde que se inicia el turno : " + tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos);

            
            let tiempoMenosCincoMinutos: number;
            //restar un minuto a la hora actual, se obtiene un valor númerico con el que se puede hacer la comparación
            //var tiempoMenosUnMinuto: number = (date.getTime() - (60000));
            if(tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos >= 5){
                tiempoMenosCincoMinutos = (date.getTime() - (60000*5));
                div = 5;
            }else{
                tiempoMenosCincoMinutos = (date.getTime() - (60000*tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos));
                div = tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos;
            }
            if (tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos < 60) {
                MinutosDiv = tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos;
            }

            if(tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos<1){
                MinutosDiv=1;
                div = 1;
            }

            console.log("minutos a dividir !!! : "+div);
            //var tiempoMenosUnaHora: number = date.getHours() - 1;
            console.log("hora actual menos cinco minutos  : " + tiempoMenosCincoMinutos);

            //se buscan todos los registros (borré validado=1) para que llegue todo al fronted despues se fultra en el front. fecha_sellado_time es la clave para buscar cuando se pasa de un dia a otro.
            productionLine = await pool.query('SELECT id_linea, nombre_linea,COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada_aux WHERE id_calibrador = ? AND id_apertura_cierre_de_turno = ? AND fecha_sellado_time >= ? AND id_linea = ?', [id_caliper, id_turno, tiempoMenosCincoMinutos, id_line]);
            // see busca la catidad de cajas selladas en la linea 
            cajasPorLinea = await pool.query('SELECT id_linea, nombre_linea,COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada_aux WHERE id_calibrador = ? AND id_apertura_cierre_de_turno = ? AND fecha_sellado_time >= ? AND id_linea = ?', [id_caliper, id_turno, dateApertura.getTime(), id_line]);
            if (productionLine.length > 0) {

                if (productionLine[0].total >= 0) {
                    //si la linea no tiene producción 
                    productionLine[0].id_linea = parseInt(id_line);
                    productionLine[0].nombre_linea = name_line;
                }
                if (productionLine[0].nombre_linea == null) {
                    //si la linea no tiene producción
                    productionLine[0].nombre_linea = name_line;
                }
                if(productionLine[0].total > 0){
                    console.log("total de cajas en 5 minutos : "+productionLine[0].total)
                    productionLine[0].total = productionLine[0].total/div;
                    console.log("total de cajas en 5 minutos dividido 5: "+productionLine[0].total)
                }
                
                return res.status(200).json({id_linea:productionLine[0].id_linea, nombre_linea:productionLine[0].nombre_linea, total:productionLine[0].total.toFixed(1), total_turno: cajasPorLinea[0].total});

            } else {

                res.status(404).json({ text: 'Sin registros para esta búsqueda' });
            }

        } catch {
            res.status(404).json({ text: 'No se pudo obtener cajas' });
        }
    }

    public async searchAverageLastMinuteByLine(req: Request, res: Response) {
        try {
            const { id_caliper, id_line, name_line, date, time, fecha_actual } = req.params;

            let productionLine: any;
            let productionLineAux: any;
            //En esta sección se captura la hora actual del sistema. Se útiliza para saber cuantos minutos 
            //han transcurrido desde que comenzo el turno hasta el momento de la consulta.
            var fecha = new Date();
            var t1 = new Date;
            let hora = fecha.getHours() + "";
            console.log("hora.length: " + hora.length);
            let minuto = fecha.getMinutes() + "";
            console.log("minuto.length: " + minuto.length);
            let segundo = fecha.getSeconds() + "";
            console.log("segundo.length: " + segundo.length);
            if (hora.length == 1) {
                hora = "0" + hora;
            }
            if (minuto.length == 1) {
                minuto = "0" + minuto;
            }
            if (segundo.length == 1) {
                segundo = "0" + segundo;
            }
            let horaActual = hora + ":" + minuto + ":" + segundo;
            console.log("horaActual: " + horaActual);

            /************************************************************************************************************************/
            if (date && time && id_caliper) {
                console.log("opcion 2 ");
                // si son las 00 horas con xx minutos, se resta una hora, por lo que serian las 11 horas con xx minutos del dia anterior
                if (hora == '00' && minuto == '00') {
                    console.log("if de 00");
                    let hourSearch = "11" + ":" + "59" + ":" + segundo;
                    productionLine = await pool.query('SELECT id_linea, nombre_linea,COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada_aux WHERE fecha_sellado = ? AND hora_sellado >= ? AND hora_sellado <= ? AND id_calibrador = ? AND id_linea = ? AND is_verificado = 1', [date, hourSearch, '23:59:59', id_caliper, id_line]);
                    productionLineAux = await pool.query('SELECT id_linea, nombre_linea,COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada_aux WHERE fecha_sellado = ? AND hora_sellado >= ? AND hora_sellado <= ? AND id_calibrador = ? AND id_linea = ? AND is_verificado = 1', [fecha_actual, '00:00:00', horaActual, id_caliper, id_line]);
                    productionLine[0].total = productionLine[0].total + productionLineAux[0].total;
                    // sino, sinifica que son mas de las 00 horas y se realiza la resta normal de una hora a la hora actual del dia actual del turno. 
                } else if (hora != '00' && minuto == '00') {
                    //En esta sección se resta  una hora a la hora actual para realizar la consulta.
                    var t1 = new Date();
                    let horaSplit = horaActual.split(":");
                    t1.setHours(parseInt(horaSplit[0]), parseInt(horaSplit[1]), parseInt(horaSplit[2]));
                    t1.setHours(t1.getHours() - 1);
                    let horaBusqueda: any;
                    if (t1.getHours() < 10) {
                        horaBusqueda = "0" + t1.getHours() + ":";
                    } else {
                        horaBusqueda = t1.getHours() + ":";
                    }
                    let hourSearch = horaBusqueda + "59" + ":" + segundo;
                    productionLine = await pool.query('SELECT id_linea, nombre_linea,COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada_aux WHERE fecha_sellado = ? AND hora_sellado >= ? AND hora_sellado <= ? AND id_calibrador = ? AND id_linea = ? AND is_verificado = 1', [fecha_actual, hourSearch, horaActual, id_caliper, id_line]);
                } else if (hora != '00' && minuto != '00') {
                    //En esta sección se resta  una hora a la hora actual para realizar la consulta.
                    var t1 = new Date();
                    let horaSplit = horaActual.split(":");
                    t1.setHours(parseInt(horaSplit[0]), parseInt(horaSplit[1]), parseInt(horaSplit[2]));
                    t1.setMinutes(t1.getMinutes() - 1);
                    let minutoBusqueda: any;
                    if (t1.getMinutes() < 10) {
                        minutoBusqueda = "0" + t1.getMinutes() + ":";
                    } else {
                        minutoBusqueda = t1.getMinutes() + ":";
                    }
                    let hourSearch = hora + ":" + minutoBusqueda + segundo;
                    productionLine = await pool.query('SELECT id_linea, nombre_linea,COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada_aux WHERE fecha_sellado = ? AND hora_sellado >= ? AND hora_sellado <= ? AND id_calibrador = ? AND id_linea = ? AND is_verificado = 1', [fecha_actual, hourSearch, horaActual, id_caliper, id_line]);
                }
            } else {
                res.status(404).json({ text: 'error en datos de búsqueda de cajas' });
            }

            if (productionLine.length > 0) {

                if (productionLine[0].total >= 0) {
                    //si la linea no tiene producción 
                    productionLine[0].id_linea = parseInt(id_line);
                    productionLine[0].nombre_linea = name_line;
                }
                if (productionLine[0].nombre_linea == null) {
                    //si la linea no tiene producción
                    productionLine[0].nombre_linea = name_line;
                }
                return res.status(200).json(productionLine);

            } else {

                res.status(404).json({ text: 'Sin registros para esta búsqueda' });
            }

        } catch {
            res.status(404).json({ text: 'No se pudo obtener cajas' });
        }
    }

}
export const monitoreoCalibradoresController = new MonitoreoCalibradoresController();