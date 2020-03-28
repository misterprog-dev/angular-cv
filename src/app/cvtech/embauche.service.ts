import { Injectable } from '@angular/core';
import {Personne} from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private personnesEmbauchees: Personne[];

  constructor() {
    this.personnesEmbauchees = [];
  }

  getpersonnesEmbauchees(): Personne[] {
    return this.personnesEmbauchees;
  }

  embaucherPersonne(personne: Personne): void {
    const index = this.personnesEmbauchees.indexOf(personne);
    if (index < 0) {
      this.personnesEmbauchees.push(personne);
    } else {
      alert(`${personne.firstName} est déjà embauchée !`);
    }
  }

  debaucherPersonne(personne: Personne): void {
    const index = this.personnesEmbauchees.indexOf(personne);
    // console.log(index);
    if (index >= 0) {
      this.personnesEmbauchees.splice(index, 1);
    }
  }

}
