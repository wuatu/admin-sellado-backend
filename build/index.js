"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = __importDefault(require("./auth/auth.routes"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const lineaRoutes_1 = __importDefault(require("./routes/lineaRoutes"));
const calibradorRoutes_1 = __importDefault(require("./routes/calibradorRoutes"));
const lectorRoutes_1 = __importDefault(require("./routes/lectorRoutes"));
const rfidRoutes_1 = __importDefault(require("./routes/rfidRoutes"));
const administradorRoutes_1 = __importDefault(require("./routes/administradorRoutes"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const turnoRouter_1 = __importDefault(require("./routes/turnoRouter"));
const usuarioenlineaRoutessi_1 = __importDefault(require("./routes/usuarioenlineaRoutessi"));
//
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use(auth_routes_1.default);
        this.app.use('/api', lineaRoutes_1.default);
        this.app.use('/api', lectorRoutes_1.default);
        this.app.use('/api', calibradorRoutes_1.default);
        this.app.use('/api', rfidRoutes_1.default);
        this.app.use('/api', administradorRoutes_1.default);
        this.app.use('/api', usuarioRoutes_1.default);
        this.app.use('/api', turnoRouter_1.default);
        this.app.use('/api', usuarioenlineaRoutessi_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
