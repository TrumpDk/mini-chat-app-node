import { IMiddleware } from "koa-router";

export interface RouterListType {
  path: string | string[];
  method: "get" | "post" | "put" | "delete" | "use";
  middleware: IMiddleware[];
}

export interface OIDCConfigType {
  client_id: string;
  redirect_uri: string;
  scope: string;
  state: string;
  authorize_uri: string;
}

export interface TokenPayloadType {
  access_token: string,
  scope: string,
  token_type: string
}