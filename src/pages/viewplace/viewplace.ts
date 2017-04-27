import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Service} from "../../providers/service";
import {MapviewPage} from "../mapview/mapview";

/*
  Generated class for the Viewplace page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-viewplace',
  templateUrl: 'viewplace.html'
})
export class ViewplacePage {
  placeDetails:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private  ServiceProvider:Service) {}

  ionViewDidLoad() {
    //console.log();
    this.ServiceProvider.viewPlaces(this.navParams.get('id')).subscribe(res=>{
      this.placeDetails = res;
    });
  }

  viewMap(){
    this.navCtrl.push(MapviewPage);
  }

}
