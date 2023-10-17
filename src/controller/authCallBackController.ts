import { Middleware } from 'koa';
import { getAccessTocken } from '../service/authService';

const authCallBackController: Middleware = (ctx, next) => {
    console.log(ctx.request.body, 'sdfccc', ctx.cookies.get('state'));
    const stateCookie = ctx.cookies.get('state');
    const requestBody = ctx.request.body as {state: string, code: string};
    getAccessTocken(requestBody.code);
    // if (stateCookie && stateCookie === requestBody.state) {
    // } else {

    // }
    ctx.status = 200;
    ctx.body = 200;
}

export default authCallBackController;