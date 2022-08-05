import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AppErrors } from '../errors/AppErrors';
import authConfig from '../../config/auth';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function isAutentication(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppErrors('JWT Token is missing', 400);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decodedToken = verify(token, authConfig.jwt.secret);

    const { sub } = decodedToken as ITokenPayload;

    req.user = {
      id: sub,
    };
    return next();
  } catch {
    throw new AppErrors('Invalid JWT Token.', 400);
  }
}
