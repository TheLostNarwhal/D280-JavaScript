import { Component, OnInit, Input } from '@angular/core';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-map-information',
  templateUrl: './map-information.component.html',
  styleUrls: ['./map-information.component.css']
})

export class MapInformationComponent implements OnInit {
  bankerName = "Elizabeth Franklin";
  bankerAddress = '123 Main Street';
  bankerCity = 'Hoboken';
  bankerState = 'NJ';
  bankerZip = '07030';
  bankerPhone = '(201) 748-6000';
  bankerEmail = 'efranklin@email.com'; 
  summary = 'Personable and organized Banker with 6+ years of experience matching customers with suitable account solutions and consistently surpassing quotas for new checking, savings, and credit card accounts.';
  school = 'University of Chicago';
  schoolDates = 'September 2009 - December 2013';
  schoolDegree = 'Bachelor of Arts, Finance';
  employerName = 'Tradelot';
  jobTitle = 'Banker';
  employmentDates = 'January 2014 - Present';

 


  constructor() { }

  ngOnInit(): void { }
}