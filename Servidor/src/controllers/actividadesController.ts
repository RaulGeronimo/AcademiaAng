import { query, Request, Response } from "express";
import pool from "../database" 

class ActividadController{
    public async lista(req: Request, res: Response){
        const actividad = await pool.query('SELECT Actividades.codigo, Actividades.Nombre AS nombre, Instructor.Nombre AS rfcInstructor, Actividades.descripcion, Actividades.imagen FROM Actividades LEFT JOIN Instructor ON Actividades.rfcInstructor = Instructor.rfc ORDER BY(Actividades.Nombre)');
        res.json(actividad);
    }

    public async lista_instructor(req: Request, res: Response){
        const actividad = await pool.query('SELECT rfc, Nombre FROM Instructor ORDER BY Nombre');
        res.json(actividad);
    }

    public async crear(req: Request, res: Response){
        await pool.query('INSERT INTO Actividades SET ?', [req.body]);
        res.json({message: 'Se guardo una Actividad'});
    }

    public async actualizar(req: Request, res: Response){
        const { codigo } = req.params;
        await pool.query('UPDATE Actividades SET ? WHERE codigo = ?', [req.body, codigo]);
        res.json({message: 'Se modifico una Actividad'});
    }

    public async eliminar(req: Request, res: Response){
        const { codigo } = req.params;
        await pool.query('DELETE FROM Actividades WHERE codigo = ?', [codigo]);
        res.json({message: 'Se elimino una Actividad'});
    }

    public async buscar(req: Request, res: Response){
        const { codigo } = req.params;
        const actividad = await pool.query('SELECT * FROM Actividades WHERE codigo = ?', [codigo]);
        if(actividad.length > 0){
            return res.json(actividad[0]);
        }
        res.status(404).json({message: 'No existe la Actividad'});
    }
}

const actividadController = new ActividadController(); //devuelve un objeto
export default actividadController; //importa la instancia