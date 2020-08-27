import {Injectable} from '@angular/core';
import {Contact} from '../interfaces/Contact';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  private _listContacts: Contact[];

  constructor(private http: HttpClient) {
    this._listContacts = [];
  }

  get listContacts(): Contact[] {
    return this._listContacts;
  }

  addContact(contact: Contact) {
    this._listContacts.push(contact);
  }

  getContactsDefaults() {
    return this.http.get<Contact[]>('assets/data/contacts.json').pipe(
      map(listResults => {
        this._listContacts = listResults;
        return listResults;
      })
    );
  }
}
