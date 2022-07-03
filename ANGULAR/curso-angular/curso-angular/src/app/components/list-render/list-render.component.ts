import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [];

  animalDetails: string = '';

  constructor(private listService: ListService) {
    this.getAnimals();
   }

  ngOnInit(): void {
  }

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
    console.log(this.animalDetails);
  }

  removeAnimal(animal: Animal): void {
    console.log("Animal removed...")
    this.animals = this.animals.filter(a => animal !== a);
    this.listService.remove(animal.id).subscribe();
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

}
