import router from "./router";
import { getToken } from "./utils/auth.js";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
const whiteList = ["/login"]; // no redirect whitelist

NProgress.configure({ showSpinner: true }); // NProgress Configuration
router.beforeEach((to, from, next) => {
  console.log("beforeEach to", to);
  console.log("beforeEach from", from);
  console.log("beforeEach next", next);
  const token = getToken();
  console.log("token", token);
  if (token) {
    next();
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next();
    } else {
      next("/login");
      NProgress.done();
    }
  }
});
router.beforeResolve((to, from, next) => {
  console.log("beforeResolve to", to);
  console.log("beforeResolve from", from);
  console.log("beforeResolve next", next);
  next();
});
router.afterEach((to, from, next) => {
  console.log("afterEach to", to);
  console.log("afterEach from", from);
  console.log("afterEach next", next);
});
