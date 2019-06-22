import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantDetailComponent } from './restaurant/restaurant-detail/restaurant-detail.component';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { LoginComponent } from './auth/login/login.component';
import { FoodListComponent } from './food/food-list/food-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomerComponent } from './dashboard/customer/customer.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: SignUpComponent},
  { path: 'restaurant/:id', component: RestaurantDetailComponent},
  { path: 'restaurant', component: CustomerComponent },
  { path: 'foodList/:id', component: FoodListComponent},
  // { path: '',   redirectTo: '/restaurant', pathMatch: 'full' },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
  // { path: 'restaurantDetail/:id', component: RestaurantDetailComponent, data: {
  //     animation: 'restaurant'   }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
