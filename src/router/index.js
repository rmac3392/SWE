import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", component: () => import("~/pages/LoginPage.vue") },
    { path: "/cashier", component: () => import("~/pages/CashierPage.vue") },
    { path:  "/accounting", component: () => import("~/pages/CashierPage.vue") },
    { path: "/admin", component:() => import("~/pages/CashierPage.vue")},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;