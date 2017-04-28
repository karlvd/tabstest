import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { StuffProvider } from '../../providers/stuff';



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {
  stuff1: any;
  stuff2: any;
  stuff3: any;
  stuff4: any;
  stuff5: any;
  stuff6: any;
  anything1: any = 'Anything set in class';
  anything2: any;
  anything3: any;
  anything4: any;


  constructor(public navCtrl: NavController, private stuffProvider: StuffProvider) {
    this.anything2 = 'Anthing set in constructor';

  }

  ionViewDidLoad() {
    console.log('load tab2');
    this.anything3 = 'Anthing set in ionViewDidLoad()';
    // Any data set here is not accessible
    this.stuff1 = {
      stuff: ['x', 'y', 'z']
    }

    this.stuffProvider.getStuff().subscribe((response) => {
      // Any data set here is not accesible
      this.stuff2 = {
        stuff: response.data
      };
      // This fires correctly
      console.log('provider success 1');
      // This log is printed
      console.log(this.stuff2);
    }, (error) => {
      console.log('provider error 1 : ' + error);
    });

  }
  ngOnInit() {
    this.anything4 = 'Anthing set in ngOnInit()';
    // Any data set here is accessible
    this.stuff3 = {
      stuff: ['x', 'y', 'z']
    };

    this.stuffProvider.getStuff().subscribe((response) => {
      // Any data set here is not accesible
      this.stuff4 = {
        stuff: response.data
      };
      // Not even this
      this.stuff5 = {
        stuff: ['x', 'y', 'z']
      };
      // This fires correctly
      console.log('provider success 2');

    }, (error) => {
      console.log('provider error 2 : ' + error);
    });
  }

}
