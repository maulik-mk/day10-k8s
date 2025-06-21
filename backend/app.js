import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/connect.js';
import likeRoutes from './routes/likeRoutes.js';
import { initLike } from './controllers/likeController.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(json());

app.get('/health', (req, res) => res.send('OK'));
app.use('/api/like', likeRoutes);

const startServer = async () => {
  await connectDB();
  await initLike();
  app.listen(port, () => {
    console.log(`Backend listening on port ${port}`);
  });
};

startServer();