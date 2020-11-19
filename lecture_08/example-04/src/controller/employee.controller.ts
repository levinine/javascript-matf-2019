import * as express from 'express'
import { Request, Response } from 'express'
import { Employee } from '../models/employee'

export class EmployeeController {
    public path: string = '/employees'
    public router = express.Router()

    private employees: Employee[]

    constructor() {
        this.generateEmployees()
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.path, this.getEmployees)
    }

    getEmployees = (req: Request, res: Response) => {
        // go to database/cache ... and get data

        res.send(this.employees)
    }

    private generateEmployees(): void {
        this.employees = [
            new Employee(1, 'Mira Miric', 'MATF'),
            new Employee(2, 'Jova Jovic', 'Levi9')
        ]
    }
}
