import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddContactComponent} from './components/schedule/add-contact/add-contact.component';
import {ListContactsComponent} from './components/schedule/list-contacts/list-contacts.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'add-contact',
    component: AddContactComponent
  },
  {
    path: 'list-contacts',
    component: ListContactsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list-contacts'
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    // {useHash: true}   permite poner en la url dominio/#/path   un #
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
