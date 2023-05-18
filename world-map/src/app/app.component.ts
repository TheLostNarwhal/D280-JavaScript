import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',]
})
export class AppComponent {
  selectedSvgId: string = '';

  onSvgIdSelected(svgId: string) {
    this.selectedSvgId = svgId;

}
}