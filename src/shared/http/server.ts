import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from '../http/router/router';
import { AppErrors } from '../../shared/errors/AppErrors';
import { errors } from 'celebrate';
import '../../modules/typeorm';

const app = express();
app.use(cors());

app.use(express.json());

app.use(routes);

app.use(errors());

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

app.listen(3333, () => {
  console.log('Entrou no servidor 3333');
});
