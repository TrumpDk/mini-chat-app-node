import { dataSource } from "./dataSource";
import Koa from "koa";
import logger from "koa-logger";
import bodyParser from "koa-bodyparser";
import Router from "koa-router";
import cors from "@koa/cors";
import routerList from "./routers";
import "reflect-metadata";
import * as dotenv from "dotenv";

if (process.env.NODE_ENV === "development") {
  dotenv.config();
} else {
  dotenv.config();
}

dataSource
  .initialize()
  .then(async () => {
    // const userRepository = dataSource.getRepository(User);

    // const findUser = async () => {
    //     const user = await userRepository.findOneBy({
    //         uId: 1
    //     });

    //     console.log(user, 'fff');
    // }

    // findUser();

    const app = new Koa();
    app.keys = [process.env.cookieSecret as string];

    app.use(logger());
    app.use(
      cors({
        origin: function (ctx) {
          const whiteList = ["http://127.0.0.1:5173"];
          let url = ctx.header.referer!.substring(0,ctx.header.referer!.length - 1);
          if (whiteList.includes(url)) {
            return url;
          }
          return "http://localhost:5173";
        },
        maxAge: 5,
        credentials: true,
      })
    );
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
  })
  .catch((error) => console.log(error));
