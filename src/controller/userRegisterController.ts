import { Middleware } from 'koa';

const userRegisterController: Middleware = (ctx, next) => {
    const {id, password, nickName} = ctx.request.body as {id: number, password: string, nickName: string};
    if (!id || password || nickName) {
        ctx.throw(400)
    } else {
        
    }
}

export default userRegisterController;