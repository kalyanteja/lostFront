import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute} from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Object;
  documentTypes: any;
  searchResultsCount: number;
  searchResults: any;
  showResults: boolean;

  searchData = {
    documentType: Object,
    docNumber: "",
    givenName: "",
    country: ""
  };

  constructor(private data: DataService, private route: ActivatedRoute, public auth: AuthService) {
  }

  ngOnInit() {
    this.data.getDocumentTypes().subscribe(data => {
      this.documentTypes = data;
      this.searchData.documentType = this.documentTypes[0].Id;
    })
  }

  search(){
    console.log('search clicked' + this.auth.authenticated);

    if (this.auth.authenticated) {
      this.data.searchDocuments(this.searchData).subscribe(data =>{
        this.searchResults = data;
      })
    } else {
      this.data.searchDocumentsCount(this.searchData).subscribe(data =>{
        console.log("searchDocumentsCount");
        console.log(data);
        this.searchResultsCount = (<any>data).searchCount;
      })
    }
  }

  loginFromSearchPage(){

    this.auth.login();
    console.log('...changed redirect.....');

    console.log(this.auth.auth0);
  }
}
