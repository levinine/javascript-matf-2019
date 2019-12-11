
import * as express from 'express'
import { Application } from 'express'

export class App {
    public app: Application
    public port: number

    /**
     * constructor
     * @param appInit - initilaze application 
     */
    constructor(appInit: { port: number; middleWares: any; controllers: any; }) {
        this.app = express()
        this.port = appInit.port

        this.middlewares(appInit.middleWares)
        this.routes(appInit.controllers)
    }

    /**
     * register middlewares within the application
     * @param middleWares - all middlewares to register
     */
    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare)
        })
    }

    /**
     * register controlers within the application
     * @param controllers - all controllers to register
     */
    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router)
        })
    }

    /**
     * start application
     */
    public applicationStart() {
        this.app.listen(this.port, () => {
            console.log( '--------------------------------' )
            console.log(`App listening on the http://localhost:${this.port}`)
            console.log( '--------------------------------' )            
            
        })
    }
}

