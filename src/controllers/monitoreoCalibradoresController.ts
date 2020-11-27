import { Request, Response } from 'express';
import pool from '../database';
class MonitoreoCalibradoresController {
    //Este método realiza la consulta de la producción del turno hasta la hora de la consulta de una linea y calibrador en específico
    public async getProductionLineTurno(req: Request, res: Response) {
        try {
            const { id_caliper, id_line, name_line, date, time, option, fecha_actual } = req.params;

            let productionLine: any;
            let productionLineAux: any;
            // option 1, para contar las cajas del turno que se encuentra en un mismo día
            if (option == '1') {
                if (date && time && id_caliper) {
                    console.log("promedio turno");
                    productionLine = await pool.query('SELECT id_linea, nombre_linea,COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado >= ? AND id_calibrador = ? AND id_linea = ? AND is_verificado = 1', [date, time, id_caliper, id_line]);
                } else {
                    res.status(404).json({ text: 'error en datos de búsqueda de cajas' });
                }
            } else if (option == '2') {
                if (date && time && id_caliper) {
                    //option 2, se utiliza cuando la duración de un turno se extiende de un día a otro
                    console.log("option 2");
                    //let dateToday = this.fecha().substring(0,10);
                    productionLine = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado >= ? AND id_calibrador = ? AND id_linea = ? AND is_verificado = 1', [date, time, id_caliper, id_line]);
                    productionLineAux = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado >= ? AND id_calibrador = ? AND id_linea = ? AND is_verificado = 1', [fecha_actual, '00:00:00', id_caliper, id_line]);
                    console.log(productionLine[0].total);
                    console.log(productionLineAux[0].total);
                    productionLine[0].total = productionLine[0].total + productionLineAux[0].total;
                } else {
                    res.status(404).json({ text: 'error en datos de búsqueda de cajas' });
                }
            }

            if (productionLine.length > 0) {
                //productionLine[0].nombre_linea = name_line;
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

            res.status(404).json({ text: 'No se pudo realizar la búsqueda' });
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

    public async countBoxBycaliper2(req: Request, res: Response) {
        try {
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
            searchBox = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada WHERE id_calibrador = ? AND id_apertura_cierre_de_turno = ? AND is_verificado = 1', [id_caliper, id_turno]);

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
            const { id_caliper, id_turno, fecha_apertura, hora_apertura } = req.params;
            console.log(id_caliper);
            console.log(id_turno);
            console.log(fecha_apertura);
            console.log(hora_apertura);

            console.log("getAverageforMinute2()");
        
            let searchBox: any;

            //crear variable dateApertura desde la fecha y la hora de apertura del turno para ello se pasa la fecha y la hora en formato ISO UTC
            var dateApertura = new Date(fecha_apertura + "T" + hora_apertura + "Z");
            dateApertura = new Date(fecha_apertura+ "T"+ hora_apertura);
            console.log("date apertura: "+dateApertura);

            //creo variable date que corresponde a la fecha actual
            var date = (new Date());
            // Se calcula la cantidad de minutos para realizar el promedio 
            var tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos = (date.getTime() - dateApertura.getTime()) / 60000;
            console.log("tiempo transcurrido desde que se inicia el turno : "+tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos);

            //se buscan todos los registros (borré validado=1) para que llegue todo al fronted despues se fultra en el front. fecha_sellado_time es la clave para buscar cuando se pasa de un dia a otro.
            searchBox = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada WHERE id_calibrador = ? AND id_apertura_cierre_de_turno = ? AND is_verificado = 1', [id_caliper, id_turno]);

            if (searchBox.length > 0) {
                console.log("total de cajas encontradas : " + searchBox[0].total);
                //se divide el total de cajas encontradas por la cantidas de minutos transcurridos en el turno.  
                searchBox[0].total = Math.round(searchBox[0].total / tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos);

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
            const { id_caliper, id_turno, fecha_apertura, hora_apertura } = req.params;
            console.log(id_caliper);
            console.log(id_turno);
            console.log(fecha_apertura);
            console.log(hora_apertura);

            let searchBox: any;
            let MinutosDiv = 60;

            //crear variable dateApertura desde la fecha y la hora de apertura del turno para ello se pasa la fecha y la hora en formato ISO UTC
            var dateApertura = new Date(fecha_apertura + "T" + hora_apertura);
            console.log("date apertura: "+dateApertura);
         

            //creo variable date que corresponde a la fecha actual
            var date = (new Date());

            //se calcula la cantidad de minutos previamente para saber si el turno comenzo hace menos de una hora y asi no restar una hora a la consulta.
            var tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos = (date.getTime() - dateApertura.getTime()) / 60000;
            console.log("tiempo transcurrido desde que se inicia el turno : "+tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos);
          
            if (tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos < 60) {
                MinutosDiv = tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos;
            }

            //restar una hora a la hora actual, se obtiene un valor númerico con el que se puede hacer la comparación
            var tiempoMenosUnaHora: number = (date.getTime() - (60000 * 60));
            //var tiempoMenosUnaHora: number = date.getHours() - 1;
            console.log("hora actual menos una hora  : "+tiempoMenosUnaHora);    

            //se buscan todos los registros (borré validado=1) para que llegue todo al fronted despues se fultra en el front. fecha_sellado_time es la clave para buscar cuando se pasa de un dia a otro.
            searchBox = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada WHERE id_calibrador = ? AND id_apertura_cierre_de_turno = ? AND fecha_validacion_time >= ?', [id_caliper, id_turno, tiempoMenosUnaHora]);

            if (searchBox.length > 0) {
                console.log("total de cajas encontradas : " + searchBox[0].total);
                //se divide el total de cajas encontradas por la cantidas de minutos de la última hora (60) o los minutos transcurridos en el turno en la primera hora depúes de ser iniciado.  
                searchBox[0].total = Math.round(searchBox[0].total / MinutosDiv);

                return res.status(200).json(searchBox);

            } else {
                res.status(404).json({ text: 'Sin registros para esta búsqueda' });
            }

        } catch {
            res.status(404).json({ text: 'No se pudo obtener cajas' });
        }

    }

    /*public async searchAverageLastHourforMinute2(req: Request, res: Response) {
        try {
            const { id_caliper, id_turno, fecha_apertura, hora_apertura } = req.params;
            console.log(id_caliper);
            console.log(id_turno);
            console.log(fecha_apertura);
            console.log(hora_apertura);

            let searchBox: any;
            let MinutosDiv = 60;

            //crear variable dateApertura desde la fecha y la hora de apertura del turno para ello se pasa la fecha y la hora en formato ISO UTC
            var dateApertura = new Date(fecha_apertura + "T" + hora_apertura + "Z");
            console.log("date apertura: "+dateApertura);
         

            //creo variable date que corresponde a la fecha actual
            var date = (new Date());

            //se calcula la cantidad de minutos previamente para saber si el turno comenzo hace menos de una hora y asi no restar una hora a la consulta.
            var tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos = (date.getTime() - dateApertura.getTime()) / 60000;
            console.log("tiempo transcurrido desde que se inicia el turno : "+tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos);
          
            if (tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos < 60) {
                MinutosDiv = tiempoTranscurridoDesdeQueSeIniciaTurnoEnMinutos;
            }

            //restar una hora a la hora actual, se obtiene un valor númerico con el que se puede hacer la comparación
            var tiempoMenosUnaHora: number = (date.getTime() - (60000 * 60));
            console.log("hora actual menos una hora  : "+tiempoMenosUnaHora);    

            //se buscan todos los registros (borré validado=1) para que llegue todo al fronted despues se fultra en el front. fecha_sellado_time es la clave para buscar cuando se pasa de un dia a otro.
            searchBox = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada WHERE id_calibrador = ? AND id_apertura_cierre_de_turno = ? AND fecha_sellado_time >= ?', [id_caliper, id_turno, tiempoMenosUnaHora]);

            if (searchBox.length > 0) {
                console.log("total de cajas encontradas : " + searchBox[0].total);
                //se divide el total de cajas encontradas por la cantidas de minutos de la última hora (60) o los minutos transcurridos en el turno en la primera hora depúes de ser iniciado.  
                searchBox[0].total = Math.round(searchBox[0].total / MinutosDiv);

                return res.status(200).json(searchBox);

            } else {
                res.status(404).json({ text: 'Sin registros para esta búsqueda' });
            }

        } catch {
            res.status(404).json({ text: 'No se pudo obtener cajas' });
        }

    }*/

    //Este método cuenta todos los registros de cajas selladas dentro del turno por minuto en un calibrador en específico.
    //Recive los parametros date, que es la fecha del dia en que se inicio el turno, time es la hora en que se inicio el turno, 
    //id_caliper es el id del calibrador que se desea saber la cantidad de cajas que se han sellado en el y option toma los valores 
    //de 1 y 2, en donde 1 representa un turno que esta dentro del mismo día y 2 da a conocer si el turno comenzo el dia anterior.

    public async searchAverageforMinute(req: Request, res: Response) {
        //En esta sección se captura la hora actual del sistema. Se útiliza para saber cuantos minutos 
        //han transcurrido desde que comenzo el turno hasta el momento de la consulta.
        console.log("searchAverageforMinute")
        var hoy = new Date();
        let hora = hoy.getHours() + "";
        console.log("hora.length: " + hora.length);
        let minuto = hoy.getMinutes() + "";
        console.log("minuto.length: " + minuto.length);
        let segundo = hoy.getSeconds() + "";
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
        /******************************************************************************************************/

        //Esta sección realiza la captura de la fecha actual del sistema, que se utiliza para realizar la consulta en el 
        //caso de la option 2, para consultar la cantidad de caja en dos días.
        var fecha = new Date();
        let year = fecha.getFullYear() + "";
        console.log("hora.length: " + year.length);
        let month = fecha.getMonth() + "";
        console.log("minuto.length: " + month.length);
        let day = fecha.getDate() + "";
        console.log("segundo.length: " + day.length);
        if (month.length == 1) {
            month = "0" + month;
        }
        if (day.length == 1) {
            day = "0" + day;
        }

        let fechaActual = year + "-" + month + "-" + day;
        console.log("fechaActual: " + fechaActual);

        /**********************************************************************************************************/
        console.log("antes del try");
        try {
            const { date, time, id_caliper, option, fecha_actual } = req.params;
            console.log("dentro del try option : " + option);
            let searchBox: any;
            let searchBoxAux: any;
            let totalMinutos = 0;
            let totalMinutosAux = 0;
            console.log(date);
            console.log(time);
            console.log(id_caliper);
            console.log(option);
            // option 1, para contar las cajas del turno que se encuentra en un mismo día
            if (option == '1') {
                console.log("pase if ");

                console.log("promedio minuto if consulta");

                // En esta sección se calcula la cantidad de minutos transcurridos desde el inicio del turno. 
                // hasta la hora actual al momento de realizar la consulta a la base de datos.
                var hora1 = time.split(":");
                var hora2 = horaActual.split(":");
                var t1 = new Date();
                var t2 = new Date();
                t1.setHours(parseInt(hora1[0]), parseInt(hora1[1]), parseInt(hora1[2]));
                t2.setHours(parseInt(hora2[0]), parseInt(hora2[1]), parseInt(hora2[2]));


                if ((t2.getHours() - t1.getHours()) == 0) {
                    totalMinutos = t2.getMinutes() - t1.getMinutes();
                } else {
                    totalMinutos = (t2.getHours() - t1.getHours()) * 60;
                    if ((t2.getMinutes() - t1.getMinutes()) < 0) {
                        totalMinutos = (totalMinutos - (t2.getMinutes() - t1.getMinutes()) * -1);
                    } else {
                        totalMinutos = totalMinutos + (t2.getMinutes() - t1.getMinutes());
                    }
                }
                console.log("totalMinutos: " + totalMinutos);
                /**********************************************************************************************************/
                //Consulta a la base de datos.
                searchBox = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado >= ? AND id_calibrador = ? AND is_verificado = 1', [date, time, id_caliper]);
                console.log("respuesta: " + searchBox[0].total);

                //console.log("totalMinutos: " + totalMinutos);
                //option 2, se utiliza cuando la duración de un turno se extiende de un día a otro  
            } else if (option == '2') {
                if (date && time && id_caliper) {
                    console.log("option 2");
                    // En esta sección se calcula la cantidad de minutos transcurridos desde el inicio del turno. 
                    // hasta la 23:59:59 del primer día
                    var hora1 = time.split(":");
                    var hora2 = '23:59:59'.split(":");
                    var t1 = new Date();
                    var t2 = new Date();
                    t1.setHours(parseInt(hora1[0]), parseInt(hora1[1]), parseInt(hora1[2]));
                    t2.setHours(parseInt(hora2[0]), parseInt(hora2[1]), parseInt(hora2[2]));


                    if ((t2.getHours() - t1.getHours()) == 0) {
                        totalMinutosAux = t2.getMinutes() - t1.getMinutes();
                    } else {
                        totalMinutosAux = (t2.getHours() - t1.getHours()) * 60;
                        if ((t2.getMinutes() - t1.getMinutes()) < 0) {
                            totalMinutosAux = (totalMinutosAux - (t2.getMinutes() - t1.getMinutes()) * -1);
                        } else {
                            totalMinutosAux = totalMinutosAux + (t2.getMinutes() - t1.getMinutes());
                        }
                    }

                    /**********************************************************************************************************/
                    // En esta sección se calcula la cantidad de minutos transcurridos desde el inicio del segunto dia. 
                    // hasta la hora actual al momento de realizar la consulta a la base de datos.
                    var hora1 = '00:00:00'.split(":");
                    var hora2 = horaActual.split(":");
                    var t1 = new Date();
                    var t2 = new Date();
                    t1.setHours(parseInt(hora1[0]), parseInt(hora1[1]), parseInt(hora1[2]));
                    t2.setHours(parseInt(hora2[0]), parseInt(hora2[1]), parseInt(hora2[2]));


                    if ((t2.getHours() - t1.getHours()) == 0) {
                        totalMinutos = t2.getMinutes() - t1.getMinutes();
                    } else {
                        totalMinutos = (t2.getHours() - t1.getHours()) * 60;
                        if ((t2.getMinutes() - t1.getMinutes()) < 0) {
                            totalMinutos = (totalMinutos - (t2.getMinutes() - t1.getMinutes()) * -1);
                        } else {
                            totalMinutos = totalMinutos + (t2.getMinutes() - t1.getMinutes());
                        }
                    }

                    totalMinutos = totalMinutosAux + totalMinutos;

                    /**********************************************************************************************************/
                    searchBox = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado >= ? AND id_calibrador = ? AND is_verificado = 1', [date, time, id_caliper]);
                    searchBoxAux = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado >= ? AND id_calibrador = ? AND is_verificado = 1', [fecha_actual, '00:00:00', id_caliper]);
                    console.log('total cajas');
                    searchBox[0].total = searchBox[0].total + searchBoxAux[0].total;
                } else {
                    res.status(404).json({ text: 'error en datos de búsqueda de cajas' });
                }
            }

            if (searchBox.length > 0) {
                console.log("entre al if del length");
                console.log(searchBox[0].total);
                console.log("Total de minutos transcurridos :" + totalMinutos);
                searchBox[0].total = Math.round(searchBox[0].total / totalMinutos);
                return res.status(200).json(searchBox);

            } else {

                res.status(404).json({ text: 'Sin registros para esta búsqueda' });
            }


        } catch {
            res.status(404).json({ text: 'No se pudo obtener cajas' });
        }
    }

    //Este método cuenta todos los registros de cajas selladas dentro del turno en un calibrador en específico
    //Recive los parametros date, que es la fecha del dia en que se inicio el turno, time es la hora en que se inicio el turno, 
    //id_caliper es el id del calibrador que se desea saber la cantidad de cajas que se han sellado en el y option toma los valores 
    //de 1 y 2, en donde 1 representa un turno que esta dentro del mismo día y 2 da a conocer si el turno comenzo el dia anterior.

    /*public async countBoxBycaliper(req: Request, res: Response) {
        try {
            const { date, time, id_caliper, option, fecha_actual } = req.params;
            console.log("CountBoxByCaliper: " + date + time + id_caliper + option + fecha_actual);
            let searchBox: any;
            let searchBoxAux: any;
            // option 1, para contar las cajas del turno que se encuentra en un mismo día
            if (option == '1') {
                if (date && time && id_caliper) {
                    console.log("promedio turno");
                    searchBox = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado >= ? AND id_calibrador = ? AND is_verificado = 1', [date, time, id_caliper]);

                } else {
                    res.status(404).json({ text: 'error en datos de búsqueda de cajas' });
                }
                //option 2, se utiliza cuando la duración de un turno se extiende de un día a otro
            } else if (option == '2') {
                if (date && time && id_caliper) {

                    //Esta sección realiza la captura de la fecha actual del sistema, que se utiliza para realizar la consulta en el 
                    //caso de la option 2, para consultar la cantidad de caja en dos días.
                    var fecha = new Date();
                    let year = fecha.getFullYear() + "";
                    console.log("hora.length: " + year.length);
                    let month = fecha.getMonth() + "";
                    console.log("minuto.length: " + month.length);
                    let day = fecha.getDate() + "";
                    console.log("segundo.length: " + day.length);
                    if (month.length == 1) {
                        month = "0" + month;
                    }
                    if (day.length == 1) {
                        day = "0" + day;
                    }

                    let fechaActual = year + "-" + month + "-" + day;
                    console.log("fechaActual: " + fechaActual);
                    /**********************************************************************************************************/
                    /*console.log("option 2");
                    console.log(fecha_actual);
                    console.log(id_caliper);
                    //let dateToday = this.fecha().substring(0,10);
                    searchBox = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado >= ? AND id_calibrador = ? AND is_verificado = 1 ', [date, time, id_caliper]);
                    searchBoxAux = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado >= ? AND id_calibrador = ? AND is_verificado = 1', [fecha_actual, '00:00:00', id_caliper]);
                    console.log(searchBox[0].total);
                    console.log(searchBoxAux[0].total);
                    searchBox[0].total = searchBox[0].total + searchBoxAux[0].total;
                } else {
                    res.status(404).json({ text: 'error en datos de búsqueda de cajas' });
                }
            }

            if (searchBox.length > 0) {

                return res.status(200).json(searchBox);

            } else {

                res.status(404).json({ text: 'Sin registros para esta búsqueda' });
            }
        } catch {
            res.status(404).json({ text: 'No se pudo realizar la búsqueda' });
        }

    }*/

    

    //Este método cuenta todos los registros de cajas selladas dentro del turno por minuto en la ultima hora en un calibrador en específico.
    //Recive los parametros date, que es la fecha del dia en que se inicio el turno, time es la hora en que se inicio el turno, 
    //id_caliper es el id del calibrador que se desea saber la cantidad de cajas que se han sellado en el y option toma los valores 
    //de 1 y 2, en donde 1 representa un turno que esta dentro del mismo día y 2 da a conocer si el turno comenzo el dia anterior.

    public async searchAverageLastHourforMinute(req: Request, res: Response) {
        try {
            const { date, time, id_caliper, option, fecha_actual } = req.params;
            let searchBox: any;
            let searchBoxAux: any;
            let hourSearch: any;
            let MinutosDiv = 60;
            let totalMinutosAux = 0;
            //En esta sección se captura la hora actual del sistema. Se útiliza para saber cuantos minutos 
            //han transcurrido desde que comenzo el turno hasta el momento de la consulta.
            var fecha = new Date();
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


            //se calcula la cantidad de minutos previamente para saber si el turno comenzo hace menos de una hora y asi no restar una hora a la consulta.
            var hora1 = time.split(":");
            var hora2 = horaActual.split(":");
            var t1 = new Date();
            var t2 = new Date();
            t1.setHours(parseInt(hora1[0]), parseInt(hora1[1]), parseInt(hora1[2]));
            t2.setHours(parseInt(hora2[0]), parseInt(hora2[1]), parseInt(hora2[2]));


            if ((t2.getHours() - t1.getHours()) == 0) {
                totalMinutosAux = t2.getMinutes() - t1.getMinutes();
            } else {
                totalMinutosAux = (t2.getHours() - t1.getHours()) * 60;
                if ((t2.getMinutes() - t1.getMinutes()) < 0) {
                    totalMinutosAux = (totalMinutosAux - (t2.getMinutes() - t1.getMinutes()) * -1);
                } else {
                    totalMinutosAux = totalMinutosAux + (t2.getMinutes() - t1.getMinutes());
                }
            }
            /************************************************************************************************************************/

            //Esta sección realiza la captura de la fecha actual del sistema, que se utiliza para realizar la consulta en el 
            //caso de la option 2, para consultar la cantidad de caja en dos días.
            var fecha = new Date();
            console.log("fecha date : " + fecha);
            let year = fecha.getFullYear() + "";
            console.log("hora.length: " + year.length);
            let month = fecha.getMonth() + "";
            console.log("minuto.length: " + month.length);
            let day = fecha.getDate() + "";
            console.log("segundo.length: " + day.length);
            if (month.length == 1) {
                month = "0" + month;
            }
            if (day.length == 1) {
                day = "0" + day;
            }

            let fechaActual = year + "-" + month + "-" + day;
            console.log("fechaActual: " + fechaActual);
            /*****************************************************************************************************************/
            // option 1, para contar las cajas del turno que se encuentra en un mismo día
            if (option == '1') {
                console.log("opcion 1");
                if (date && time && id_caliper) {

                    if (totalMinutosAux < 60) {
                        // se calcula los minutos para realizar la division de cajas por minuto. 
                        var hora1 = time.split(":");
                        var hora2 = horaActual.split(":");
                        var t1 = new Date();
                        var t2 = new Date();
                        var totalMinutos;
                        t1.setHours(parseInt(hora1[0]), parseInt(hora1[1]), parseInt(hora1[2]));
                        t2.setHours(parseInt(hora2[0]), parseInt(hora2[1]), parseInt(hora2[2]));


                        if ((t2.getHours() - t1.getHours()) == 0) {
                            totalMinutos = t2.getMinutes() - t1.getMinutes();
                        } else {
                            totalMinutos = (t2.getHours() - t1.getHours()) * 60;
                            if ((t2.getMinutes() - t1.getMinutes()) < 0) {
                                totalMinutos = (totalMinutos - (t2.getMinutes() - t1.getMinutes()) * -1);
                            } else {
                                totalMinutos = totalMinutos + (t2.getMinutes() - t1.getMinutes());
                            }
                        }
                        MinutosDiv = totalMinutos;

                        searchBox = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado >= ? AND id_calibrador = ? AND is_verificado = 1', [date, time, id_caliper]);

                    } else {

                        //En esta sección se resta  una hora a la hora actual para realizar la consulta.
                        var t1 = new Date();
                        let horaSplit = horaActual.split(":");
                        t1.setHours(parseInt(horaSplit[0]), parseInt(horaSplit[1]), parseInt(horaSplit[2]));
                        t1.setHours(t1.getHours() - 1);

                        if (t1.getHours() < 10) {
                            hourSearch = "0" + t1.getHours() + ":";
                        } else {
                            hourSearch = t1.getHours() + ":";
                        }
                        if (t1.getMinutes() < 10) {
                            hourSearch = hourSearch + "0" + t1.getMinutes() + ":";
                        } else {
                            hourSearch = hourSearch + t1.getMinutes() + ":";
                        }
                        if (t1.getSeconds() < 10) {
                            hourSearch = hourSearch + "0" + t1.getSeconds();
                        } else {
                            hourSearch = hourSearch + t1.getSeconds();
                        }
                        console.log("la hora actual es : " + horaActual);
                        console.log("La hora a buscar es :" + hourSearch);
                        /*********************************************************************************/
                        searchBox = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ?  AND hora_sellado >= ? AND id_calibrador = ? AND is_verificado = 1', [date, hourSearch, id_caliper]);

                    }
                } else {
                    res.status(404).json({ text: 'error en datos de búsqueda de cajas' });
                }
                //option dos, que indica que la duración del turno se extiende de un día a otro. 
            } else if (option == '2') {
                if (date && time && id_caliper) {
                    console.log("opcion 2 ");
                    // si son las 00 horas con xx minutos, se resta una hora, por lo que serian las 11 horas con xx minutos del dia anterior
                    if (hora == '00') {
                        console.log("if de 00");
                        let horaMenosUna = "11" + ":" + minuto + ":" + segundo;
                        searchBox = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado => ? AND hora_sellado <= ? AND id_calibrador = ? AND is_verificado = 1', [date, horaMenosUna, '23:59:59', id_caliper]);
                        searchBoxAux = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado >= ?  AND id_calibrador = ? AND is_verificado = 1', [fecha_actual, '00:00:00', id_caliper]);
                        searchBox[0].total = searchBox[0].total + searchBoxAux[0].total;
                        // sino, sinifica que son mas de las 00 horas y se realiza la resta normal de una hora a la hora actual del dia actual del turno. 
                    } else {
                        //se resta  una hora a la hora actual.
                        console.log("en el else");
                        var t1 = new Date();
                        let horaSplit = horaActual.split(":");
                        t1.setHours(parseInt(horaSplit[0]), parseInt(horaSplit[1]), parseInt(horaSplit[2]));
                        t1.setHours(t1.getHours() - 1);

                        if (t1.getHours() < 10) {
                            hourSearch = "0" + t1.getHours() + ":";
                        } else {
                            hourSearch = t1.getHours() + ":";
                        }
                        if (t1.getMinutes() < 10) {
                            hourSearch = hourSearch + "0" + t1.getMinutes() + ":";
                        } else {
                            hourSearch = hourSearch + t1.getMinutes() + ":";
                        }
                        if (t1.getSeconds() < 10) {
                            hourSearch = hourSearch + "0" + t1.getSeconds();
                        } else {
                            hourSearch = hourSearch + t1.getSeconds();
                        }
                        console.log("la hora actual es : " + horaActual);
                        console.log("La hora a buscar es :" + hourSearch);
                        /***************************************************************************************/
                        searchBox = await pool.query('SELECT COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ?  AND hora_sellado >= ? AND id_calibrador = ? AND is_verificado = 1', [fecha_actual, hourSearch, id_caliper]);

                    }
                } else {
                    res.status(404).json({ text: 'error en datos de búsqueda de cajas' });
                }
            }

            if (searchBox.length > 0) {
                console.log("total de cajas encontradas : " + searchBox[0].total);
                //se divide el total de cajas encontradas por la cantidas de minutos de la última hora (60) o los minutos transcurridos en el turno en la primera hora depúes de ser iniciado.  
                searchBox[0].total = Math.round(searchBox[0].total / MinutosDiv);

                return res.status(200).json(searchBox);

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
                    productionLine = await pool.query('SELECT id_linea, nombre_linea,COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado >= ? AND hora_sellado <= ? AND id_calibrador = ? AND id_linea = ? AND is_verificado = 1', [date, hourSearch, '23:59:59', id_caliper, id_line]);
                    productionLineAux = await pool.query('SELECT id_linea, nombre_linea,COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado >= ? AND hora_sellado <= ? AND id_calibrador = ? AND id_linea = ? AND is_verificado = 1', [fecha_actual, '00:00:00', horaActual, id_caliper, id_line]);
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
                    productionLine = await pool.query('SELECT id_linea, nombre_linea,COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado >= ? AND hora_sellado <= ? AND id_calibrador = ? AND id_linea = ? AND is_verificado = 1', [fecha_actual, hourSearch, horaActual, id_caliper, id_line]);
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
                    productionLine = await pool.query('SELECT id_linea, nombre_linea,COUNT(DISTINCT(codigo_de_barra)) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado >= ? AND hora_sellado <= ? AND id_calibrador = ? AND id_linea = ? AND is_verificado = 1', [fecha_actual, hourSearch, horaActual, id_caliper, id_line]);
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