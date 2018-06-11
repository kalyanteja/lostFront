import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('http://localhost:3000/lostDocuments');
  }

  getUser(documentId){
    return this.http.get('http://localhost:3000/lostDocuments/' +documentId);
  }

  getPosts(){
    return this.http.get('http://localhost:3000/lostDocuments');
  }

  createDocument(document){
    return this.http.post('http://localhost:3000/createDocument', document, {
      responseType: "json"
    });
  }

  getDocumentTypes(){
    return this.http.get('http://localhost:3000/documentTypes');
  }

  searchDocuments(searchData){
    console.log(searchData);
    let Params = new HttpParams();

    Params = Params.append('docNumber', searchData.docNumber);
    Params = Params.append('docType', searchData.documentType);
    Params = Params.append('givenName', searchData.givenName);
    Params = Params.append('country', searchData.country);

    // Make the API call using the new parameters.
    return this.http.get('http://localhost:3000/searchDocuments/', { params: Params });
  }
}
