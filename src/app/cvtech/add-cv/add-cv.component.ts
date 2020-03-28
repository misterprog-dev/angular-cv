import { Component, OnInit } from '@angular/core';
import {Personne} from '../../Model/Personne';
import {NgForm} from '@angular/forms';
import {CvService} from '../cv.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {

  constructor(private cvService: CvService, private router: Router) { }

  ngOnInit(): void {
  }

  addCv(formulaire: NgForm) {
    // console.log(formulaire.value);
    // this.cvService.setPersonne(new Personne(formulaire.value));

    this.cvService.setPersonne(formulaire.value).subscribe(
      (response) => {
        alert('Personne ajoutée avec succès !!!! :)');
        this.router.navigate(['']);
      },
      (errors) => {
        alert('Error pendant l\'enregistrement des informations !!!');
      },
      () => {
        console.log('Inscription effectuée avec succès !!!');
      }
    );
  }

}
