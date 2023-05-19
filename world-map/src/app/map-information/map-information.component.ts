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
  @Input() countryCapital!: string;
  @Input() countryLongitude!: string;
  @Input() countryLatitude!: string;
  @Input() countryRegion!: string;
  
  


 /* setCountryInformation(countryName: string, population: number, income: number) {
    // Assign the received information to the component properties
    
    // Assign three other items as needed

    
  } */
  
  

  


  constructor() { }

  ngOnInit(): void { }
}