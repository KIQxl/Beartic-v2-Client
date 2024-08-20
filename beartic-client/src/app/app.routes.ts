import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { CustomersComponent } from './pages/customers/customers.component';

export const routes: Routes = [
    {
        path: "", component: LoginComponent
    },
    {
        path: "home", component: HomeComponent
    },
    {
        path: "products", component: ProductsComponent
    },
    {
        path: "orders", component: OrdersComponent
    },
    {
        path: "customers", component: CustomersComponent
    }
];
