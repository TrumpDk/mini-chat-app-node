import { IMiddleware } from "koa-router";

export interface RouterListType {
    path: string | string[],
    method: 'get' | 'post' | 'put' | 'delete' | 'use',
    middleware: IMiddleware[]
}