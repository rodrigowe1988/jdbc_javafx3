import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  size: number = 33;
  color: string = "green";

  underline = 'underline-title';

  classes = ['green-title', 'small-title'];

  constructor() { }

  ngOnInit(): void {
  }

}
