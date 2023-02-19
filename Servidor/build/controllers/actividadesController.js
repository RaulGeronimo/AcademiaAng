"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ActividadController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const actividad = yield database_1.default.query('SELECT Actividades.codigo, Actividades.Nombre AS nombre, Instructor.Nombre AS rfcInstructor, Actividades.descripcion, Actividades.imagen FROM Actividades LEFT JOIN Instructor ON Actividades.rfcInstructor = Instructor.rfc ORDER BY(Actividades.Nombre)');
            res.json(actividad);
        });
    }
    lista_instructor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const actividad = yield database_1.default.query('SELECT rfc, Nombre FROM Instructor ORDER BY Nombre');
            res.json(actividad);
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Actividades SET ?', [req.body]);
            res.json({ message: 'Se guardo una Actividad' });
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo } = req.params;
            yield database_1.default.query('UPDATE Actividades SET ? WHERE codigo = ?', [req.body, codigo]);
            res.json({ message: 'Se modifico una Actividad' });
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo } = req.params;
            yield database_1.default.query('DELETE FROM Actividades WHERE codigo = ?', [codigo]);
            res.json({ message: 'Se elimino una Actividad' });
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo } = req.params;
            const actividad = yield database_1.default.query('SELECT * FROM Actividades WHERE codigo = ?', [codigo]);
            if (actividad.length > 0) {
                return res.json(actividad[0]);
            }
            res.status(404).json({ message: 'No existe la Actividad' });
        });
    }
}
const actividadController = new ActividadController(); //devuelve un objeto
exports.default = actividadController; //importa la instancia
