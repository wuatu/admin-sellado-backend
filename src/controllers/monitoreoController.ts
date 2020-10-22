
import { Request, Response } from 'express';
import pool from '../database';
class MonitoreoController{
    //Este método obiene el último turno registrado en la base de datos, el cual es el turno que se mantiene activo
    public async getLastTurno(req: Request, res: Response){
        try{
            let lastTurno: any;
            lastTurno = await pool.query('SELECT * FROM apertura_cierre_de_turno ORDER by ID DESC LIMIT 1;');
            if(lastTurno.length > 0){
                return res.status(200).json(lastTurno);
            }else{
                res.status(404).json({ text: 'Sin registros para esta búsqueda' });
            }
        }catch{
            res.status(404).json({ text: 'No se pudo realizar la búsqueda' });
        }
        
    }
    
    //Este método cuenta todos los registros de cajas selladas dentro del turno en un calibrador en específico
    //Recive los parametros date, que es la fecha del dia en que se inicio el turno, time es la hora en que se inicio el turno, 
    //id_caliper es el id del calibrador que se desea saber la cantidad de cajas que se han sellado en el y option toma los valores 
    //de 1 y 2, en donde 1 representa un turno que esta dentro del mismo día y 2 da a conocer si el turno comenzo el dia anterior.
    public async countBoxBycaliper(req: Request, res: Response) {
        try {
            const { date, time, id_caliper, option } = req.params;            
            
             let searchBox: any;
             let searchBoxAux: any;
            // option 1, para contar las cajas del turno que se encuentra en un mismo día
             if(option == '1'){
                if(date && time && id_caliper)  
                {
                    console.log("promedio turno");
                    searchBox = await pool.query('SELECT COUNT(registro_diario_caja_sellada.id) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado > ? AND id_calibrador = ?', [date, time , id_caliper]);
                    
                }else{
                    res.status(404).json({ text: 'error en datos de búsqueda de cajas' });
                } 
            }else if(option == '2'){
                if (date && time && id_caliper){ 
                    
                    //Esta sección realiza la captura de la fecha actual del sistema, que se utiliza para realizar la consulta en el 
                    //caso de la option 2, para consultar la cantidad de caja en dos días.
                    var fecha = new Date(); 
                    let year = fecha.getFullYear()+"";
                    console.log("hora.length: " + year.length);
                    let month = fecha.getMonth()+"";
                    console.log("minuto.length: " + month.length);
                    let day = fecha.getDate()+"";
                    console.log("segundo.length: " + day.length);
                    if(month.length==1){
                        month = "0"+month;
                    }
                    if(day.length==1){
                        day = "0"+day;
                    }
                    
                    let fechaActual = year+"-"+month+"-"+day;                
                    console.log("fechaActual: " + fechaActual);
                    /**********************************************************************************************************/
                    console.log("option 2");
                    //let dateToday = this.fecha().substring(0,10);
                    searchBox = await pool.query('SELECT COUNT(registro_diario_caja_sellada.id) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado > ? AND id_calibrador = ?', [date, time , id_caliper]);
                    searchBoxAux = await pool.query('SELECT COUNT(registro_diario_caja_sellada.id) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado > ? AND id_calibrador = ?', [fechaActual, '00:00:00' , id_caliper]);
                    searchBox[0].total = searchBox[0].total + searchBoxAux[0].total; 
                }else{
                    res.status(404).json({ text: 'error en datos de búsqueda de cajas' });
                } 
            }
            
            if (searchBox.length > 0) {

                return res.status(200).json(searchBox);
            
            } else {
                
                res.status(404).json({ text: 'Sin registros para esta búsqueda' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo realizar la búsqueda' });
        }

    }

    
    //Este método cuenta todos los registros de cajas selladas dentro del turno por minuto en un calibrador en específico.
    //Recive los parametros date, que es la fecha del dia en que se inicio el turno, time es la hora en que se inicio el turno, 
    //id_caliper es el id del calibrador que se desea saber la cantidad de cajas que se han sellado en el y option toma los valores 
    //de 1 y 2, en donde 1 representa un turno que esta dentro del mismo día y 2 da a conocer si el turno comenzo el dia anterior.
    public async searchAverageforMinute(req: Request, res: Response) {
        //En esta sección se captura la hora actual del sistema. Se útiliza para saber cuantos minutos 
        //han transcurrido desde que comenzo el turno hasta el momento de la consulta.
        var hoy = new Date(); 
        let hora = hoy.getHours()+"";
        console.log("hora.length: " + hora.length);
        let minuto = hoy.getMinutes()+"";
        console.log("minuto.length: " + minuto.length);
        let segundo = hoy.getSeconds()+"";
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
        let horaActual = hora+":"+minuto+":"+segundo;                
        console.log("horaActual: " + horaActual);
        /******************************************************************************************************/
        
        //Esta sección realiza la captura de la fecha actual del sistema, que se utiliza para realizar la consulta en el 
        //caso de la option 2, para consultar la cantidad de caja en dos días.
        var fecha = new Date(); 
        let year = fecha.getFullYear()+"";
        console.log("hora.length: " + year.length);
        let month = fecha.getMonth()+"";
        console.log("minuto.length: " + month.length);
        let day = fecha.getDate()+"";
        console.log("segundo.length: " + day.length);
        if(month.length==1){
            month = "0"+month;
        }
        if(day.length==1){
            day = "0"+day;
        }
        
        let fechaActual = year+"-"+month+"-"+day;                
        console.log("fechaActual: " + fechaActual);
        /**********************************************************************************************************/
        
        try {
            const { date, time, id_caliper, option } = req.params;            
            let searchBox: any;
            let searchBoxAux: any;
            let totalMinutos = 0;
            let totalMinutosAux = 0;
            // option 1, para contar las cajas del turno que se encuentra en un mismo día
            if(option == '1'){
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
                        
                
                if((t2.getHours()-t1.getHours()) == 0){
                    totalMinutos = t2.getMinutes()-t1.getMinutes();
                }else{
                    totalMinutos = (t2.getHours()-t1.getHours())*60;
                    if((t2.getMinutes()-t1.getMinutes())<0){
                        totalMinutos = (totalMinutos - (t2.getMinutes()-t1.getMinutes())*-1);
                    }else{
                        totalMinutos = totalMinutos + (t2.getMinutes()-t1.getMinutes());
                    }
                }
                console.log("totalMinutos: " + totalMinutos);
                /**********************************************************************************************************/
                
                //Consulta a la base de datos.
                searchBox = await pool.query('SELECT COUNT(registro_diario_caja_sellada.id) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado > ? AND id_calibrador = ?', [date, time , id_caliper]);
                console.log("respuesta: "+ searchBox[0].total);
                
                
            //option 2, se utiliza cuando la duración de un turno se extiende de un día a otro 
            }else if(option == '2'){
                if (date && time && id_caliper) 
                { 
                    console.log("option 2");
                    // En esta sección se calcula la cantidad de minutos transcurridos desde el inicio del turno. 
                    // hasta la hora actual al momento de realizar la consulta a la base de datos. Primer día
                    var hora1 = time.split(":");
                    var hora2 = '23:59:59'.split(":");
                    var t1 = new Date();
                    var t2 = new Date();
                    t1.setHours(parseInt(hora1[0]), parseInt(hora1[1]), parseInt(hora1[2]));
                    t2.setHours(parseInt(hora2[0]), parseInt(hora2[1]), parseInt(hora2[2]));
                            
                    
                    if((t2.getHours()-t1.getHours()) == 0){
                        totalMinutosAux = t2.getMinutes()-t1.getMinutes();
                    }else{
                        totalMinutosAux = (t2.getHours()-t1.getHours())*60;
                        if((t2.getMinutes()-t1.getMinutes())<0){
                            totalMinutosAux = (totalMinutosAux - (t2.getMinutes()-t1.getMinutes())*-1);
                        }else{
                            totalMinutosAux = totalMinutosAux + (t2.getMinutes()-t1.getMinutes());
                        }
                    }
                    /**********************************************************************************************************/
                    // En esta sección se calcula la cantidad de minutos transcurridos desde el inicio del turno. 
                    // hasta la hora actual al momento de realizar la consulta a la base de datos. Segundo día 
                    var hora1 = '00:00:00'.split(":");
                    var hora2 = horaActual.split(":");
                    var t1 = new Date();
                    var t2 = new Date();
                    t1.setHours(parseInt(hora1[0]), parseInt(hora1[1]), parseInt(hora1[2]));
                    t2.setHours(parseInt(hora2[0]), parseInt(hora2[1]), parseInt(hora2[2]));
                            
                    
                    if((t2.getHours()-t1.getHours()) == 0){
                        totalMinutos = t2.getMinutes()-t1.getMinutes();
                    }else{
                        totalMinutos = (t2.getHours()-t1.getHours())*60;
                        if((t2.getMinutes()-t1.getMinutes())<0){
                            totalMinutos = (totalMinutos - (t2.getMinutes()-t1.getMinutes())*-1);
                        }else{
                            totalMinutos = totalMinutos + (t2.getMinutes()-t1.getMinutes());
                        }
                    }
    
                    totalMinutos = totalMinutosAux + totalMinutos;
                    /**********************************************************************************************************/
                
                    searchBox = await pool.query('SELECT COUNT(registro_diario_caja_sellada.id) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado > ? AND id_calibrador = ?', [date, time , id_caliper]);
                    searchBoxAux = await pool.query('SELECT COUNT(registro_diario_caja_sellada.id) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado > ? AND id_calibrador = ?', [fechaActual, '00:00:00' , id_caliper]);
                    searchBox[0].total = searchBox[0].total + searchBoxAux[0].total; 
                }else{
                    res.status(404).json({ text: 'error en datos de búsqueda de cajas' });
                } 
            }
            
            if (searchBox.length > 0) {
                console.log("entre al if del length");
                console.log(searchBox[0].total);
                console.log(totalMinutos);
                searchBox[0].total = Math.round(searchBox[0].total/totalMinutos);
                return res.status(200).json(searchBox);
            
            } else {
                
                res.status(404).json({ text: 'Sin registros para esta búsqueda' });
            }
            

        } catch{
            res.status(404).json({ text: 'No se pudo obtener cajas' });
        }
    }
    
    //Este método cuenta todos los registros de cajas selladas dentro del turno por minuto en la ultima hora en un calibrador en específico.
    //Recive los parametros date, que es la fecha del dia en que se inicio el turno, time es la hora en que se inicio el turno, 
    //id_caliper es el id del calibrador que se desea saber la cantidad de cajas que se han sellado en el y option toma los valores 
    //de 1 y 2, en donde 1 representa un turno que esta dentro del mismo día y 2 da a conocer si el turno comenzo el dia anterior.
    
    public async searchAverageLastHourforMinute(req: Request, res: Response) {
        try {
            const { date, time, id_caliper, option } = req.params;            
            let searchBox: any;
            let searchBoxAux: any;
            let hourSearch:any;
            let MinutosDiv = 60;
            let totalMinutosAux = 0;

            
            //En esta sección se captura la hora actual del sistema. Se útiliza para saber cuantos minutos 
            //han transcurrido desde que comenzo el turno hasta el momento de la consulta.
            var fecha = new Date(); 
            let hora = fecha.getHours()+"";
            console.log("hora.length: " + hora.length);
            let minuto = fecha.getMinutes()+"";
            console.log("minuto.length: " + minuto.length);
            let segundo = fecha.getSeconds()+"";
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
            let horaActual = hora+":"+minuto+":"+segundo;                
            console.log("horaActual: " + horaActual);
            /************************************************************************************************************************/

            
            //se calcula la cantidad de minutos previamente para saber si el turno comenzo hace menos de una hora y asi no restar una hora a la consulta.
            var hora1 = time.split(":");
            var hora2 = horaActual.split(":");
            var t1 = new Date();
            var t2 = new Date();
            t1.setHours(parseInt(hora1[0]), parseInt(hora1[1]), parseInt(hora1[2]));
            t2.setHours(parseInt(hora2[0]), parseInt(hora2[1]), parseInt(hora2[2]));
                    
            
            if((t2.getHours()-t1.getHours()) == 0){
                totalMinutosAux = t2.getMinutes()-t1.getMinutes();
            }else{
                totalMinutosAux = (t2.getHours()-t1.getHours())*60;
                if((t2.getMinutes()-t1.getMinutes())<0){
                    totalMinutosAux = (totalMinutosAux - (t2.getMinutes()-t1.getMinutes())*-1);
                }else{
                    totalMinutosAux = totalMinutosAux + (t2.getMinutes()-t1.getMinutes());
                }
            }

            /************************************************************************************************************************/

            //Esta sección realiza la captura de la fecha actual del sistema, que se utiliza para realizar la consulta en el 
            //caso de la option 2, para consultar la cantidad de caja en dos días.
            var fecha = new Date(); 
            console.log("fecha date : " + fecha);
            let year = fecha.getFullYear()+"";
            console.log("hora.length: " + year.length);
            let month = fecha.getMonth()+"";
            console.log("minuto.length: " + month.length);
            let day = fecha.getDate()+"";
            console.log("segundo.length: " + day.length);
            if(month.length==1){
                month = "0"+month;
            }
            if(day.length==1){
                day = "0"+day;
            }
            
            let fechaActual = year+"-"+month+"-"+day;                
            console.log("fechaActual: " + fechaActual);
            /*****************************************************************************************************************/
            // option 1, para contar las cajas del turno que se encuentra en un mismo día
            if(option == '1'){
                console.log("opcion 1");
                if (date && time && id_caliper) 
                {    
                    
                    if(totalMinutosAux<60){
                        // se calcula los minutos para realizar la division de cajas por minuto. 
                        var hora1 = time.split(":");
                        var hora2 = horaActual.split(":");
                        var t1 = new Date();
                        var t2 = new Date();
                        var totalMinutos;
                        t1.setHours(parseInt(hora1[0]), parseInt(hora1[1]), parseInt(hora1[2]));
                        t2.setHours(parseInt(hora2[0]), parseInt(hora2[1]), parseInt(hora2[2]));
                                
                        
                        if((t2.getHours()-t1.getHours()) == 0){
                            totalMinutos = t2.getMinutes()-t1.getMinutes();
                        }else{
                            totalMinutos = (t2.getHours()-t1.getHours())*60;
                            if((t2.getMinutes()-t1.getMinutes())<0){
                                totalMinutos = (totalMinutos - (t2.getMinutes()-t1.getMinutes())*-1);
                            }else{
                                totalMinutos = totalMinutos + (t2.getMinutes()-t1.getMinutes());
                            }
                        }
                        MinutosDiv = totalMinutos;
                        
                        searchBox = await pool.query('SELECT COUNT(registro_diario_caja_sellada.id) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado > ? AND id_calibrador = ?', [ date, time, id_caliper]);

                    }else{
                        
                        //En esta sección se resta  una hora a la hora actual para realizar la consulta.
                        var t1 = new Date();
                        let horaSplit = horaActual.split(":");
                        t1.setHours(parseInt(horaSplit[0]), parseInt(horaSplit[1]), parseInt(horaSplit[2]));
                        t1.setHours(t1.getHours() - 1);
                        
                        if(t1.getHours()<10){
                            hourSearch = "0"+ t1.getHours()+":";
                        }else{
                            hourSearch = t1.getHours()+":";
                        }
                        if(t1.getMinutes()<10){
                            hourSearch = hourSearch + "0"+ t1.getMinutes()+":";
                        }else{
                            hourSearch = hourSearch + t1.getMinutes()+":";
                        }
                        if(t1.getSeconds()<10){
                            hourSearch = hourSearch + "0"+ t1.getSeconds();
                        }else{
                            hourSearch = hourSearch + t1.getSeconds();
                        }
                        console.log("la hora actual es : " + horaActual);
                        console.log("La hora a buscar es :" + hourSearch);
                        /*********************************************************************************/
                        searchBox = await pool.query('SELECT COUNT(registro_diario_caja_sellada.id) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ?  AND hora_sellado > ? AND id_calibrador = ?', [date, hourSearch , id_caliper]);
                        
                    }
                }else{
                    res.status(404).json({ text: 'error en datos de búsqueda de cajas' });
                }
                //option dos, que indica que la duración del turno se extiende de un día a otro. 
            }else if(option == '2'){
                if (date && time && id_caliper) 
                { 
                    console.log("opcion 2 ");
                    // si son las 00 horas con xx minutos, se resta una hora, por lo que serian las 11 horas con xx minutos del dia anterior
                    if(hora == '00' ){
                        console.log("if de 00");
                        let horaMenosUna = "11"+":"+minuto+":"+segundo;
                        searchBox = await pool.query('SELECT COUNT(registro_diario_caja_sellada.id) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado > ? AND hora_sellado < ? AND id_calibrador = ?', [date, horaMenosUna , '23:59:59', id_caliper]);
                        searchBoxAux = await pool.query('SELECT COUNT(registro_diario_caja_sellada.id) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ? AND hora_sellado > ?  AND id_calibrador = ?', [fechaActual, '00:00:00', id_caliper]);
                        searchBox[0].total = searchBox[0].total + searchBoxAux[0].total; 
                    // sino, sinifica que son mas de las 00 horas y se realiza la resta normal de una hora a la hora actual del dia actual del turno. 
                    }else{
                        //se resta  una hora a la hora actual.
                        console.log("en el else");
                        var t1 = new Date();
                        let horaSplit = horaActual.split(":");
                        t1.setHours(parseInt(horaSplit[0]), parseInt(horaSplit[1]), parseInt(horaSplit[2]));
                        t1.setHours(t1.getHours() - 1);
                        
                        if(t1.getHours()<10){
                            hourSearch = "0"+ t1.getHours()+":";
                        }else{
                            hourSearch = t1.getHours()+":";
                        }
                        if(t1.getMinutes()<10){
                            hourSearch = hourSearch + "0"+ t1.getMinutes()+":";
                        }else{
                            hourSearch = hourSearch + t1.getMinutes()+":";
                        }
                        if(t1.getSeconds()<10){
                            hourSearch = hourSearch + "0"+ t1.getSeconds();
                        }else{
                            hourSearch = hourSearch + t1.getSeconds();
                        }
                        console.log("la hora actual es : " + horaActual);
                        console.log("La hora a buscar es :" + hourSearch);
                        /***************************************************************************************/
                        searchBox = await pool.query('SELECT COUNT(registro_diario_caja_sellada.id) AS total FROM registro_diario_caja_sellada WHERE fecha_sellado = ?  AND hora_sellado > ? AND id_calibrador = ?', [fechaActual, hourSearch , id_caliper]);
                        
                    }
                }else{
                    res.status(404).json({ text: 'error en datos de búsqueda de cajas' });
                } 
            }     

            if (searchBox.length > 0) {
                console.log("total de cajas encontradas : "+ searchBox[0].total);
                //se divide el total de cajas encontradas por la cantidas de minutos de la última hora (60) o los minutos transcurridos en el turno en la primera hora depúes de ser iniciado.  
                searchBox[0].total = Math.round(searchBox[0].total/MinutosDiv);
                
                return res.status(200).json(searchBox);
            
            } else {
                
                res.status(404).json({ text: 'Sin registros para esta búsqueda' });
            }
            
            
            

        } catch{
            res.status(404).json({ text: 'No se pudo obtener cajas' });
        }
    }

     /*getMinutes(horaInicio: string, horaActual:string){
        
        var hora1 = horaInicio.split(":");
        var hora2 = horaActual.split(":");
        var t1 = new Date();
        var t2 = new Date();
        t1.setHours(parseInt(hora1[0]), parseInt(hora1[1]), parseInt(hora1[2]));
        t2.setHours(parseInt(hora2[0]), parseInt(hora2[1]), parseInt(hora2[2]));
                
        var minutos;
        if((t2.getHours()-t1.getHours()) == 0){
            minutos = t2.getMinutes()-t1.getMinutes();
        }else{
            minutos = (t2.getHours()-t1.getHours())*60;
            if((t2.getMinutes()-t1.getMinutes())<0){
                minutos = (minutos - (t2.getMinutes()-t1.getMinutes())*-1);
            }else{
                minutos = minutos + (t2.getMinutes()-t1.getMinutes());
            }
        }
            
        return minutos;
    }*/

     /*getLessOneHour(hora1:string): string{
        console.log("entre al metodo  !!!!!");
        var t1 = new Date();
  
        t1.setHours(parseInt(hora1[0]), parseInt(hora1[1]), parseInt(hora1[2]));
        
        t1.setHours(t1.getHours() - 1);
        
        var hora2 ;
        if(t1.getHours()<10){
          hora2 = "0"+t1.getHours()+":";
          if(t1.getMinutes()<10){
              hora2 = hora2 + "0" +t1.getMinutes()+":";
              if(t1.getSeconds()<10){
                hora2 = hora2 + "0" +t1.getSeconds();
              }else{
                hora2 = hora2 + t1.getSeconds();
              }
          }else{
            hora2 = hora2 + t1.getMinutes()+":";
            if(t1.getSeconds()<10){
              hora2 = hora2 + "0" +t1.getSeconds();
            }else{
              hora2 = hora2 + t1.getSeconds();
            }
          }
        }else{
          hora2 = t1.getHours()+":";
          if(t1.getMinutes()<10){
            hora2 = hora2 + "0" +t1.getMinutes()+":";
            if(t1.getSeconds()<10){
              hora2 = hora2 + "0" +t1.getSeconds();
            }else{
              hora2 = hora2 + t1.getSeconds();
            }
          }else{
            hora2 = hora2 + t1.getMinutes()+":";
            if(t1.getSeconds()<10){
              hora2 = hora2 + "0" +t1.getSeconds();
            }else{
              hora2 = hora2 + t1.getSeconds();
            }
          }
        }
        console.log("dentro del metodo la hora es : "+hora1);
        return hora1;
    }*/
    /*
    
    
    public async searchTotal(req: Request, res: Response) {
        try {
            const { id_calibrador } = req.params;           
             console.log(id_calibrador);
             let idTurnoTotal: any;
            if (id_calibrador != "0") {
                idTurnoTotal = await pool.query('select count(registro_diario_caja_sellada.id) as total from registro_diario_caja_sellada where id_calibrador = ? and id_apertura_cierre_de_turno=(SELECT MAX(id_apertura_cierre_de_turno))', [id_calibrador]);
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
             console.log(id_calibrador);
            let horasSellado: any;
            if (id_calibrador != "0") {
                horasSellado = await pool.query('select hora_sellado from registro_diario_caja_sellada where id_calibrador = ? and id_apertura_cierre_de_turno = (SELECT MAX(id_apertura_cierre_de_turno)) order by hora_sellado', [id_calibrador]);                          
            }

            
            if (horasSellado.length > 0) {

                console.log("horasSellado.lenght: " + horasSellado.length);

                console.log("horasSellado: " + horasSellado[0].hora_sellado);

                console.log("horasSellado: " + horasSellado[horasSellado.length-1].hora_sellado);

                var hora1 = (horasSellado[horasSellado.length-1].hora_sellado).split(":");
                var hora2 = (horasSellado[0].hora_sellado).split(":");
                
                let t1 = new Date();
                let t2 = new Date();
             
                t1.setHours(hora1[0]-3, hora1[1], hora1[0]);
                t2.setHours(hora2[0]-3, hora2[1], hora2[0]);
                console.log(t1);
                console.log(t2);

                //Aquí hago la resta

                let ms = t1.setHours(t1.getHours() - t2.getHours(), t1.getMinutes() - t2.getMinutes(), t1.getSeconds() - t2.getSeconds());
                console.log("resta: "+ms);

                let minutos = Math.ceil((ms % 3600000) / 60000);
                
                console.log("minutos totales en turno: " + minutos);

                console.log("promedio cajas selladas por minuto: " + Math.round(horasSellado.length/(minutos))); //miunto+1 para que tome el primer minuto
                
                return res.status(200).json(Math.round(horasSellado.length/(minutos)));        
                
            } else {
                res.status(404).json({ text: 'Sin registros de cajas' });
            }
        } catch{
            res.status(404).json({ text: 'No se pudo obtener cajas' });
        }
    }

    public async searchAverageLastHourforMinute(req: Request, res: Response) {
        try {
            const {id_calibrador } = req.params;           
             console.log(id_calibrador);
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

            if (id_calibrador != "0") {
                horasSellado = await pool.query('select hora_sellado from registro_diario_caja_sellada where id_calibrador = ? and id_apertura_cierre_de_turno = (SELECT MAX(id_apertura_cierre_de_turno)) AND hora_sellado between ? AND ? order by hora_sellado', [id_calibrador,horaInicial,horaActual]);                          
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
    }*/

    /*public fecha() {
        var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
        var localISOTime = (new Date(Date.now() - tzoffset)).toISOString();
        return localISOTime;
    }*/
}
export const monitoreoController = new MonitoreoController();