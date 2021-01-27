import * as express from "express";
import { Request, Response } from "express";
import Project from "../models/project.model";

class ProjectController {
    public path = "/";
    public router = express.Router();

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get("/", this.getProjects);
    }

    getProjects = (req: Request, res: Response) => {
        let projects = Project.find((err: any, projects: any) => {
            if (err) return res.status(500);
            res.send(projects);
        })
    }
}