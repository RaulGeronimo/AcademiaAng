import { Router } from "express";
import deportistaController from "../controllers/deportistaController";

class DeportistaRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', deportistaController.lista);
        this.router.post('/', deportistaController.crear);
        this.router.put('/:idDeportista', deportistaController.actualizar);
        this.router.delete('/:idDeportista', deportistaController.eliminar);
        this.router.get('/:idDeportista',deportistaController.buscar);
    }
}

const deportistaRoutes = new DeportistaRoutes();
export default deportistaRoutes.router;