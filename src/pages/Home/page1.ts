import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Page2 } from  '../Categories/page2'
import {AddplacePage} from "../addplace/addplace";
import {ViewplacePage} from "../viewplace/viewplace";

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {
    
  }

  searchPlace(){
    this.navCtrl.setRoot(Page1);
  }

  categories(){
    this.navCtrl.setRoot(Page2);
  }

  addNew(){
    this.navCtrl.push(AddplacePage);
  }

  viewPlace(){
    this.navCtrl.push(ViewplacePage);
  }

}
