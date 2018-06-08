import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
