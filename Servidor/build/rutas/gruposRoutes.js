"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gruposController_1 = __importDefault(require("../controllers/gruposController"));
class ActividadesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', gruposController_1.default.lista);
        this.router.post('/', gruposController_1.default.crear);
        this.router.put('/:codigo', gruposController_1.default.actualizar);
        this.router.delete('/:codigo', gruposController_1.default.eliminar);
        this.router.get('/:codigo', gruposController_1.default.buscar);
    }
}
const actividadRoutes = new ActividadesRoutes();
exports.default = actividadRoutes.router;
