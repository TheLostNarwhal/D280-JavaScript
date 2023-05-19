import { Component, OnInit, Input } from '@angular/core';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-map-information',
  templateUrl: './map-information.component.html',
  styleUrls: ['./map-information.component.css']
})

export class MapInformationComponent implements OnInit {
  @Input() countryId!: string;
  @Input() countryIncome!: string;
  
  

  // Declare three other propertie

  bankerName = "Elizabeth Franklin";
  bankerAddress = '123 Main Street';
  bankerCity = 'Hoboken';
  bankerState = 'NJ';
  bankerZip = '07030';
  bankerPhone = '(201) 748-6000';
  
  setCountryInformation(countryName: string, population: number, income: number) {
    // Assign the received information to the component properties
    
    // Assign three other items as needed

    
  }
  
  

  


  constructor() { }

  ngOnInit(): void { }
}