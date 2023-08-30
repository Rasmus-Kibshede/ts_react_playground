// Uses the dotenv package for easy handling of envs
import dotenv from "dotenv/config";
// dotenv.config();
// can be done with dotenv/config or delete config and use dotenv.config()

import express from "express";

const app = express();

app.use(express.json());

import cors from "cors";
app.use(cors());


// Routes here

app.get("/pokemon", async (req, res) => {
    const names = ['Pikatu', 'Charmander', 'Bulbazor', 'Weedle'];

    res.send({ data: names });
});





const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => console.log('Server is running on port', PORT));