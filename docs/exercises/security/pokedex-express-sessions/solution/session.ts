import { MONGODB_URI } from "./database.ts";
import session, { MemoryStore } from "express-session";
import MongoStore from "connect-mongo";
import type { Player } from "./types.ts";

const mongoStore = MongoStore.create({
    mongoUrl: MONGODB_URI,
    collectionName: "sessions",
    dbName: "login-express",
});

declare module 'express-session' {
    export interface SessionData {
        player: Player
    }
}

export default session({
    secret: process.env.SESSION_SECRET ?? "my-super-secret-secret",
    store: mongoStore,
    resave: true,
    saveUninitialized: true
});