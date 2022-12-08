import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ImagesService {

  BaseURL = "http://3.17.25.95/carousel";
  loginURL = "http://3.17.25.95/login";
  constructor(private http: HttpClient) { }

  arr = [];
  getUrl(){
    return this.http.get(this.BaseURL);
  }

  getLoginURL(username: any , password: any){
    let data = {
      username: username,
      password : password
    }
    return this.http.post(this.loginURL,data);
  }

}
