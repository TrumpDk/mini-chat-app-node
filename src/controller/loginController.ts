import { Middleware } from 'koa';

const loginController: Middleware = (ctx, next) => {
    ctx.status = 301;
    ctx.redirect('https://github.com/login/oauth/authorize?scope=user:email&client_id=2a37127f1f8c99eafe86');
}

export default loginController;