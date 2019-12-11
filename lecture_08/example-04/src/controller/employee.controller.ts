import * as express from 'express'
import { Request, Response } from 'express'
import { Employee } from '../models/employee'

export class EmployeeController {
    public path: string = '/employees'
    public router = express.Router()
    
    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.path, this.getEmployees)
    }

    getEmployees = (req: Request, res: Response) => {
        // go to database/cache ... and get data

        let empl1 = new Employee(1,'Mira Miric', 'MATF')
        let empl2 = new Employee(2,'Jova Jovic', 'Levi9')
        var employees: Employee[] = [empl1, empl2]

        res.send (employees)
    }
}
