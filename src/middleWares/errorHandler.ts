import { Middleware } from "koa";

export const errorHandler: Middleware = async (ctx, next) => {
    try {
        await next();
    } catch (e: any) {
        console.log(e, 'asd');
        ctx.response.status = ctx.status || 500;
        ctx.response.body = {
            message: e.message
        }
    }
}