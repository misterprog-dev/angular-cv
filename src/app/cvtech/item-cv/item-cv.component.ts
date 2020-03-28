import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/Personne';
import {Router} from '@angular/router';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {

  @Input() personne: Personne;
  @Output() selectedPersonne = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectPerson() {
    this.selectedPersonne.emit(
      this.personne
    );
  }

}
