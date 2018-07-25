import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //prod server - http://lostidapi-env.5pqwkmbads.ap-southeast-1.elasticbeanstalk.com/
  //local url - http://localhost:8081/
  private apiUrl = "http://localhost:8081/";
  private countryApiUri = "./assets/json/countries.json";

  constructor(private http: HttpClient, private authService: AuthService) { }

  getUsers(){
    return this.http.get(`${this.apiUrl}lostDocuments`);
  }

  getUser(documentId){
    return this.http.get(`${this.apiUrl}lostDocuments/${documentId}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.accessToken}`)
    });
  }

  getPosts(){
    return this.http.get(`${this.apiUrl}lostDocuments`);
  }

  createDocument(document){
    return this.http.post(`${this.apiUrl}createDocument`, document, {
      responseType: "json"
    });
  }

  getDocumentTypes(){
    return this.http.get(`${this.apiUrl}documentTypes`);
  }

  searchDocuments(searchData){
    let Params = new HttpParams();

    Params = Params.append('docNumber', searchData.docNumber);
    Params = Params.append('docType', searchData.documentType);
    Params = Params.append('givenName', searchData.givenName);
    Params = Params.append('country', searchData.country);

    // Make the API call using the new parameters.
    return this.http.get(`${this.apiUrl}searchDocuments/`, { params: Params });
  }

  searchDocumentsCount(searchData){
    let Params = new HttpParams();

    Params = Params.append('docNumber', searchData.docNumber);
    Params = Params.append('docType', searchData.documentType);
    Params = Params.append('givenName', searchData.givenName);
    Params = Params.append('country', searchData.country);

    // Make the API call using the new parameters.
    return this.http.get(`${this.apiUrl}searchDocumentsCount/`, { params: Params });
  }

  getSummary(){
    return this.http.get(`${this.apiUrl}summary`);
  }

  getCountries(){
    return this.http.get(this.countryApiUri);
  }
}
