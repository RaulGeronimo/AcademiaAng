import { Request, Response } from "express";

class IndexController{
    public index(req: Request, res: Response){
        res.json({text: 'Puedes acceder a /app/Actividades o deportista'});
    }
}

export const indexController = new IndexController();