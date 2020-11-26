import express from "express";

export class ResultsController {
    static registerRoutes(app: express.Application) {
        app.post("/results", (request, response) => {
            new ResultsController().getResults(request, response);
        });
    }

    getResults(request: express.Request, response: express.Response) {
        response.send("heloo world!!!");
    }
}
