import dotenv from 'dotenv';
import express, {Express, Request, Response} from 'express';
import mysql from 'mysql';
import userRouter from './src/routes/user'
import patientRouter from './src/routes/patient';

dotenv.config();

const app:Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', userRouter);
app.use('/patients', patientRouter);

app.get('/', (req, res) => {
  res.send('Express and Typescript server!');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


