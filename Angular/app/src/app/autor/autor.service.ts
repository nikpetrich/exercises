import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AutorService {
  getAutors(): string[] {
    return ['autor1', 'author2', 'author3'];
  }
  constructor() {}
}
