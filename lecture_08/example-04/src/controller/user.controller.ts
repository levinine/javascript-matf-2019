import * as express from 'express'
import { Request, Response } from 'express'
import { User } from '../models/user'

export class UserController {
    public path: string = '/users'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.path, this.getUsers)
    }

    getUsers = (req: Request, res: Response) => {
        // go to database/cache ... and get data

        let usr1 = new User(1, 'Zika Zikic')
        let usr2 = new User(2, 'Mika Mikic')
        var users: User[] = [usr1, usr2]

        res.send(users)
    }
}
