import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const NotFound = ()=>import("../pages/Common/NotFound.vue")
const NotRight = ()=>import("../pages/Common/NotRight.vue")
const Home = ()=>import("../pages/Home/index.vue")
const Login = ()=>import("../pages/Login/Login.vue")
const Order = ()=>import("../pages/Order/Order.vue")
const Personal = ()=>import("../pages/Personal/Personal.vue")
const Search = ()=>import("../pages/Search/Search.vue")


const router = new Router({
    routes:[
        {path:'/',redirect:'/home'},
        {
            path:'/home',
            component:Home,
            
        },
        {path:'/403',component:NotRight},
        {path:'/login',component:Login},
        {
            path:"/order",
            component:Order,
            meta:{showFooter:true}
        },
        {
            path:"/personal",
            component:Personal,
            meta:{showFooter:true}
        },
        {
            path:"/search",
            component:Search,
            meta:{showFooter:true}
        },
        {path:"*",component:NotFound}
    ]
})

export default router