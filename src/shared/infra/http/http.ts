import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './router/router';
import { AppErrors } from '../../errors/AppErrors';
import { errors } from 'celebrate';
import '../../../modules/data/typeorm';
import http from 'http';
import { Server } from 'socket.io';
import path from 'path';
import rateLimiter from '../../middlewares/rateLimiter';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

// app.use(rateLimiter);

app.use(errors());

app.use('/chat', express.static(path.join(__dirname, './messages/public')));
// app.use('/multiplayer', express.static(path.join(__dirname, './messages/public')));

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    console.log(error);
    if (error instanceof AppErrors) {
      return response.status(error.statusCode).json({
        status: 'Error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'Error Server',
      message: 'Erro no servidor Interno',
    });
  },
);

const serverHttp = http.createServer(app);

const io = new Server(serverHttp);

export { serverHttp, io };
