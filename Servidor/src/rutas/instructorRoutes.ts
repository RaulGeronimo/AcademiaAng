import { Router } from "express";
import instructorController from "../controllers/instructorController";

class InstructorRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', instructorController.lista);
        this.router.post('/', instructorController.crear);
        this.router.put('/:rfc', instructorController.actualizar);
        this.router.delete('/:rfc', instructorController.eliminar);
        this.router.get('/:rfc',instructorController.buscar);
    }
}

const instructorRoutes = new InstructorRoutes();
export default instructorRoutes.router;