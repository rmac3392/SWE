import { createRouter, createWebHistory } from "vue-router";



const router = createRouter({
    history: createWebHistory(),
    routes : [
        { path: "/", component: () => import("~/pages/LoginPage.vue") },
        { path: "/displayPage", component: () => import("~/pages/DisplayPage.vue") },
        { path: "/adminPage", component:() => import("~/pages/AdminPage.vue")},
        { path: "/forgotPassword", component:() => import("~/pages/ForgotPassword.vue")},
        { path: "/newPassword", component:() => import("~/pages/CreateNewPage.vue")},
        { path: "/cashierPage", component:() => import("~/pages/CashierPageTransactionTab.vue")},
        
    ]
});

export default router;