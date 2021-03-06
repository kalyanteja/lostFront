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
  genderValues: string[];
  message: any;
  countries: {};

  document = {
    id: "",
    documentType: Object,
    documentNumber: "",
    givenName: "",
    country: "",
    validityDate: "",
    dateOfBirth: "",
    issuedOn: "",
    sex: "",
    submitterEmail: "",
  }

  constructor(private data: DataService) { }

  onSubmit(){
    this.data.createDocument(this.document).subscribe(data => {
        const insertedDocId = (<any>data[0]).id;
        this.document.id = insertedDocId;
        this.message = "Details logged!";
      }
    );
  }

  ngOnInit() {
    this.genderValues = ["Male", "Female"];

    this.data.getDocumentTypes().subscribe(data => {
      this.documentTypes = data;
      this.document.documentType = this.documentTypes[0].Id;
    });

    //get all countries from a local json file
    this.data.getCountries().subscribe(data => {
      this.countries = (<any>data).Countries;
      this.document.country = this.countries[0].Name;
    });
  }
}
