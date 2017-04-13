import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Service {

  constructor(public http: Http) {
    console.log('Hello Service Provider');
  }

  addNewPlace(data:any){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(data);
    return this.http.post("http://127.0.0.1:3000/postData",JSON.stringify(data),{'headers': headers}).map(res=>res.json());
  }


}
