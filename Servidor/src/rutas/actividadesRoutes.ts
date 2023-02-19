import { Router } from "express";
import actividadController from "../controllers/actividadesController";

class ActividadesRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', actividadController.lista);
        this.router.get('/', actividadController.lista_instructor);
        this.router.post('/', actividadController.crear);
        this.router.put('/:codigo', actividadController.actualizar);
        this.router.delete('/:codigo', actividadController.eliminar);
        this.router.get('/:codigo',actividadController.buscar);
    }
}

const actividadRoutes = new ActividadesRoutes();
export default actividadRoutes.router;