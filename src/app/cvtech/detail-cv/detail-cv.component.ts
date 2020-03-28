import { Component, OnInit, Input } from '@angular/core';
import {Personne} from '../../Model/Personne';
import {EmbaucheService} from '../embauche.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {

  @Input() personne: Personne;
  constructor(private embaucheService: EmbaucheService, private router: Router) { }

  ngOnInit(): void {
  }

  embaucher() {
    this.embaucheService.embaucherPersonne(this.personne);
  }

  debaucher() {
    this.embaucheService.debaucherPersonne(this.personne);
  }

  moreInfo() {
    this.router.navigate(['cv', this.personne.id]);
  }

}
