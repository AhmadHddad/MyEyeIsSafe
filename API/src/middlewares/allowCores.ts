import { NextFunction, Request, Response } from 'express';

export function AllowCors(request: Request, response: Response, next: NextFunction) {
   response.setHeader('Access-Control-Allow-Origin', '*');
   response.setHeader('Access-Control-Allow-Methods', '*');
   response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

   next();
}
