import express from 'express';
import "reflect-metadata"
import { envVariables } from './utilities/envVariables';
import cors from 'cors';
import morgan from 'morgan';


const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.listen(envVariables.port, ()=>{
    if(envVariables.dev_mode) console.log(`http://localhost:${envVariables.port}`);
});