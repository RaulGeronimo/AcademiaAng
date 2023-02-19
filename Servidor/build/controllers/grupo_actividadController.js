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
class GrupoActividadController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const grupo = yield database_1.default.query('SELECT Actividades.Codigo, Actividades.Nombre, COUNT(Grupos.idDeportista) AS Cantidad_Deportistas, Actividades.imagen, Instructor.Nombre AS rfcInstructor FROM Actividades INNER JOIN Grupos ON Actividades.codigo = Grupos.idActividad INNER JOIN Instructor ON Actividades.rfcInstructor = Instructor.rfc GROUP BY(Actividades.Codigo) ORDER BY(Actividades.Nombre)');
            res.json(grupo);
        });
    }
}
const grupoActividadController = new GrupoActividadController(); //devuelve un objeto
exports.default = grupoActividadController; //importa la instancia
