import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { StuffProvider } from '../../providers/stuff';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  stuff: any;

  constructor(public navCtrl: NavController, private stuffProvider: StuffProvider) {

  }

  ionViewDidLoad() {
    console.log('load');
    this.loadData();
  }

  loadData() {
    this.stuffProvider.getStuff().subscribe((response) => {
      this.stuff = {
        stuff: response.data
      };
      console.log(this.stuff);
    });

  }

}
