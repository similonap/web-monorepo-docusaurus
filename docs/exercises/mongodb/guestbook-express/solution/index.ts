import express, { type Express } from "express";
import dotenv from "dotenv";
import path from "path";
import { connect, getGuestBookEntries, createGuestBookEntry } from "./database.ts";
import type { GuestBookEntry } from "./types.ts";

dotenv.config();

const app : Express = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(import.meta.dirname, "public")));
app.set('views', path.join(import.meta.dirname, "views"));

app.set("port", process.env.PORT || 3000);

app.use((req, res, next) => {
    res.locals.formatDate = (date: Date) => {
        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    }
    next();
});

app.get("/", async (req, res) => {
    let guestbookEntries : GuestBookEntry[] = await getGuestBookEntries();
    
    res.render("index", {
        guestbookEntries: guestbookEntries
    });

});

app.post("/", async (req, res) => {
    let name: string = req.body.name;
    let message: string = req.body.message;

    await createGuestBookEntry({ name, message, date: new Date() });

    res.redirect("/");
});

app.listen(app.get("port"), async() => {
    await connect();
    console.log("Server started on http://localhost:" + app.get('port'));
});