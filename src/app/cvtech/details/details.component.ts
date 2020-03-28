import { Component, OnInit } from '@angular/core';
import {CvService} from '../cv.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Personne} from '../../Model/Personne';
import {EmbaucheService} from '../embauche.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    personne: Personne;

  constructor(private cvService: CvService,
              private activatedRouter: ActivatedRoute,
              private embaucheService: EmbaucheService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      (params) => {
        // console.log(params);
        this.personne = this.cvService.getPersonne(params.id);
        // console.log(this.personne);
      }, error => {
        console.log('Error ! Impossible d\'afficher l\'élément !');
      }
    );
  }

  embaucher() {
    this.embaucheService.embaucherPersonne(this.personne);
  }

  debaucher() {
    this.embaucheService.debaucherPersonne(this.personne);
  }

  deletePersonne() {
    this.cvService.deletePersonne(this.personne.id).subscribe(
      (response) => {
        this.router.navigate(['']);
        alert('Personne supprimée avec succès !!!');
      },
      (errors) => {
        alert('Impossible de supprimer cette personne, problème dû au serveur de base de données !!!');
      }
    );
  }

}
