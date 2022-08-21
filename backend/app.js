import express from 'express';
import dotenv from 'dotenv';

import './src/database';
import userRouter from './src/routes/User';
import authRouter from './src/routes/Auth';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/users/', userRouter);
    this.app.use('/auth/', authRouter);
  }
}

export default new App().app;
