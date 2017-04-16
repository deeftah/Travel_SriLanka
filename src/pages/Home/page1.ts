import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Page2 } from  '../Categories/page2'
import {AddplacePage} from "../addplace/addplace";
import {ViewplacePage} from "../viewplace/viewplace";
import {Service} from "../../providers/service";

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  placesList:any;

  constructor(public navCtrl: NavController, private ServiceProvider:Service) {
    this.placeAddForm();
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

  viewPlace(id:any){
    //console.log(id);
    this.navCtrl.push(ViewplacePage,{id:id});
  }

  public placeAddForm(){
    this.ServiceProvider.getPlaces().subscribe(res=>{

      //console.log(res);
      this.placesList = res;

    });
  }

}
