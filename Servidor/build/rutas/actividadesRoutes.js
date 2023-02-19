"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const actividadesController_1 = __importDefault(require("../controllers/actividadesController"));
class ActividadesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', actividadesController_1.default.lista);
        this.router.get('/', actividadesController_1.default.lista_instructor);
        this.router.post('/', actividadesController_1.default.crear);
        this.router.put('/:codigo', actividadesController_1.default.actualizar);
        this.router.delete('/:codigo', actividadesController_1.default.eliminar);
        this.router.get('/:codigo', actividadesController_1.default.buscar);
    }
}
const actividadRoutes = new ActividadesRoutes();
exports.default = actividadRoutes.router;
