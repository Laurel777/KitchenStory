import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { FoodComponent } from './food/food.component';
import { UsercheckComponent } from './usercheck/usercheck.component';
import { AdmincheckComponent } from './admincheck/admincheck.component';

import { AdminuserComponent } from './adminuser/adminuser.component';
import { FoodListComponent } from './food-list/food-list.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisternewuserComponent } from './registernewuser/registernewuser.component';
import { SearchComponent } from './search/search.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HomeComponent,
    AdminComponent,
    FoodComponent,
    UsercheckComponent,
    AdmincheckComponent,
 
    AdminuserComponent,
    FoodListComponent,
    LogoutComponent,
    RegisternewuserComponent,
    SearchComponent,
    CartPageComponent,
    FoodpageComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
