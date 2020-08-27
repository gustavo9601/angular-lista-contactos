import {Component, OnInit} from '@angular/core';
import {Contact} from '../../../interfaces/Contact';
import {ContactService} from '../../../services/contact.service';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  public listContacts: Contact[];

  constructor(private _contactService: ContactService) {
    this.listContacts = [];
  }

  ngOnInit() {
    console.log()
    if (this._contactService.listContacts.length > 0) {
      this.listContacts = this._contactService.listContacts;

    } else {
      // Inicializando la data en el servicio
      this._contactService.getContactsDefaults().subscribe(
        (resultContacts) => {
          this.listContacts = resultContacts;
        }
      );
    }
  }

}
