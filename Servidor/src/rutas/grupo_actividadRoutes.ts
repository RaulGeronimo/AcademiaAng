import { Router } from "express";
import grupoActividadController from "../controllers/grupo_actividadController";

class GrupoActividadRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', grupoActividadController.lista);
    }
}

const grupoActividadRoutes = new GrupoActividadRoutes();
export default grupoActividadRoutes.router;