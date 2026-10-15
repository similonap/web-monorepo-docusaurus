import { MONGODB_URI } from "./database.ts";
import session, { MemoryStore } from "express-session";
import type { FlashMessage, User } from "./types.ts";
import MongoStore from "connect-mongo";

const mongoStore = MongoStore.create({
    mongoUrl: MONGODB_URI,
    collectionName: "sessions",
    dbName: "login-express",
});

declare module 'express-session' {
    export interface SessionData {
        user?: User,
        message?: FlashMessage
    }
}

export default session({
    secret: process.env.SESSION_SECRET ?? "my-super-secret-secret",
    store: mongoStore,
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    }
});