import { dataSource } from "./dataSource";
import Koa from "koa";
import logger from "koa-logger";
import bodyParser from "koa-bodyparser";
import Router from "koa-router";
import cors from "@koa/cors";
import routerList from "./routers";
import "reflect-metadata";
import * as dotenv from 'dotenv';
import chance from 'chance';

console.log(process.env.NODE_ENV, 'sdf')
if (process.env.NODE_ENV === 'development') {
  dotenv.config();
} else {
  dotenv.config();
}

// dataSource
//   .initialize()
//   .then(async () => {
    // const userRepository = dataSource.getRepository(User);

    // const findUser = async () => {
    //     const user = await userRepository.findOneBy({
    //         uId: 1
    //     });

    //     console.log(user, 'fff');
    // }

    // findUser();

    const app = new Koa();

    app.use(logger());
    app.use(cors());
    app.use(bodyParser());

    const router = new Router();
    routerList.forEach((item) => {
      router[item.method](item.path, ...item.middleware);
    });
    const port = process.env.Port || 3007;

    app.use(router.routes());
    app.use(router.allowedMethods());

    app.listen(port);
    console.log(`server has started at port ${port}`);
  // })
  // .catch((error) => console.log(error));
