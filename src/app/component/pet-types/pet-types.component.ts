import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-pet-types',
  templateUrl: './pet-types.component.html',
  styleUrls: ['./pet-types.component.css']
})
export class PetTypesComponent implements OnInit {

  activePets = {dog: false, cat: false, horse: false};
  pets = ['dog', 'cat', 'horse'];
  constructor() { }

  @Input() selectedPets: string[] = [];

  @Output() petSelected: EventEmitter<string[]> = new EventEmitter<string[]>();

  onClick() {
    this.petSelected.emit(this.pets.filter((pet) => this.activePets[pet]));
  }
  isSelected(pet) {
    return this.selectedPets.find(item => item == pet);
  }
  ngOnInit() {

  }

}
