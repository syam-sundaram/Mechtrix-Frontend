import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../employee';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Tutorialservice {
    private _url: string = "/pages/about/employees.json";

    private api_url ='http://localhost:1500/'
    constructor(private http: HttpClient) {

    }
    
    GetEmployeehttp(): Observable<IEmployee[]> {
        return this.http.get<IEmployee[]>(this._url);
    }



    getEmployee() {
        return [
            { "id": 1, "name": "Andrew", "age": 30 },
            { "id": 1, "name": "Andrew", "age": 30 }
        ]
    }

}
