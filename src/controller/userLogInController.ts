import { Middleware } from 'koa';
import { nanoid } from "nanoid";
import { OIDCConfigType } from '../types';

const loginController: Middleware = (ctx, next) => {
    const requestBody = ctx.request.body as {id: number, password: string};
    
}

export default loginController;