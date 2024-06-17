import { Country } from '../../interfaces/country';
import { CountriesService } from './../../services/countries.service';
import { Component } from '@angular/core';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor( private CountriesService: CountriesService ) {}

  searchByCountry( term: string ): void {
    this.CountriesService.searchCountry( term )
    .subscribe( countries => {
      this.countries = countries;
    });
  }

}
