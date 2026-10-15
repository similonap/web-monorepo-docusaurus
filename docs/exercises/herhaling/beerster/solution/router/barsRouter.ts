import express from "express";
import type { Bar } from "../types.ts";
import { getBarById, getBars } from "../database.ts";

export function barsRouter() {
    const router = express.Router();


    router.get("/", async(req,res) => {
        let bars : Bar[] = await getBars();
        res.render("bars", {
            bars: bars
        })
    });

    router.get("/:id", async(req,res) => {
        let bar : Bar | null = await getBarById(parseInt(req.params.id));
        if (!bar) {
            res.status(404).render("404");
            return;
        }
        res.render("bar", {
            bar: bar
        })
    });



    return router;
}