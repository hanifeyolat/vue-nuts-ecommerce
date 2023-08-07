
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ProductsPage from "./pages/ProductsPage.vue";
import ProductDetailsPage from "./pages/ProductDetailsPage.vue";
import CartPage from "./pages/CartPage.vue";
import CreateOrderPage from "./pages/CreateOrderPage.vue";
import OrderCreatedPage from "./pages/OrderCreatedPage.vue";
import LoginPage from "./pages/LoginPage.vue";
import RegisterPage from "./pages/RegisterPage.vue";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.vue";
import MyOrderPage from "./pages/customer/MyOrderPage.vue";
import MyOrderDetailsPage from "./pages/customer/MyOrderDetailsPage.vue";
import MyFavoriesPage from "./pages/customer/MyFavoriesPage.vue";

import AdminLoginPage from "./pages/admin/AdminLoginPage.vue";
import AdminHomePage from "./pages/admin/AdminHomePage.vue";
import AdminProductsPage from "./pages/admin/AdminProductsPage.vue";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage.vue";
import AdminCustomersPage from "./pages/admin/AdminCustomersPage.vue";
import AdminCategoriesPage from "./pages/admin/AdminCategoriesPage.vue";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage.vue";
import AdminAddEditProductPage from "./pages/admin/AdminAddEditProductPage.vue";

const routes = [
    { path: "/", name:"HomePage", component: HomePage },
    { path: "/login", name:"LoginPage", component: LoginPage },
    { path: "/register", name:"RegisterPage", component: RegisterPage },
    { path: "/forgot-password", name:"ForgotPasswordPage", component: ForgotPasswordPage },
    
    { path: "/products/:categoryName", name:"ProductsPage", component: ProductsPage },
    { path: "/product-details", name:"DetailPage", component: ProductDetailsPage },
    { path: "/cart", name:"CartPage", component: CartPage },
    { path: "/create-order", name:"CreateOrderPage", component: CreateOrderPage },
    { path: "/order-created", name:"OrderCreatedPage", component: OrderCreatedPage },
    { path: "/my-orders", name:"MyOrderPage", component: MyOrderPage },
    { path: "/order/:orderID", name:"MyOrderDetailsPage", component: MyOrderDetailsPage },
    { path: "/my-favories", name:"MyFavoriesPage", component: MyFavoriesPage },
    
    { path: "/admin/login", name:"AdminLoginPage", component: AdminLoginPage },
    
    { path: "/admin/home", name:"AdminHomePage", component: AdminHomePage },
    { path: "/admin/products", name:"AdminProductsPage", component: AdminProductsPage },
    { path: "/admin/add-edit-product", name:"AdminAddEditProductPage", component: AdminAddEditProductPage },
    { path: "/admin/orders", name:"AdminOrdersPage", component: AdminOrdersPage },
    { path: "/admin/order/:orderID", name:"AdminOrderDetailsPage", component: AdminOrderDetailsPage },
    { path: "/admin/customers", name:"AdminCustomersPage", component: AdminCustomersPage },
    { path: "/admin/categories", name:"AdminCategoriesPage", component: AdminCategoriesPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router