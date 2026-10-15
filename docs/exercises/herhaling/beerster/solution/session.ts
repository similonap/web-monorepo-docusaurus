import { MONGODB_URI } from "./database.ts";
import session from "express-session";
import type { FlashMessage } from "./types.ts";
import MongoStore from "connect-mongo";

const mongoStore = MongoStore.create({
    mongoUrl: MONGODB_URI,
    collectionName: "sessions",
    dbName: "beerster",
});

declare module "express-session" {
    export interface SessionData {
        username: string;
        message: FlashMessage;
    }
}

export default session({
    secret: process.env.SESSION_SECRET ?? "my-super-secret-secret",
    store: mongoStore,
    resave: true,
    saveUninitialized: true
});