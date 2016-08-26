/**
 * Created by rigel on 8/25/16.
 */
import { WebAPI } from './web-api';
import { inject } from 'aurelia-framework';
import { ContactUpdated, ContactViewed } from './messages';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(WebAPI, EventAggregator)
export class ContactList {
  /*static inject() { return [WebAPI] };*/

  constructor(api, ea) {
    this.api = api;
    this.contacts = [];

    ea.subscribe(ContactViewed, msg => this.select(msg.contact));
    ea.subscribe(ContactUpdated, msg => {
      let id = msg.contact.id;
      let found = this.contacts.find( x => x.id == id);
      Object.assign(found, msg.contact);
    });
  }

  created() {
    this.api.getContactList().then( contacts => this.contacts = contacts );
  }

  select(contact) {
    this.selectedId = contact.id;
    return true;
  }
}
