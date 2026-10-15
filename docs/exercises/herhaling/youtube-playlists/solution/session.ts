import { MONGODB_URI } from "./database.ts";
import session from "express-session";
import MongoStore from "connect-mongo";

const mongoStore = MongoStore.create({
    mongoUrl: MONGODB_URI,
    collectionName: "sessions",
    dbName: "login-express",
});

declare module "express-session" {
    export interface SessionData {
        username: string;
        errorMessage: string;
    }
}

export default session({
    secret: process.env.SESSION_SECRET ?? "my-super-secret-secret",
    store: mongoStore,
    resave: true,
    saveUninitialized: true
});