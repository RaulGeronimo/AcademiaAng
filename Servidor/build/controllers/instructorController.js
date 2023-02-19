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
class InstructorController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const rfc = yield database_1.default.query('SELECT rfc, nombre, apellidos, salario, CONCAT("(", LEFT(telefono, 3), ") ", MID(telefono, 4, 3), "-", MID(telefono, 7, 4)) AS telefono, horarios FROM Instructor ORDER BY nombre');
            res.json(rfc);
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Instructor SET ?', [req.body]);
            res.json({ message: 'Se guardo un Instructor' });
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { rfc } = req.params;
            yield database_1.default.query('UPDATE Instructor SET ? WHERE rfc = ?', [req.body, rfc]);
            res.json({ message: 'Se modifico un Instructor' });
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { rfc } = req.params;
            yield database_1.default.query('DELETE FROM Instructor WHERE rfc = ?', [rfc]);
            res.json({ message: 'Se elimino una Instructor' });
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { rfc } = req.params;
            const deportista = yield database_1.default.query('SELECT * FROM Instructor WHERE rfc = ?', [rfc]);
            if (deportista.length > 0) {
                return res.json(deportista[0]);
            }
            res.status(404).json({ message: 'No existe el Instructor' });
        });
    }
}
const instructorController = new InstructorController(); //devuelve un objeto
exports.default = instructorController; //importa la instancia
