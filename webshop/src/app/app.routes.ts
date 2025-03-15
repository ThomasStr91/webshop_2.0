import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BasketItemComponent } from './components/basket-item/basket-item.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProductsComponent } from './components/products/products.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: 'layout', component: LayoutComponent},
    { path: 'login', component: LoginComponent },
    { path: 'products', component: ProductsComponent, canActivate: [authGuard]},
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'basket', component: BasketItemComponent},
    { path: 'users', component: UserManagementComponent },
    {path: 'history', component:OrderHistoryComponent},
    { path: '**', component: PageNotFoundComponent }
];
