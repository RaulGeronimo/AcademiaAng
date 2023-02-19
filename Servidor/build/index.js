"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//Rutas
const indexRoutes_1 = __importDefault(require("./rutas/indexRoutes"));
const actividadesRoutes_1 = __importDefault(require("./rutas/actividadesRoutes"));
const deportistaRoutes_1 = __importDefault(require("./rutas/deportistaRoutes"));
const gruposRoutes_1 = __importDefault(require("./rutas/gruposRoutes"));
const instructorRoutes_1 = __importDefault(require("./rutas/instructorRoutes"));
const grupo_actividadRoutes_1 = __importDefault(require("./rutas/grupo_actividadRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.rutas();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json()); //puede ser leidos por un json
        this.app.use(express_1.default.urlencoded({ extended: false })); //para tener mejor comunicacion con archivos HTML
    }
    rutas() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/app/actividades', actividadesRoutes_1.default);
        this.app.use('/app/deportista', deportistaRoutes_1.default);
        this.app.use('/app/grupos', gruposRoutes_1.default);
        this.app.use('/app/instructor', instructorRoutes_1.default);
        this.app.use('/app/grupoActividad', grupo_actividadRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
