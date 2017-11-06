/**
 * @ 路由跳转
 * @author shan-er
 */
import Vue from 'vue';
import Router from 'vue-router';
const homePage = () => import ('./views/home.vue');
const aboutPage = () => import ('./views/about.vue');

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        component: homePage
    }, {
        path: '/about',
        component: aboutPage
    }]
});