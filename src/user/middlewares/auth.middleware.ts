import { JWT_SECRET } from '@app/config/config';
import { ExpressRequest } from '@app/types/expressRequest.interface';
import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UserService } from '../user.service';

export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: ExpressRequest, res: Response, next: NextFunction) {
    console.log('authMiddleware', req.headers);
    if (!req.headers.authorization) {
      req.user = null;
      next();
      return;
    }

    const token = req.headers.authorization.split(' ')[1];

    try {
      const decode = verify(token, JWT_SECRET);
      // console.log('decode', decode);
      // const user = this.userService.findById(decode.id);
      next();
    } catch (err) {
      req.user = null;
      next();
    }

    next();
  }
}
