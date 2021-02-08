import * as express from "express";
import { Request, Response } from "express";
import Project from "../models/project.model";

export default class ProjectController {
  public path = "/";
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get("/", this.getProjects);
    this.router.get("/get/:pjId", this.getProject);
    this.router.post("/new", this.createProject);
    this.router.delete("/delete/:pjId", this.deleteProject);
    this.router.put("/update/:pjId", this.updateProject);
  }

  getProjects = (req: Request, res: Response) => {
    let projects = Project.find((err: any, projects: any) => {
      if (err) return res.status(500);
      res.send(projects);
    });
  };

  createProject = (req: Request, res: Response) => {
    let project = new Project(req.body);
    project.save((err: any) => {
      if (err) return res.status(500);
      res.send(project);
    });
  };

  getProject = (req: Request, res: Response) => {
    let project = Project.findById(
      req.params.pjId,
      (err: any, project: any) => {
        if (err) return res.status(500);
        res.send(project);
      }
    );
  };

  deleteProject = (req: Request, res: Response) => {
    let project = Project.findByIdAndDelete(req.params.pjId, {}, (err: any) => {
      if (err) return res.status(500);
    });
  };

  updateProject = (req: Request, res: Response) => {
    let project = Project.findByIdAndUpdate(
      req.params.pjId,
      req.body,
      {},
      (err: any, project: any) => {
        if (err) return res.status(500);
        res.send(project);
      }
    );
  };
}
