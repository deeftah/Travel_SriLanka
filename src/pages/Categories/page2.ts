import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {Page1} from "../Home/page1";
import {AddplacePage} from "../addplace/addplace";

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

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

}
