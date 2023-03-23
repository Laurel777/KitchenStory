import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdmincheckComponent } from './admincheck/admincheck.component';

import { AdminuserComponent } from './adminuser/adminuser.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodComponent } from './food/food.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisternewuserComponent } from './registernewuser/registernewuser.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsercheckComponent } from './usercheck/usercheck.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:'search/:searchItem',component:FoodComponent},
  {path:"home", component:HomeComponent},
  {path:'food/:id',component:FoodpageComponent},
  {path:'cartpage',component:CartPageComponent},
  {path:"payment",component:PaymentComponent},
  {path:"user", component:UserListComponent},
  {path:"food", component:FoodComponent},
  {path:"admin", component:AdminComponent},
  {path:"usercheck", component:UsercheckComponent},
  
  {path:"adminuser", component:AdminuserComponent},
  {path:"admin/logout", component:LogoutComponent},
  {path:"usercheck/newuser", component:RegisternewuserComponent},
  {path:"admin/foodlist" , component:FoodListComponent},
  {path:"admin/userlist",component:UserListComponent},
  {path:"admincheck", component:AdmincheckComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
