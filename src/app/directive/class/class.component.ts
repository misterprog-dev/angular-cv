import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  est = true;
  barca = false;
  milan = false;
  show = true;

  equipe = ['Barca', 'Real Madrid', 'Chelsea'];
  constructor() { }

  ngOnInit(): void {
  }

  changeEquipe() {
    this.est = false;
    this.barca = true;
    this.milan = false;
  }

  /* changeVisibilite() {
    this.show = this.show === true ? false : true;
  } */

}
