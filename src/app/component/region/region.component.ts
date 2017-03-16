import { Component, OnInit } from '@angular/core';
import {LatLngLiteral} from "angular2-google-maps/core";

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  //
  lat: number = 40.8;
  lng: number = -74.0150372;
  // lat: number = 0;
  // lng: number = 0;
  zoom: number = 10;
  paths: Array<LatLngLiteral> = [
    { lat: 40.7,  lng: -74.2 },
    { lat: 40.7,  lng: -74.1 },
    { lat: 40.9, lng: -74 },
  ];

  constructor() { }

  ngOnInit() {
  }

}
