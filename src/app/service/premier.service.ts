import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PremierService {
  data = [
    'data 1',
    'data 2',
    'data 3',
    'data 4'
  ];

  constructor() { }

  Logger(data) {
    console.log(data);
    console.log(this.data);
  }

  addData(data) {
    this.data.push(data);
  }
}
