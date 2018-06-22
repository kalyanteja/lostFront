import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user$: any;
  countries: any[];

  constructor(
    private data: DataService,
    private route: ActivatedRoute) {

    this.route.params.subscribe(params => this.user$ = params.id)
  }

  ngOnInit() {
    this.data.getUser(this.user$).subscribe(data => {
      this.user$ = data;
      
      //get all countries from a local json file and set user country flag
      this.data.getCountries().subscribe(data => {
        this.countries = (<any>data).Countries;
        this.user$.countryFlag = this.getCountryFlagUrl(this.user$.Country);
      });
    });
  }

  getCountryFlagUrl(countryName: string){
    console.log(countryName);
    if (countryName && this.countries && this.countries.length > 0){
      return this.countries.find(c => c.name === countryName).flag;
    }
    
    return "";
  }
}
