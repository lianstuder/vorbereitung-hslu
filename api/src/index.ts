import App from "./app";

import * as bodyParser from "body-parser";
import * as mongoose from "mongoose"

import * as dotenv from "dotenv";
dotenv.config();

const uri: string = process.env.MONGO_URI!.toString();

mongoose.connect(uri, (err: any) => {
    if (err) return console.error(err.message);
    console.log("Connected to database.");
})

new App({
    port: 5000,
    controllers: [

    ],
    middlewares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true })
    ]
})

