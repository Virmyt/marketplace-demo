import { Injectable } from '@angular/core';
import {Region} from "../entity/region";

@Injectable()
export class RegionProviderService {

  private regions = [
      new Region('New York', [1,23]),
      new Region('Ostin', [2,14]),
  ];
  constructor() { }

  getRegions = (): Region[] => this.regions;
}
