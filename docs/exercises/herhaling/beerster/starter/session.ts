import MongoStore from "connect-mongo";
import session from "express-session";
import { MONGODB_URI } from "./database.ts";

const mongoStore = MongoStore.create({
    mongoUrl: MONGODB_URI,
    collectionName: "sessions",
    dbName: "beerster",
});

declare module "express-session" {
    export interface SessionData {

    }
}

export default session({
    secret: process.env.SESSION_SECRET ?? "my-super-secret-secret",
    store: mongoStore,
    resave: true,
    saveUninitialized: true
});