import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Service {

  constructor(public http: Http) {
    console.log('Hello Service Provider');
  }

  addNewPlace(data:any){
    // let headers = new ({ 'Content-Type': 'application/json' });
    console.log(data);
    this.http.get("http://localhost:3000/postData/?postData="+data);
  }
}
