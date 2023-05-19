import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',]
})
export class AppComponent {
  selectedSvgId: string = '';
  selectedIncome: string = '';
  
  selectedCapital: string = '';
  selectedLongitude: string = '';
  selectedLatitude: string = '';
  selectedRegion: string = '';

  onSvgIdSelected(svgId: string) {
    this.selectedSvgId = svgId;
  }

  onIncomeSelected(incomeId: string) {
    this.selectedIncome = incomeId;
  }



  onCapitalSelected(capital: string) {
    this.selectedCapital = capital;
  }

  onLongitudeSelected(longitude: string) {
    this.selectedLongitude = longitude;
  }

  onLatitudeSelected(latitude: string) {
    this.selectedLatitude = latitude;
  }

  onRegionSelected(region: string) {
    this.selectedRegion = region;
  }
}
