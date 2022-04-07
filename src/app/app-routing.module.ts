import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { AllproductComponent } from './components/allproduct/allproduct.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DetailsComponent } from './components/details/details.component';
import { MainComponent } from './components/main/main.component';
import { ProductComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
// import { ProfileGuard } from './guard/profile.guard';

const routes: Routes = [{ path: '', component: MainComponent},
{ path: 'details/:masp', component: DetailsComponent},
{ path: 'cart', component: CartComponent},
{ path: 'account', component: AccountComponent},
{ path: 'products/loaisp/:tenloaisp', component: ProductComponent},
{ path: 'allproducts', component: AllproductComponent},
{ path: 'register', component: RegisterComponent},
{ path: 'checkout', component: CheckoutComponent},
// { path: 'profile', component: ProfileComponent, canActivate:[ProfileGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
