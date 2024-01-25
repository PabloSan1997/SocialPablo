import express from 'express';


const app = express();

app.get('/', (req, res) => { res.json({ message: 'Hola mundo este es el inicio' }) })

app.listen(3000);