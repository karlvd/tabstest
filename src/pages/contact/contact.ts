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
    this.loadData1();
    this.loadData2();
    this.anything3 = 'Anthing set in ionViewDidLoad()';
  }
  ngOnInit() {
    this.anything4 = 'Anthing set in ngOnInit()';
    this.loadData3();
    this.loadData4();
  }


  loadData1() {
    // Called from ionViewDidLoad()
    this.stuff1 = {
      stuff: ['x', 'y', 'z']
    }

  }

  loadData2() {
    // Called from ionViewDidLoad()
    this.stuffProvider.getStuff().subscribe((response) => {
      console.log('provider success 1');
      this.stuff2 = {
        stuff: response.data
      };
      console.log(this.stuff2);
    }, (error) => {
      console.log('provider error 1 : ' + error);
    });

  }

  loadData3() {
    // Called from ngOnInit()
    this.stuff3 = {
      stuff: ['x', 'y', 'z']
    };

  }

  loadData4() {
    // Called from ngOnInit()
    this.stuffProvider.getStuff().subscribe((response) => {
      console.log('provider success 2');
      this.stuff4 = {
        stuff: response.data
      };
      this.stuff5 = {
        stuff: ['x', 'y', 'z']
      };


    }, (error) => {
      console.log('provider error 2 : ' + error);
    });


  }

}
