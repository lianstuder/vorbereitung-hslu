import express from "express";
import { Application } from "express";

export default class App {
  public app: Application;
  public port: number;

  constructor(appInit: { port: number; middlewares: any; controllers: any }) {
    this.app = express();
    this.port = appInit.port;

    this.middlewares(appInit.middlewares);
    this.routes(appInit.controllers);
  }

  private middlewares(middlewares: {
    forEach: (arg0: (middleWare: any) => void) => void;
  }) {
    middlewares.forEach((mw) => {
      this.app.use(mw);
    });
  }

  private routes(controllers: {
    forEach: (arg0: (controller: any) => void) => void;
  }) {
    controllers.forEach((ct) => {
      this.app.use("/", ct.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`API listening on port ${this.port}`);
    });
  }
}
