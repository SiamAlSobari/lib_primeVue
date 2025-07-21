import { createRouter, createWebHistory } from "vue-router";
import RootPage from "./pages/rootPage.vue";
import LoginPage from "./pages/auth/loginPage.vue";
import MainLayout from "./layouts/main-layout.vue";
import RegisterPage from "./pages/auth/registerPage.vue";
import AuthLayout from "./layouts/auth-layout.vue";
import { useSessionStore } from "./stores/use-session";
import ProfilePage from "./pages/user/profilePage.vue";

const routes = [
    {
        path: "/",
        component: MainLayout,
        children: [
            { path: "/", component: RootPage },
            {path:"/profile",component:ProfilePage}
        ],
    },
    {
        path: "/auth",
        component: AuthLayout,
        children: [
            { path: "login", component: LoginPage },
            { path: "register", component: RegisterPage },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, _from, next) => {
    const useSession = useSessionStore();
    await useSession.getSession();
    if (to.path == "/" && !useSession.isLogin) {
        next("/auth/login");
    }
    next();
});

export default router;
