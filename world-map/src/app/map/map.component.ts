import { Component, Output,ElementRef, EventEmitter, ViewChild} from '@angular/core';
import { MapInformationComponent } from '../map-information/map-information.component';
import { CountryApiService } from '../api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  // Your component logic goes here
 
  constructor(
    private elementRef: ElementRef,
    private countryApiService: CountryApiService
    
    ) {}

  ngAfterViewInit() {
    const svgElement = this.elementRef.nativeElement.querySelector('svg');
    const pathElements = svgElement.querySelectorAll('path');
    pathElements.forEach((path: SVGPathElement) => {
      /*path.addEventListener('mouseover', this.handleMouseOver.bind(this)); */
      path.addEventListener('mouseout', this.handleMouseOut.bind(this));
      path.addEventListener('click', this.handleClick.bind(this));
    });
  }

  /*handleMouseOver(event: MouseEvent) {
    const path = event.target as SVGPathElement;
    const countryId = path.id;
    // Emit the countryId to the parent component or perform other actions
  } */

  handleMouseOut(event: MouseEvent) {
    // Handle mouse out event if needed
    
  }
  @Output() svgIdSelected = new EventEmitter<string>();
  @ViewChild(MapInformationComponent)
private mapInformationComponent!: MapInformationComponent;

handleClick(event: MouseEvent) {
  const path = event.target as SVGPathElement;
  const countryId = path.id;
  this.svgIdSelected.emit(countryId);

  this.countryApiService.getCountryInformation(countryId).subscribe((data: any) => {
    // Extract the necessary information from the API response
    const countryName = data[1][0].country.value;
    const population = data[1][0].value;
    const income = data[1][1].value;
    // Extract three other items as needed
    console.log(countryName);
    this.svgIdSelected.emit(countryName);

    // Pass the retrieved information to the MapInformationComponent if it's available
    if (this.mapInformationComponent) {
      this.mapInformationComponent.setCountryInformation(countryName, population, income);
    }
  });
}


 

}


