import Vue from "vue";
import Router from "vue-router";
import Display from "@/components/Display";
import FlexDirection from "@/components/FlexDirection";
import JustifyContent from "@/components/JustifyContent";
import AlignItems from "@/components/AlignItems";
import FlexWrap from "@/components/FlexWrap";
import AlignContent from "@/components/AlignContent";
import AlignSelf from "@/components/AlignSelf";
import Order from "@/components/Order";
import Flex from "@/components/Flex";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "display"
    },
    {
      path: "/display",
      component: Display
    },
    {
      path: "/flex-direction",
      component: FlexDirection
    },
    {
      path: "/justify-content",
      component: JustifyContent
    },
    {
      path: "/align-items",
      component: AlignItems
    },
    {
      path: "/flex-wrap",
      component: FlexWrap
    },
    {
      path: "/align-content",
      component: AlignContent
    },
    {
      path: "/align-self",
      component: AlignSelf
    },
    {
      path: "/order",
      component: Order
    },
    {
      path: "/flex",
      component: Flex
    }
  ]
});
