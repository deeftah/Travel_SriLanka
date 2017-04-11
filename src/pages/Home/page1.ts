import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Page2 } from  '../Categories/page2'
import {AddplacePage} from "../addplace/addplace";

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {
    
  }

  searchPlace(){
    this.navCtrl.push(Page1);
  }

  categories(){
    this.navCtrl.push(Page2);
  }

  addNew(){
    this.navCtrl.push(AddplacePage);
  }

}
