import express from "express";
import { router as combineRoute, addModule } from "./combine/serveRoute.js";

const app = express();

app.use(express.json());
app.use("/api", combineRoute); // Use Route /api
app.use(express.static("public"));

addModule("api.js");

app.listen(80);
