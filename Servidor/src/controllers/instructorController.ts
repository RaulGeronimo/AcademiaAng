import { query, Request, Response } from "express";
import pool from "../database" 

class InstructorController{
    public async lista(req: Request, res: Response){
        const rfc = await pool.query('SELECT rfc, nombre, apellidos, salario, CONCAT("(", LEFT(telefono, 3), ") ", MID(telefono, 4, 3), "-", MID(telefono, 7, 4)) AS telefono, horarios FROM Instructor ORDER BY nombre');
        res.json(rfc);
    }

    public async crear(req: Request, res: Response){
        await pool.query('INSERT INTO Instructor SET ?', [req.body]);
        res.json({message: 'Se guardo un Instructor'});
    }

    public async actualizar(req: Request, res: Response){
        const { rfc } = req.params;
        await pool.query('UPDATE Instructor SET ? WHERE rfc = ?', [req.body, rfc]);
        res.json({message: 'Se modifico un Instructor'});
    }

    public async eliminar(req: Request, res: Response){
        const { rfc } = req.params;
        await pool.query('DELETE FROM Instructor WHERE rfc = ?', [rfc]);
        res.json({message: 'Se elimino una Instructor'});
    }

    public async buscar(req: Request, res: Response){
        const { rfc } = req.params;
        const deportista = await pool.query('SELECT * FROM Instructor WHERE rfc = ?', [rfc]);
        if(deportista.length > 0){
            return res.json(deportista[0]);
        }
        res.status(404).json({message: 'No existe el Instructor'});
    }
}

const instructorController = new InstructorController(); //devuelve un objeto
export default instructorController; //importa la instancia