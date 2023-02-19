"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const deportistaController_1 = __importDefault(require("../controllers/deportistaController"));
class DeportistaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', deportistaController_1.default.lista);
        this.router.post('/', deportistaController_1.default.crear);
        this.router.put('/:idDeportista', deportistaController_1.default.actualizar);
        this.router.delete('/:idDeportista', deportistaController_1.default.eliminar);
        this.router.get('/:idDeportista', deportistaController_1.default.buscar);
    }
}
const deportistaRoutes = new DeportistaRoutes();
exports.default = deportistaRoutes.router;
