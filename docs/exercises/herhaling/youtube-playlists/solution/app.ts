import express, { type Express } from "express";
import dotenv from "dotenv";
import path from "path";
import rootRouter from "./router/rootRouter.ts";
import cookieParser from "cookie-parser";
import loginRouter from "./router/loginRouter.ts";
import { loginMiddleware } from "./middleware/loginMiddleware.ts";
import { flashMiddleware } from "./middleware/flashMiddleware.ts";
import session from "./session.ts";

dotenv.config();

const app : Express = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(session);
app.use(cookieParser());
app.use(flashMiddleware);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(import.meta.dirname, "public")));
app.set("views", path.join(import.meta.dirname, "views"));

app.set("port", process.env.PORT ?? 3000);

app.use("/", loginRouter());
app.use("/", loginMiddleware, rootRouter());
app.get("/session", (req, res) => {
    res.status(200).json(req.session);
});

export default app;