import { Request, Response } from 'express';
import pool from '../database';
class DateController {

    public getDate(req: Request, res: Response) {
        let dateTime=new Date().getTime();
        res.status(202).json({ date: dateTime });
    }
}
export const dateController = new DateController();