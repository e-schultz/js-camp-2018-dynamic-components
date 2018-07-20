import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
// import About from "./views/About.vue";
// import MarkupDemo from "./views/MarkupDemo.vue";
// import IsComputed from "./views/IsComputed.vue";
// import IsPropContainer from "./views/IsPropContainer.vue";
// import PropPassing from "./views/PropPassing.vue";
// import VuexDemo from "./views/VuexDemo.vue";
// import DynamicForm from "./views/DynamicForm.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/markup-demo",
      name: "markupDemo",
      component: () => import("./views/MarkupDemo.vue")
    },
    {
      path: "/is-computed",
      name: "isComputed",
      component: () => import("./views/IsComputed.vue")
    },
    {
      path: "/is-prop",
      name: "isProp",
      component: () => import("./views/IsPropContainer.vue")
    },
    {
      path: "/prop-passing",
      name: "propPassing",
      component: () => import("./views/PropPassing.vue")
    },
    {
      path: "/vuex-demo",
      name: "vuex-demo",
      component: () => import("./views/VuexDemo.vue")
    },

    {
      path: "/dynamic-form",
      name: "dynamic-form",
      component: () => import("./views/DynamicForm.vue")
    }
  ]
});
