import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  TotalRecords: number;
  TotalCountries: number;
  TotalDocumentTypes: number;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getSummary().subscribe(data => {
      //sample summary data - [[{"TotalRecords":63}],[{"TotalCountries":21}],[{"TotalDocumentTypes":6}]]
      const summaryData = <any>data;
      this.TotalRecords = summaryData[0][0].TotalRecords;
      this.TotalCountries = summaryData[1][0].TotalCountries;
      this.TotalDocumentTypes = summaryData[2][0].TotalDocumentTypes;
    })
  }

}
