import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/HomeView.vue";
import oneId from "@/components/oneId.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Advokatlar",
    },
    children: [
      {
        path: "",
        name: "Main",
        component: () => import("@/views/MainView.vue"),
      },
      {
        path: "news",
        name: "News",
        component: () => import("@/views/news/NewsView.vue"),
        children: [
          {
            path: "",
            name: "NewsMain",
            component: () => import("@/views/news/pages/NewsMain.vue"),
          },
          {
            path: ":id",
            name: "NewsItem",
            component: () => import("@/views/news/pages/NewsItem.vue"),
          },
          // {
          //   path: "*",
          //   redirect: { name: "NotFound" },
          // },
        ],
      },
      {
        path: "lawyers",
        name: "Lawyers",
        component: () => import("@/views/lawyers/LawyersView.vue"),
      },
      {
        name: "oneId",
        path: "/oneid",
        component: oneId,
        meta: {
          public: true, // Allow access to even if not logged in
          onlyWhenLoggedOut: true,
        },
      },
      {
        path: "profile",
        name: "Profile",
        meta: {
          auth: true,
        },
        component: () => import("@/views/profile/ProfileView.vue"),
        // children: [
        //   {
        //     path: "",
        //     name: "profileIndex",
        //     component: () => import("@/views/profile/ProfileView.vue"),
        //   },
        // ],
      },
      // {
      //   path: "*",
      //   redirect: { name: "NotFound" },
      // },
    ],
  },
  {
    path: "error",
    name: "NotFound",
    component: () => import("@/views/NotFoundView.vue"),
  },
  // {
  //   path: "*",
  //   redirect: { name: "NotFound" },
  // },
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes,
});

const DEFAULT_TITLE = "Advokatlar";
router.afterEach((to) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});
router.beforeEach((to, from, next) => {
  console.log("to", to.meta?.auth);
  const token = !!localStorage.getItem("token");
  if (to.meta?.auth) {
    token ? next() : next(`${from.path}`);
  } else next();
});

export default router;
