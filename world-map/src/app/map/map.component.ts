import { Component, Output,ElementRef, EventEmitter} from '@angular/core';
import { MapInformationComponent } from '../map-information/map-information.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  // Your component logic goes here
 
  constructor(private elementRef: ElementRef) {}

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

  handleClick(event: MouseEvent) {
    const path = event.target as SVGPathElement;
    const countryId = path.id;
    this.svgIdSelected.emit(countryId); 
    return countryId;
    // Emit the countryId to the parent component or perform other actions
  }
 

}


