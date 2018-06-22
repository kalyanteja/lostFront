import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //prod server - http://lostidapi-env.5pqwkmbads.ap-southeast-1.elasticbeanstalk.com/
  //local url - http://localhost:3000/
  private apiUrl = "http://lostidapi-env.5pqwkmbads.ap-southeast-1.elasticbeanstalk.com/";
  private countryApiUri = "./assets/json/countries.json";

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.apiUrl}lostDocuments`);
  }

  getUser(documentId){
    return this.http.get(`${this.apiUrl}lostDocuments/${documentId}`);
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
    console.log(searchData);
    let Params = new HttpParams();

    Params = Params.append('docNumber', searchData.docNumber);
    Params = Params.append('docType', searchData.documentType);
    Params = Params.append('givenName', searchData.givenName);
    Params = Params.append('country', searchData.country);

    // Make the API call using the new parameters.
    return this.http.get(`${this.apiUrl}searchDocuments/`, { params: Params });
  }

  getSummary(){
    return this.http.get(`${this.apiUrl}summary`);
  }

  getCountries(){
    return this.http.get(this.countryApiUri);
  }
}
