import { RouterListType } from "./types";
import loginController from "./controller/loginController";
import authCallBackController from "./controller/authCallBackController";
import userRegisterController from "./controller/userRegisterController";

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
    middleware: [userRegisterController],
  },
];

export default routerList;
