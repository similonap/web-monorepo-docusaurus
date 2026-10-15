import express, { type Express } from "express";
import {connect} from "./database.ts";
import dotenv from "dotenv";
import session from "./session.ts";
import path from "path";
import { secureMiddleware } from "./middleware/secureMiddleware.ts";
import { flashMiddleware } from "./middleware/flashMiddleware.ts";
import { homeRouter } from "./routers/homeRouter.ts";
import { loginRouter } from "./routers/loginRouter.ts";

dotenv.config();

const app : Express = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(import.meta.dirname, "public")));
app.use(session);
app.use(flashMiddleware);
app.set('views', path.join(import.meta.dirname, "views"));

app.set("port", process.env.PORT || 3000);

app.use("/", loginRouter());
app.use("/", secureMiddleware, homeRouter());

app.listen(app.get("port"), async() => {
    try {
        await connect();
        console.log("Server started on http://localhost:" + app.get('port'));
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
});