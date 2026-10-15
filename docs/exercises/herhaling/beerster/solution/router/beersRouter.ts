import ejs from "ejs";
import express from "express";
import { getBeerById, getBeers, getCheckinsByBeer } from "../database.ts";
import type { Beer } from "../types.ts";

export function beersRouter() {
    const router = express.Router();

    router.get("/", async(req, res) => {
        let beers : Beer[] = await getBeers();

        res.render("beers", { 
            beers: beers
        });
    });


    router.get("/:id", async(req, res) => {
        let beer : Beer | null = await getBeerById(parseInt(req.params.id));

        if (!beer) {
            res.status(404).render("404");
            return;
        }

        let checkins = await getCheckinsByBeer(beer.name);

        res.render("beer", {
            beer: beer,
            checkins: checkins
        });
    });


    return router;
}