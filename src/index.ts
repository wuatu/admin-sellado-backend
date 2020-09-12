import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors'
import authRoutes from './auth/auth.routes'
import indexRoutes from './routes/indexRoutes'
import lineaRoutes from './routes/lineaRoutes'
import calibradorRoutes from './routes/calibradorRoutes'
import lectorRoutes from './routes/lectorRoutes'
import rfidRoutes from './routes/rfidRoutes'
import administradorRoutes from './routes/administradorRoutes'
import usuarioRoutes from './routes/usuarioRoutes'
import turnoRouter from './routes/turnoRouter'
import usuarioEnLineaRoutes from './routes/usuarioenlineaRoutes';
import registroRoutes from './routes/registroRoutes';
import cajaSelladaRoutes from './routes/cajaSelladaRoutes';


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
    }

    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('Server on port',this.app.get('port'));
        });
    }
}

const server=new Server();
server.start();