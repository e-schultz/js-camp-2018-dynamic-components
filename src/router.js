import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import MarkupDemo from "./views/MarkupDemo.vue";
import IsComputed from "./views/IsComputed.vue";
import IsPropContainer from "./views/IsPropContainer.vue";
import PropPassing from "./views/PropPassing.vue";
import VuexDemo from "./views/VuexDemo.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/markup-demo",
      name: "markupDemo",
      component: MarkupDemo
    },
    {
      path: "/is-computed",
      name: "isComputed",
      component: IsComputed
    },
    {
      path: "/is-prop",
      name: "isProp",
      component: IsPropContainer
    },
    {
      path: "/prop-passing",
      name: "propPassing",
      component: PropPassing
    },
    {
      path: "/vuex-demo",
      name: "vuex-demo",
      component: VuexDemo
    }
  ]
});
