import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import authRoutes from './auth/auth.routes';
import indexRoutes from './routes/indexRoutes';
import lineaRoutes from './routes/lineaRoutes';
import calibradorRoutes from './routes/calibradorRoutes';
import lectorRoutes from './routes/lectorRoutes';
import rfidRoutes from './routes/rfidRoutes';
import administradorRoutes from './routes/administradorRoutes';
import usuarioRoutes from './routes/usuarioRoutes';
import turnoRouter from './routes/turnoRouter';
import usuarioEnLineaRoutes from './routes/usuarioenlineaRoutes';
import registroRoutes from './routes/registroRoutes';
import cajaSelladaRoutes from './routes/cajaSelladaRoutes';
import cajaRoutes from './routes/cajaRoutes';
import produccionColaboradorRoute from './routes/produccionColaboradorRoutes';
import produccionPorCalibradorRoute from './routes/produccionPorCalibradorRoutes';
import produccionPorLineaRoute from './routes/produccionPorLineaRoutes';
import configuracionRoutes from './routes/configuracionRoutes';
import userAdminRoutes from './routes/userAdmin.Routes';
import monitoreoRoutes from './routes/monitoreoRoutes';
import monitoreoCalibradoresRoutes from './routes/monitoreoCalibradoresRoutes';
import lectorValidadorRoutes from './routes/lectorValidadorRoutes';
import registroDevRoutes from './routes/registroDevRoutes';
import registroProduccionRoutes from './routes/registroProduccionRoutes';
import codigoUnitecRoutes from './routes/codigoUnitecRoutes';
import monitoreoUsuarioEnLineaRoutes from './routes/monitoreoUsuarioEnLineaRoutes';
import rfidSalidaRoutes from './routes/rfidSalidaRoutes';
import monitoreoSistemaRoutes from './routes/monitoreoSistemaRoutes';
import lectorEnLineaRoutes from './routes/lectorEnLineaRoutes';
import rfidEnLineaRoutes from './routes/rfidEnLineaRoutes';
import rfidRegistroColaboradorRoutes from './routes/rfidRegistroColaboradorRoutes';


//
class Server{
    public app:Application;
    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }

    config():void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }

    routes():void{
        this.app.use(indexRoutes);
        this.app.use(authRoutes);
        this.app.use('/api',lineaRoutes);
        this.app.use('/api',lectorRoutes);
        this.app.use('/api',calibradorRoutes);
        this.app.use('/api',rfidRoutes);
        this.app.use('/api',administradorRoutes);
        this.app.use('/api',usuarioRoutes);
        this.app.use('/api',turnoRouter);
        this.app.use('/api',usuarioEnLineaRoutes);
        this.app.use('/api',cajaSelladaRoutes);
        this.app.use('/api',registroRoutes);
        this.app.use('/api',cajaRoutes);
        this.app.use('/api',produccionColaboradorRoute);
        this.app.use('/api',produccionPorCalibradorRoute);
        this.app.use('/api',produccionPorLineaRoute);
        this.app.use('/api',configuracionRoutes);
        this.app.use('/api',userAdminRoutes);
        this.app.use('/api',monitoreoRoutes);
        this.app.use('/api',monitoreoCalibradoresRoutes);
        this.app.use('/api',lectorValidadorRoutes);
        this.app.use('/api',registroDevRoutes);
        this.app.use('/api',registroProduccionRoutes);
        this.app.use('/api',codigoUnitecRoutes);
        this.app.use('/api',monitoreoUsuarioEnLineaRoutes);
        this.app.use('/api',rfidSalidaRoutes);
        this.app.use('/api',monitoreoSistemaRoutes);
        this.app.use('/api',lectorEnLineaRoutes);
        this.app.use('/api',rfidEnLineaRoutes);
        this.app.use('/api',rfidRegistroColaboradorRoutes);
    }

    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('Server on port',this.app.get('port'));
        });
    }
}

const server=new Server();
server.start();