import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataService} from '../data.service';

@Component({
  selector: 'app-found',
  templateUrl: './found.component.html',
  styleUrls: ['./found.component.scss']
})
export class FoundComponent implements OnInit {

  documentTypes: any;
  message: any;

  document = {
    documentType: {},
    documentNumber: "",
    givenName: "",
    country: ""
  }

  constructor(private data: DataService) { }

  onSubmit(){
    this.data.createDocument(this.document).subscribe(data => {
        this.message = data;
      }
    );
  }

  log(x) {
    console.log(x);
  }

  ngOnInit() {
    this.message = undefined;
    this.data.getDocumentTypes().subscribe(data =>
      this.documentTypes = data
    )
  }
}
