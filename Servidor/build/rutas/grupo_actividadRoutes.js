"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const grupo_actividadController_1 = __importDefault(require("../controllers/grupo_actividadController"));
class GrupoActividadRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', grupo_actividadController_1.default.lista);
    }
}
const grupoActividadRoutes = new GrupoActividadRoutes();
exports.default = grupoActividadRoutes.router;
