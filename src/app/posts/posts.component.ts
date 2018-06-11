import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Object;
  documentTypes: any;

  searchResults: any;

  searchData = {
    documentType: Object,
    docNumber: "",
    givenName: "",
    country: ""
  };

  constructor(private data: DataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.data.getDocumentTypes().subscribe(data => {
      this.documentTypes = data;
      this.searchData.documentType = this.documentTypes[0].Id;
    })
  }

  search(){
    console.log('search clicked');
    this.data.searchDocuments(this.searchData).subscribe(data =>{
      console.log(data);
      this.searchResults = data;
    })
  }
}
