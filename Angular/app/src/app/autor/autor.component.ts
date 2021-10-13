import { AutorService } from './autor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor',
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let autor of autors">
        {{ autor }}
      </li>
    </ul>
  `,
  // styleUrls: ['./autor.component.css'],
})
export class AutorComponent implements OnInit {
  title = '3 Authors';
  autors;
  constructor(autor: AutorService) {
    this.autors = autor.getAutors();
  }

  ngOnInit(): void {}
}
