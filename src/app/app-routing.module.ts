import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './routes/events/events.component';
import { EventInfoComponent } from './routes/event-info/event-info.component';
import { PublisherComponent } from './routes/publisher/publisher.component';
import { AdminComponent } from './routes/admin/admin.component';
import { LoginComponent } from './routes/login/login.component';



const routes: Routes = [
    {path: '', redirectTo: '/events', pathMatch: 'full' },
    {path: 'event/id', component: EventInfoComponent},
    {path: 'publisher', component: PublisherComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
