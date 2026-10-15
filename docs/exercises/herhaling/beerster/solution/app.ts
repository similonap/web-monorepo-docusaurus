import express, { type Express } from "express";
import dotenv from "dotenv";
import path from "path";
import utilMiddleware from "./middleware/utilMiddleware.ts";
import session from "./session.ts";
import homeRouter from "./router/homeRouter.ts";
import loginRouter from "./router/loginRouter.ts";
import { loginMiddleware } from "./middleware/loginMiddleware.ts";
import cookieParser from "cookie-parser";
import { beersRouter } from "./router/beersRouter.ts";
import { barsRouter } from "./router/barsRouter.ts";
import profileRouter from "./router/profileRouter.ts";
import { flashMiddleware } from "./middleware/flashMiddleware.ts";

dotenv.config();

const app : Express = express();

app.set("view engine", "ejs");
app.use(session);
app.use(flashMiddleware);
app.use(cookieParser());
app.use(utilMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(import.meta.dirname, "public")));
app.set("views", path.join(import.meta.dirname, "views"));

app.set("port", process.env.PORT ?? 3000);

app.use("/", loginRouter());
app.use("/", loginMiddleware, homeRouter());
app.use("/profile", loginMiddleware, profileRouter());
app.use("/beers", loginMiddleware, beersRouter());
app.use("/bars", loginMiddleware, barsRouter());

export default app;