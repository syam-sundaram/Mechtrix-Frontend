import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class Firstservice{

  private api='http://localhost:1200';

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