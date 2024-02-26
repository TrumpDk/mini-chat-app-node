import { Middleware } from 'koa';
import { dataSource } from '../dataSource';
import { User } from '../entity/User';

const userRegisterController: Middleware = async (ctx, next) => {
    const {id, password, nickName} = ctx.request.body as {id: number, password: string, nickName: string};
    if (!id || !password || !nickName) {
        ctx.throw(400, 'invalid parameter')
    } else {
        try {
            await dataSource
                .createQueryBuilder()
                .insert()
                .into(User)
                .values({ uLoginId: id, uNikename: nickName, uPassword: password })
                .execute();
        } catch (e: any) {
            console.log(e);
        }
    }
}

export default userRegisterController;