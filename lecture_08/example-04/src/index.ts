import { App } from './app'

import * as bodyParser from 'body-parser'
import logger from './middleware/logger'

import { UserController } from './controller/user.controller'
import { EmployeeController } from './controller/employee.controller'

// configure application
const app = new App({
    port: 8181,
    controllers: [ 
        new UserController(),
        new EmployeeController()
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        logger
    ]
})

//start application
app.applicationStart()
