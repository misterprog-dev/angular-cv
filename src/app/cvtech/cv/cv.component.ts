import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../../Model/Personne';
import {PremierService} from '../../service/premier.service';
import {CvService} from '../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Personne [];
  selectedPersonne: Personne;

  constructor(private cvService: CvService ) { }

  ngOnInit(): void {
    this.cvService.getPersonnes().subscribe(
      (personne) => {
        this.personnes = personne;
      },
      (error) => {
        console.log('Errors, ', error);
        alert('Problème d\'accès à l\'API');
      },
      () => {
        console.log('Toutes les données ont été reçues avec succès !!!');
      }
    );
  }

  selectPerson(personne) {
    this.selectedPersonne = personne;
  }

}
