import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


import main from "@/page/main.vue";
import other from "@/page/other.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path:"/main/:index",
        name:"主页",
        component: main
    },
    {
        path: "/other",
        name: "其他页面",
        component: other
    }
  ]
})
