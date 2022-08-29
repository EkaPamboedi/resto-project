import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import LoginPage  from "./components/Login.vue";
import AddResto  from "./components/AddResto.vue";
import UpdateResto  from "./components/UpdateResto.vue";
import {createRouter, createWebHistory} from "vue-router";


const routes = [
    {
        name:"HomePage",
        component: HomePage,
        path:"/",
    },
    {
        name:"SignUp",
        component: SignUp,
        path: "/sign-up",
    },
    {
        name:"Login-page",
        component: LoginPage,
        path: "/login",
    },
    {
        name:"AddResto",
        component: AddResto,
        path: "/AddResto",
    },
    {
        name:"UpdateResto",
        component: UpdateResto,
        path: "/UpdateResto",
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;