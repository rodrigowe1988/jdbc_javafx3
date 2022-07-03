import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 10},
    { name: 'Tom', type: 'Bird', age: 1},
    { name: 'Frida', type: 'Cat', age: 6},
    { name: 'Bob', type: 'Turtle', age: 5},
  ];

  animal: Animal = {
    name: 'Teste',
    type: 'snake',
    age: 2
  }

  animalDetails: string = '';

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
    console.log(this.animalDetails);
  }

  removeAnimal(animal: Animal): void {
    console.log("Animal removed...")
    this.animals = this.listService.remove(this.animals, animal);
  }

}
