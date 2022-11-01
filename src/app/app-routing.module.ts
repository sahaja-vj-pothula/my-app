import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { BankComponent } from './bank/bank.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CartComponent } from './cart/cart.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { GpayComponent } from './gpay/gpay.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { MailsComponent } from './mails/mails.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipesComponent } from './pipes/pipes.component';
import { PostApiJsonComponent } from './post-api-json/post-api-json.component';
import { PowerComponent } from './power/power.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SquareComponent } from './square/square.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { VehilcesComponent } from './vehilces/vehilces.component';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'dashboard',component:DashboardComponent, canActivate:[AuthGuard], children:[
   {path:'calculator',component: CalculatorComponent},
   {path:'interpolation',component: InterpolationComponent},
   {path:'event-binding',component:EventBindingComponent},
   {path:'two-way-binding',component:TwoWayBindingComponent},
   {path:'rectangle',component:RectangleComponent},
   {path:'square',component:SquareComponent},
   {path:'power',component:PowerComponent},
   {path:'event-registration',component:EventRegistrationComponent},
   {path:'employee-registration',component:EmployeeRegistrationComponent},
   {path:'cart',component:CartComponent},
   {path:'gpay',component:GpayComponent},
   {path:'pipes',component:PipesComponent},
   {path:'bank',component:BankComponent},
   {path:'vehilces',component:VehilcesComponent},
   {path:'post-api-json',component:PostApiJsonComponent},
   {path:'mails',component:MailsComponent},
   {path:'bank-details/:id',component:BankDetailsComponent},
   {path:'create-account',component:CreateAccountComponent,canDeactivate:[NotifyGuard]},
   {path:'create-user',component:CreateUserComponent,canDeactivate:[NotifyGuard]},
   {path:'create-product',component:CreateProductComponent,canDeactivate:[NotifyGuard]}
  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
