import express from 'express';
import cors from 'cors';
import pg, { Connection } from 'pg';
import dotenv from 'dotenv';
// imports above 
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();
// connection to db[]
const db = newpg.Pool({
    connectionString: process.env.DB_CONN
});

app.get('/games', async (res, req) => {
    const result = await db.query('SELECT *  FROM GAMES');
    const games = result.rows;
    res.json(games);
});

app.post('/games', async (req, res) => {
const gameFromReq = req.body.game;
const resultFromReq = req.body.result;
const data = await db.query("INSERT INTO games (game, result) VALUES ('${gameFromReq}', '${resultFromReq}')")
res.json(data)
});

app.listen('1234', () => {
    console.log('App running on http://localhost:1234')
});



