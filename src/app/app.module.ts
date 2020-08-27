import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

// Components
import {AppComponent} from './app.component';
import {ScheduleComponent} from './components/schedule/schedule.component';
import {ListContactsComponent} from './components/schedule/list-contacts/list-contacts.component';
import {AddContactComponent} from './components/schedule/add-contact/add-contact.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

// Modules
import {AppRoutingModule} from './app-routing.module';
import { CapitalizePipe } from './pipes/capitalize.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    ListContactsComponent,
    AddContactComponent,
    NotFoundComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
