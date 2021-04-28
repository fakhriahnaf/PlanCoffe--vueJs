import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';
import Product from './views/Product.vue';
import ShoppingCart from './views/ShoppingCart.vue';
import Success from './views/Success.vue';


// Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {
    path: '/product/:id',
    props: true,
    name: 'Product',
    component: Product
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'ShoppingChart',
    component: ShoppingCart
  },
  {
    path: '/success',
    name: 'Success',
    component: Success
  },
];

const router =new VueRouter({
  routes
});
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})


