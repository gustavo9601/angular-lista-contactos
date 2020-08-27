import {Component, OnInit} from '@angular/core';
import {Contact} from '../../../interfaces/Contact';
import {ContactService} from '../../../services/contact.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  public contact: Contact;

  constructor(private _contactService: ContactService,
              private router: Router) {
  }

  ngOnInit() {

    // Incializando el contacto
    this.contact = {
      'name': '',
      'surname': '',
      'description': '',
      'sex': '',
      'email': '',
      'telephone': '',
      'company': ''
    };
  }


  saveContact(form) {
    console.log('valor_contact', this.contact);
    this._contactService.addContact(this.contact);
    console.log(this._contactService.listContacts);
    this.router.navigate(['/list-contacts/']);
  }
}
