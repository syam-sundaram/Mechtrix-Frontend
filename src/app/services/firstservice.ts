import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class Firstservice{

  // private api='http://localhost:1200';
  private api='https://mechtrix-backend-1.onrender.com/';

  constructor(private http:HttpClient){}

  submitApplication(data:any){

    return this.http.post<any>(
      this.api+'/submit-application',
      data
    );

  }

  getApplications(){

    return this.http.get<any>(
      this.api+'/getApplications'
    );

  }

}