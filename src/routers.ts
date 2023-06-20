import { RouterListType } from "./types";
import loginController from "./controller/loginController";

// router list table, which
const routerList: RouterListType[] = [
  {
    path: "/login",
    method: "get",
    middleware: [loginController],
  },
];

export default routerList;
