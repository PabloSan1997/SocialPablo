import express from 'express';
import 'reflect-metadata';
import { envVariables } from './utilities/envVariables';
import cors from 'cors';
import morgan from 'morgan';
import { AppDataSource } from './dbConfig/config';
import { boomHandle } from './middlewares/boomHandle';
import { createApi } from './routes';


const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

createApi(app);

app.use(boomHandle);

AppDataSource.initialize()
	.then(() => {
		app.listen(envVariables.port, () => {
			if (envVariables.dev_mode) console.log(`http://localhost:${envVariables.port}`);
		});
	})
	.catch(error => console.log(error));