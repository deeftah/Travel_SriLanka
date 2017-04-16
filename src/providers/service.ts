import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Service {
  locationUrl:any;

  constructor(public http: Http) {
    this.locationUrl = "http://127.0.0.1:3000";
  }

  addNewPlace(data:any){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(data);
    return this.http.post(this.locationUrl+"/postData",JSON.stringify(data),{'headers': headers}).map(res=>res.json());
  }

  getPlaces(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.locationUrl+"/getData",{'headers': headers}).map(res=>res.json());
  }

  viewPlaces(id:any){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.locationUrl+"/getOneData/"+id,{'headers': headers}).map(res=>res.json());
  }

  searchPlaces(key:any){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.locationUrl+"/searchData/"+key,{'headers': headers}).map(res=>res.json());
  }

}
