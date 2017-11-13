import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Category from './components/Category.vue'
import Cart from './components/Cart.vue'
import Me from './components/Me.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueRouter);
Vue.use(VueAwesomeSwiper);

const router=new VueRouter({
    mode:"history",
    routes:[
        {path:'/home',component:Home},
        {path:'/category',component:Category},
        {path:'/cart',component:Cart},
        {path:'/me',component:Me},
        {path:'/',redirect:"/home"}
    ]
});
new Vue({
  el: '#app',
    router,
  render: h => h(App)
})
