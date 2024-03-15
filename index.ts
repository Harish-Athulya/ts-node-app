import dotenv from 'dotenv';
import express, {Express, Request, Response} from 'express';
import mysql from 'mysql';
import userRouter from './src/routes/user'
import patientRouter from './src/routes/patient';
import bedRouter from './src/routes/bed';
import roomRouter from './src/routes/room';
import  sequelize  from './src/db';
import Room from './src/models/room';
import Bed from './src/models/bed';

dotenv.config();

const app:Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', userRouter);
app.use('/patients', patientRouter);

// for end point /beds, use the bedRouter exported from src/routes/bed
app.use('/beds', bedRouter);
// for end point /rooms, use the roomRouter exported from src/routes/rooms
app.use('/rooms', roomRouter);

app.get('/', (req, res) => {
  res.send('Express and Typescript server!');
});

app.get('/findBeds', async (req, res) => {

  try {
      const beds = await Bed.findAll({
        where: {status: 'Active'},
        attributes: { 
          exclude: ['created_at', 'updated_at'], 
        }, 
        include: [{model: Room, attributes: ['id', 'room_id'], on: sequelize.where(sequelize.col('bed.room_id'), '=', sequelize.col('room.id'))}],
        limit: 10,
      });
      res.json(beds);
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
  }  
});

// create an endpoint /roomjoin which joins room and bed models and provide the following fields only
// 1. room_id
// 2. bed_id
// 3. bed_number
// 4. room_number

/* app.get('/findRoomByBranchid', async (req: Request, res: Response) => {
  try {
    console.log("HHH");
      const rooms = await Room.findAll({
        where: {branch_id: 2},
        attributes: { exclude: ['created_at', 'updated_at'], include: [
          {model: Bed, attributes: ['id', 'bed_number']},
        ]}, 
      });
      // console.log(rooms);
      res.json(rooms);
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
  }
});
 */
app.get('/roomjoin', async (req: Request, res: Response) => {
  try {
    const rooms = await Room.findAll({
      attributes: ['id', 'room_number'],
      include: [
        {
          model: Bed,
          attributes: ['id', 'bed_number'],
        },
      ],
    });

    res.json(rooms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// create an endpoint /roomjoin2 which joins room and bed models, where the  and provide the following fields only
// 1. room_id
// 2. bed_id
// 3. bed_number
// 4. room_number





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


