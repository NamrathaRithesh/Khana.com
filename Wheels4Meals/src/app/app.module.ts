import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { MatFormFieldModule } from '@angular/material';
import { CustomerComponent } from './dashboard/customer/customer.component';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './shared/header/header.component';
import { RestaurantDetailComponent } from './restaurant/restaurant-detail/restaurant-detail.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { RestaurantService } from './restaurant/restaurant.service';
import { FoodListComponent } from './food/food-list/food-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './orders/cart/cart.component';
import { RestaurantSortComponent } from './restaurant/restaurant-sort/restaurant-sort.component';
import { RestaurantSearchComponent } from './restaurant/restaurant-search/restaurant-search.component';
import { OrdersComponent } from './orders/orders/orders.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { ViewOrderComponent } from './orders/view-order/view-order.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    CustomerComponent,
    RestaurantListComponent,
    RestaurantDetailComponent,
    HeaderComponent,
    FoodListComponent,    
    PageNotFoundComponent,
    CartComponent,
    RestaurantSortComponent,
    RestaurantSearchComponent,
    OrdersComponent,
    OrderDetailsComponent,
    ViewOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MaterialModule,
    Ng2OrderModule
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent],
  entryComponents:[OrderDetailsComponent,ViewOrderComponent]
})
export class AppModule { }
