import { query, Request, Response } from "express";
import pool from "../database";

class DeportistaController{
    public async lista(req: Request, res: Response){
        const deportista = await pool.query('SELECT * FROM Deportista');
        res.json(deportista);
    }

    public async crear(req: Request, res: Response){
        await pool.query('INSERT INTO Deportista SET ?', [req.body]);
        res.json({message: 'Se guardo un Deportista'});
    }

    public async actualizar(req: Request, res: Response){
        const { idDeportista } = req.params;
        await pool.query('UPDATE Deportista SET ? WHERE idDeportista = ?', [req.body, idDeportista]);
        res.json({message: 'Se modifico un Deportista'});
    }

    public async eliminar(req: Request, res: Response){
        const { idDeportista } = req.params;
        await pool.query('DELETE FROM Deportista WHERE idDeportista = ?', [idDeportista]);
        res.json({message: 'Se elimino un Deportista'});
    }

    public async buscar(req: Request, res: Response){
        const { idDeportista } = req.params;
        const deportista = await pool.query('SELECT * FROM Deportista WHERE idDeportista = ?', [idDeportista]);
        if(deportista.length > 0){
            return res.json(deportista[0]);
        }
        res.status(404).json({message: 'No existe el Deportista'});
    }
}

const deportistaController = new DeportistaController(); //devuelve un objeto
export default deportistaController; //importa la instancia