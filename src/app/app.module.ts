import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SquareComponent } from './square/square.component';
import { PowerComponent } from './power/power.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { CartComponent } from './cart/cart.component';
import { GpayComponent } from './gpay/gpay.component';
import { PipesComponent } from './pipes/pipes.component';
import { BankComponent } from './bank/bank.component';
import { PricePipe } from './price.pipe';
import { PercentagePipe } from './percentage.pipe';
import { AgePipe } from './age.pipe';
import { HttpClientModule} from '@angular/common/http';
import { VehilcesComponent } from './vehilces/vehilces.component';
import { PostApiJsonComponent } from './post-api-json/post-api-json.component';
import { MailsComponent } from './mails/mails.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { CreateAccountComponent } from './create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    CalculatorComponent,
    InterpolationComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    RectangleComponent,
    SquareComponent,
    PowerComponent,
    EventRegistrationComponent,
    EmployeeRegistrationComponent,
    CartComponent,
    GpayComponent,
    PipesComponent,
    BankComponent,
    PricePipe,
    PercentagePipe,
    AgePipe,
    VehilcesComponent,
    PostApiJsonComponent,
    MailsComponent,
    BankDetailsComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
