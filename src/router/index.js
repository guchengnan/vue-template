import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/standard",
    name: "Standard",
    component: () =>
      import(/* webpackChunkName: "standard" */ "../views/standard/index.vue"),
  },
  {
    path: "/tools",
    name: "Tools",
    component: () =>
      import(/* webpackChunkName: "tools" */ "../views/tools/index.vue"),
  },
  {
    path: "/request",
    name: "Request",
    component: () =>
      import(/* webpackChunkName: "tools" */ "../views/request/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  // 根据自身项目取舍
  linkActiveClass: "active",
});

export default router;
