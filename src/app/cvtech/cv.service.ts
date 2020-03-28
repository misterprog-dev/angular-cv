import { Injectable } from '@angular/core';
import {Personne} from '../Model/Personne';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private fakePersonne: Personne [];
  urlPersonnes = 'http://localhost:3000/api/personnes';

  constructor(private httpClient: HttpClient) {
   this.fakePersonne = [
      new Personne(1, 'BILL', 'GATES', 60, '1.jpeg', '66666', 'Génie de l\'informatique'),
      new Personne(2, 'ZINEDINE', 'ZIDANE', 47, '2.jpeg', '777777', 'Footballer pro' ),
    ];
  }

  getPersonnes(): Observable<Personne[]> {
    return this.httpClient.get<Personne[]>(this.urlPersonnes);
  }

  getFakePersonnes(): Personne[] {
    return this.fakePersonne;
  }

  getPersonne(id: number): Personne {
    const personne = this.fakePersonne.find(
      pers => {
        return pers.id == id;
      }
    );
    return personne;
  }

 /* setFakePersonne(person: Personne): void {
    person.id = this.fakePersonne[this.fakePersonne.length - 1].id + 1,
      this.fakePersonne.push(person);
    console.log(this.fakePersonne);
  }*/

  setPersonne(person: Personne): Observable<any> {
    return this.httpClient.post(this.urlPersonnes, person);
  }

  deletePersonne(id: number): Observable<any> {
    return this.httpClient.delete(this.urlPersonnes + `/${id}`);
  }

}
