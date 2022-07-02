import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = "Rogério";

  userObject= {
    name: "Casa",
    size: 150
  }

  title = 'curso-angular';
}
