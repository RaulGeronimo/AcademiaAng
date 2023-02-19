import { query, Request, Response } from "express";
import pool from "../database" 

class GrupoController{
    public async lista(req: Request, res: Response){
        const grupo = await pool.query('SELECT Grupos.codigo, Deportista.nombre AS Deportista, Actividades.imagen, Actividades.nombre AS Actividad, Grupos.horarios FROM Grupos INNER JOIN Deportista ON Grupos.idDeportista = Deportista.idDeportista INNER JOIN Actividades ON Grupos.idActividad = Actividades.codigo ORDER BY(Actividades.nombre)');
        res.json(grupo);
    }

    public async crear(req: Request, res: Response){
        await pool.query('INSERT INTO Grupos SET ?', [req.body]);
        res.json({message: 'Se guardo un Grupo'});
    }

    public async actualizar(req: Request, res: Response){
        const { codigo } = req.params;
        await pool.query('UPDATE Grupos SET ? WHERE codigo = ?', [req.body, codigo]);
        res.json({message: 'Se modifico un Grupo'});
    }

    public async eliminar(req: Request, res: Response){
        const { codigo } = req.params;
        await pool.query('DELETE FROM Grupos WHERE codigo = ?', [codigo]);
        res.json({message: 'Se elimino un Grupo'});
    }

    public async buscar(req: Request, res: Response){
        const { codigo } = req.params;
        const grupo = await pool.query('SELECT * FROM Grupos WHERE codigo = ?', [codigo]);
        if(grupo.length > 0){
            return res.json(grupo[0]);
        }
        res.status(404).json({message: 'No existe el Grupo'});
    }
}

const grupoController = new GrupoController(); //devuelve un objeto
export default grupoController; //importa la instancia