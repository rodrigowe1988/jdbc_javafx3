import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = "Rodrigo";
  age: number = 33;
  job: string = "Programmer";
  hobbies: Array<String> = ["Workout", "Video games", "Read"];

  car = {
    name: "Celta",
    year: 2002
  };

  constructor() { }

  ngOnInit(): void {
  }


}
