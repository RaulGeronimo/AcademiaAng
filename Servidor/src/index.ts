import express, { Application } from 'express';

import morgan from 'morgan';
import cors from 'cors';
//Rutas
import indexRoutes from './rutas/indexRoutes';
import actividadesRoutes from './rutas/actividadesRoutes';
import deportistaRoutes from './rutas/deportistaRoutes';
import gruposRoutes from './rutas/gruposRoutes';
import instructorRoutes from './rutas/instructorRoutes';
import grupo_actividadRoutes from './rutas/grupo_actividadRoutes';

class Server{
    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.rutas();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json()); //puede ser leidos por un json
        this.app.use(express.urlencoded({extended: false})); //para tener mejor comunicacion con archivos HTML
    }

    rutas(): void{
        this.app.use(indexRoutes);
        this.app.use('/app/actividades', actividadesRoutes);
        this.app.use('/app/deportista', deportistaRoutes);
        this.app.use('/app/grupos', gruposRoutes);
        this.app.use('/app/instructor', instructorRoutes);
        this.app.use('/app/grupoActividad', grupo_actividadRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en puerto', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();