import { HttpClient } from '@angular/common/http';
import { Service } from '@angular/core';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

    // _url = 'http://localhost:1200';
    _url = 'https://mechtrix-backend-1.onrender.com/';
    constructor(private _http: HttpClient) { }
    register(userData: any){
      return  this._http.post<any>(this._url+`/enroll`, userData)
    }

    getuserlogindata(){
      return this._http.post<any>(this._url+`/getuserloogin`,[])
    }

        getApplications(){
      return this._http.post<any>(this._url+`/getApplications`,[])
    }
}
