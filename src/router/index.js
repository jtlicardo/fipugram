import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import store from "@/store.js"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import(/* webpackChunkName: "signup" */ "../views/Signup.vue"),
  },
  {
    path: "/account",
    name: "account",
    component: () => import(/* webpackChunkName: "signup" */ "../views/AccountInfo.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  console.log("Promjena rute!")
  console.log("Stara ruta: ", from.name)
  console.log("Nova ruta: ", to.name)
  const noUser = store.currentUser === null
  if (noUser && to.meta.needsUser) next("login")
  else next()
})

export default router
