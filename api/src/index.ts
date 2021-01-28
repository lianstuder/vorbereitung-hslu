import App from "./app";

import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose"

import * as dotenv from "dotenv";
dotenv.config();

import ProjectController from "./controllers/project.controller";

const uri: string = process.env.MONGO_URI!.toString();

mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}, (err: any) => {
    if (err) return console.error(err.message);
    console.log("Connected to database.");
});

new App({
    port: 5000,
    controllers: [
        new ProjectController()
    ],
    middlewares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        cors()
    ]
}).listen();

