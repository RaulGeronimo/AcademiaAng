import { Router } from "express";
import grupoController from "../controllers/gruposController";

class ActividadesRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', grupoController.lista);
        this.router.post('/', grupoController.crear);
        this.router.put('/:codigo', grupoController.actualizar);
        this.router.delete('/:codigo', grupoController.eliminar);
        this.router.get('/:codigo',grupoController.buscar);
    }
}

const actividadRoutes = new ActividadesRoutes();
export default actividadRoutes.router;