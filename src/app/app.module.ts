import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { EventInfoComponent } from './event-info/event-info.component';
import { LoginComponent } from './login/login.component';
import { SaleComponent } from './sale/sale.component';
import { EventUserComponent } from './event-user/event-user.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventInfoComponent,
    LoginComponent,
    SaleComponent,
    EventUserComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
