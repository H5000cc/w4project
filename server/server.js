import express from 'express';
import cors from 'cors';
import pg from 'pg';
import dotenv from 'dotenv';
// imports above 
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.json('root')
})

dotenv.config();
// connection to db[]
const db = new pg.Pool({
    connectionString: process.env.DB_CONN
});


app.get('/games', async (req, res) => {
    const result = await db.query('SELECT *  FROM GAMES');
    const games = result.rows;
    res.json(games);
});

app.post('/games', async (req, res) => {
const gameFromReq = req.body.game;
const resultFromReq = req.body.result;
const data = await db.query("INSERT INTO games (game, result) VALUES ($1, $2)",[
    game, result
])
res.json(data)
});

app.listen(1234, () => {
    console.log('App running on localhost:1234')
});



