import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../components/main.vue'
import news from '../components/news.vue'
import news0 from '../components/news0.vue'
import news1 from '../components/news1.vue'
import news2 from '../components/news2.vue'
Vue.use(VueRouter);
export default new VueRouter({
    linkExactActiveClass:'active',
    routes: [
        {
            path: '',   // 跳转路径
            name: 'main0',    // 名称
            component: main  // 组件
        },

        {
            path: '/news',
            name: 'news',
            component: news,
            children:[
                {path:'',component:news0},
                {path:'news1',component:news1},
                {path:'news2',component:news2},
              ]
           
        }
    ]
});
