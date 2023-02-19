"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const instructorController_1 = __importDefault(require("../controllers/instructorController"));
class InstructorRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', instructorController_1.default.lista);
        this.router.post('/', instructorController_1.default.crear);
        this.router.put('/:rfc', instructorController_1.default.actualizar);
        this.router.delete('/:rfc', instructorController_1.default.eliminar);
        this.router.get('/:rfc', instructorController_1.default.buscar);
    }
}
const instructorRoutes = new InstructorRoutes();
exports.default = instructorRoutes.router;
