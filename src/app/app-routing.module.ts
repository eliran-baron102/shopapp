import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {NewCostumerComponent} from './new-costumer/new-costumer.component';
import {OrdersComponent} from './orders/orders.component';
import {StockComponent} from './stock/stock.component';
import {UpdatecostumerComponent} from './updatecostumer/updatecostumer.component';
import {CostumersComponent} from './costumers/costumers.component';
import {LoginComponent} from './login/login.component'
import {CustomersinfoComponent} from  './customersinfo/customersinfo.component'
import {NeworderComponent} from './neworder/neworder.component'
import {OrderinfoComponent} from './orderinfo/orderinfo.component'
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
  path:'Home',
  component: HomeComponent,
},
{
  path:'Updatecostumer/:cid',
  component: UpdatecostumerComponent,
},
{
  path:'Costumers',
  component: CostumersComponent,
},
{
  path:'Stock',
  component: StockComponent,
},
{
  path:'Orders',
  component: OrdersComponent,
},
{
  path:'NewCostumer',
  component: NewCostumerComponent,
},
{
  path: 'Customersinfo/:cid',
  component:CustomersinfoComponent,
},
{
path: 'Neworder/:cid',
component:NeworderComponent,
},
{
  path:'Orderinfo/:orderid',
  component:OrderinfoComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
