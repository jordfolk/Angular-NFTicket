import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './routes/events/events.component';
import { EventInfoComponent } from './routes/event-info/event-info.component';
import { LoginComponent } from './routes/login/login.component';
import { SaleComponent } from './routes/sale/sale.component';
import { AdminComponent } from './routes/admin/admin.component';
import { PublisherComponent } from './routes/publisher/publisher.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventInfoComponent,
    LoginComponent,
    SaleComponent,
    AdminComponent,
    PublisherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
