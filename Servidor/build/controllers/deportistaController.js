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
class DeportistaController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const deportista = yield database_1.default.query('SELECT * FROM Deportista');
            res.json(deportista);
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Deportista SET ?', [req.body]);
            res.json({ message: 'Se guardo un Deportista' });
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idDeportista } = req.params;
            yield database_1.default.query('UPDATE Deportista SET ? WHERE idDeportista = ?', [req.body, idDeportista]);
            res.json({ message: 'Se modifico un Deportista' });
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idDeportista } = req.params;
            yield database_1.default.query('DELETE FROM Deportista WHERE idDeportista = ?', [idDeportista]);
            res.json({ message: 'Se elimino un Deportista' });
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idDeportista } = req.params;
            const deportista = yield database_1.default.query('SELECT * FROM Deportista WHERE idDeportista = ?', [idDeportista]);
            if (deportista.length > 0) {
                return res.json(deportista[0]);
            }
            res.status(404).json({ message: 'No existe el Deportista' });
        });
    }
}
const deportistaController = new DeportistaController(); //devuelve un objeto
exports.default = deportistaController; //importa la instancia
