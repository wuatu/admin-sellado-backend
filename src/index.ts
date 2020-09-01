import express, {Application} from 'express';
import indexRoutes from './routes/indexRoutes'
import loginRoutes from './routes/loginRoutes'
import lineaRoutes from './routes/lineaRoutes'
import selladoraRoutes from './routes/selladoraRoutes'
import morgan from 'morgan';
import cors from 'cors'
import authRoutes from './auth/auth.routes'


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
        //this.app.use('/api/login',loginRoutes);
        this.app.use(authRoutes);
        this.app.use('/api',lineaRoutes);
        this.app.use('/api/selladora',selladoraRoutes);
    }

    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('Server on port',this.app.get('port'));
        });
    }
}

const server=new Server();
server.start();