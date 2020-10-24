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
exports.turnoController = void 0;
const database_1 = __importDefault(require("../database"));
const bcrypt = require('bcryptjs');
class TurnoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { fromDate, toDate } = req.params;
                let turnos;
                if (toDate == null) {
                    turnos = yield database_1.default.query('SELECT * FROM apertura_cierre_de_turno where fecha_apertura like ? ', [fromDate]);
                }
                else {
                    turnos = yield database_1.default.query('SELECT * FROM apertura_cierre_de_turno where (fecha_apertura BETWEEN ? AND ?)', [fromDate, toDate]);
                }
                if (turnos.length > 0) {
                    return res.status(200).json(turnos);
                }
                else {
                    res.status(404).json({ text: 'Sin registros' });
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener turno(s)' });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const turno = yield database_1.default.query("SELECT * FROM apertura_cierre_de_turno WHERE fecha_cierre IS NULL OR fecha_cierre = ''  ORDER BY fecha_apertura ASC");
                if (turno.length > 0) {
                    return res.status(200).json(turno[0]);
                }
                res.status(404).json({ text: 'No se pudo obtener turno' });
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener turno' });
            }
        });
    }
    getOneSinId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const turno = yield database_1.default.query("SELECT * FROM apertura_cierre_de_turno WHERE fecha_cierre IS NULL OR fecha_cierre = ''  ORDER BY fecha_apertura DESC LIMIT 1");
                if (turno.length > 0) {
                    return res.status(200).json(turno[0]);
                }
                res.status(404).json({ text: 'No se pudo obtener turno' });
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener turno' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = {
                    fecha_apertura: req.body.fecha_apertura,
                    hora_apertura: req.body.hora_apertura,
                    id_administrador_apertura: req.body.id_administrador_apertura,
                    nombre_administrador_apertura: req.body.nombre_administrador_apertura,
                    apellido_administrador_apertura: req.body.apellido_administrador_apertura,
                    fecha_cierre: "",
                    id_administrador_cierre: -1,
                    nombre_administrador_cierre: "",
                    apellido_administrador_cierre: "",
                };
                console.log(newUser);
                const turno = yield database_1.default.query('INSERT INTO apertura_cierre_de_turno set ?', [newUser]);
                if (turno != null) {
                    console.log(turno);
                    if (turno != null) {
                        if (turno.affectedRows > 0) {
                            res.status(200).json({ message: 'turno creado' });
                        }
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo crear turno' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo crear turno' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const turnoCierre = yield database_1.default.query('UPDATE apertura_cierre_de_turno SET ? WHERE id = ?', [req.body, id]);
                if (turnoCierre != null) {
                    console.log(turnoCierre);
                    if (turnoCierre != null) {
                        if (turnoCierre.affectedRows > 0) {
                            res.status(200).json({ message: 'turno creado' });
                        }
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo crear turno' });
                    }
                }
                res.status(404).json({ text: 'No se pudo obtener turno' });
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo obtener turno' });
            }
        });
    }
    /*
    public async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const turno = await pool.query('UPDATE apertura_cierre_de_turno SET ? WHERE id = ?', [req.body, id]);
            if (turno != null) {
                if (turno.affectedRows > 0) {
                    res.status(200).json({ message: 'turno actualizado' });
                } else {
                    res.status(404).json({ text: 'No se pudo actualizar turno' });
                }
            }
        } catch{
            res.status(404).json({ text: 'No se pudo actualizar turno' });
        }
    }
    */
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const turno = yield database_1.default.query('DELETE FROM turno WHERE id = ?', [id]);
                if (turno != null) {
                    if (turno.affectedRows > 0) {
                        res.status(200).json({ message: 'turno eliminado' });
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo eliminar turno' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo eliminar turno' });
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { rut, password } = req.params;
            console.log(rut);
            let user;
            try {
                user = yield database_1.default.query("SELECT * FROM turno WHERE rut = ? ", [rut]);
            }
            catch (err) {
                return res.status(404).json({ text: "Usuario no registrado" });
            }
            if (user.length > 0) {
                const resultPassword = bcrypt.compareSync(password, user[0].password);
                if (resultPassword) {
                    const dataAdmin = {
                        rut: user[0].rut,
                        nombre: user[0].nombre,
                        apellido: user[0].apellido,
                    };
                    return res.send({ dataAdmin });
                }
                else {
                    return res.status(404).json({ text: "Rut o contraseña invalidos" });
                }
            }
            return res.status(404).json({ text: "Rut o contraseña invalidos" });
        });
    }
    closeTurnCollaborators(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("closeTurnCollaborators1");
            try {
                const { fecha_termino, hora_termino } = req.params;
                console.log("closeTurnCollaborators2");
                const respuesta = yield database_1.default.query("UPDATE registro_diario_usuario_en_linea SET fecha_termino = ?, hora_termino = ? WHERE fecha_termino = '' AND hora_termino = '' ", [fecha_termino, hora_termino]);
                if (respuesta != null) {
                    if (respuesta.affectedRows > 0) {
                        res.status(200).json({ message: 'Turno cerrado correctamente a los colaboradores' });
                    }
                    else {
                        res.status(404).json({ text: 'No se pudo cerrar correctamente el turno a los colaboradores' });
                    }
                }
            }
            catch (_a) {
                res.status(404).json({ text: 'No se pudo cerrar correctamente el turno a los colaboradores' });
            }
        });
    }
}
exports.turnoController = new TurnoController();
