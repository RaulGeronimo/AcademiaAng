import { query, Request, Response } from "express";
import pool from "../database" 

class GrupoActividadController{
    public async lista(req: Request, res: Response){
        const grupo = await pool.query('SELECT Actividades.Codigo, Actividades.Nombre, COUNT(Grupos.idDeportista) AS Cantidad_Deportistas, Actividades.imagen, Instructor.Nombre AS rfcInstructor FROM Actividades INNER JOIN Grupos ON Actividades.codigo = Grupos.idActividad INNER JOIN Instructor ON Actividades.rfcInstructor = Instructor.rfc GROUP BY(Actividades.Codigo) ORDER BY(Actividades.Nombre)');
        res.json(grupo);
    }
}

const grupoActividadController = new GrupoActividadController(); //devuelve un objeto
export default grupoActividadController; //importa la instancia