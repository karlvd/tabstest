import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  aboutPage: any = AboutPage;
  contactPage: any = ContactPage;

  constructor(public navCtrl: NavController) {

  }

}
