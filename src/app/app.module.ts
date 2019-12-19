import { CoffeeService } from './coffee.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CoffeeCreateComponent } from './coffee-create/coffee-create.component';
import { CoffeeCustomerComponent } from './coffee-customer/coffee-customer.component';
import { CoffeeEditComponent } from './coffee-edit/coffee-edit.component';
import { CoffeeOwnerComponent } from './coffee-owner/coffee-owner.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CoffeeCreateComponent,
    CoffeeCustomerComponent,
    CoffeeEditComponent,
    CoffeeOwnerComponent,
    CoffeeListComponent
  ],
  
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CoffeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
