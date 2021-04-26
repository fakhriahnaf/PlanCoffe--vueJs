import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';
import Product from './views/Product.vue';


// Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/',
    name: 'Home',
    component: Home
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


