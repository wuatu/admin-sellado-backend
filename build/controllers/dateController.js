"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateController = void 0;
class DateController {
    getDate(req, res) {
        let dateTime = new Date().getTime();
        res.status(202).json({ date: dateTime });
    }
}
exports.dateController = new DateController();
