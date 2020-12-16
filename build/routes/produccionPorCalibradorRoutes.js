"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const produccionPorCalibradorController_1 = require("../controllers/produccionPorCalibradorController");
class ProduccionPorCalibradorRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/get_turnos_calibrador/:id_caliper/:fromDateSearch/:toDateSearch', produccionPorCalibradorController_1.produccionPorCalibradorController.getTurnos);
        this.router.get('/get_produccion_colaborador_turno/:id_turno', produccionPorCalibradorController_1.produccionPorCalibradorController.getProduccionColaborador);
        this.router.get('/get_promedio_cajas_por_minuto_turno/:id_calibrador/:id_turno/:fecha_inicio/:hora_inicio/:fecha_termino/:hora_termino', produccionPorCalibradorController_1.produccionPorCalibradorController.getPromedioCajasPorMinutoTurno);
        this.router.get('/get_produccion_linea_turno/:id_calibrador/:id_turno', produccionPorCalibradorController_1.produccionPorCalibradorController.getProduccionLineaCalibrador);
        this.router.get('/numero_cajas_calibrador/:id_caliper/:fromDateSearch/:toDateSearch/:id_turno', produccionPorCalibradorController_1.produccionPorCalibradorController.countBoxInCaliper);
        this.router.get('/numero_cajas_calibrador2/:id_caliper/:fromDateSearch/:toDateSearch', produccionPorCalibradorController_1.produccionPorCalibradorController.countBoxInCaliper2);
        this.router.get('/registros_cajas_calibrador/:id_caliper/:fromDateSearch/:toDateSearch/:id_turno', produccionPorCalibradorController_1.produccionPorCalibradorController.searchRegisterCaliper);
        this.router.get('/registros_cajas_calibrador2/:id_caliper/:fromDateSearch/:toDateSearch', produccionPorCalibradorController_1.produccionPorCalibradorController.searchRegisterCaliper2);
        this.router.put('/registro_produccion_calibrador_update/:id', produccionPorCalibradorController_1.produccionPorCalibradorController.update);
    }
}
const produccionPorCalibradorRoute = new ProduccionPorCalibradorRoutes();
exports.default = produccionPorCalibradorRoute.router;
