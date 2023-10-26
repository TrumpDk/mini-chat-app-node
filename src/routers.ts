import { RouterListType } from "./types";
import loginController from "./controller/loginController";
import authCallBackController from "./controller/authCallBackController";

// router list table, which
const routerList: RouterListType[] = [
  {
    path: "/getLoginAddress",
    method: "get",
    middleware: [loginController],
  },
  {
    path: "/auth/callback",
    method: "post",
    middleware: [authCallBackController],
  },
  {
    path: "/register",
    method: "post",
    middleware: [authCallBackController],
  },
];

export default routerList;
