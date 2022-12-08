import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getZipcodesByState(state: string) {
    return this.http.get(`https://wb274qawud.execute-api.us-east-1.amazonaws.com/default/get-agi-by-zipcode?state=${state}`);
  }

  public getFullZipCodeData(state: string, zipcode: string) {
    return this.http.get(`https://wb274qawud.execute-api.us-east-1.amazonaws.com/default/get-agi-by-zipcode?state=${state}&zipcode=${zipcode}`);
  }
}
