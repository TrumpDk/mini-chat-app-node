import { Middleware } from 'koa';
import { nanoid } from "nanoid";
import { OIDCConfigType } from '../types';

const loginController: Middleware = (ctx, next) => {

    const randomString = nanoid(15);

    const authSettings: OIDCConfigType = {
        client_id: "2a37127f1f8c99eafe86",
        redirect_uri: "http://localhost:5173/callback",
        scope: "user:email",
        state: randomString,
        authorize_uri: "https://github.com/login/oauth/authorize",
      };
    ctx.cookies.set('state', randomString, { maxAge: 1000 * 60 * 5, signed: true });
    ctx.body = authSettings;
}

export default loginController;