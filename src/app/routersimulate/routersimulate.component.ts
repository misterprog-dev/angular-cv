import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-routersimulate',
  templateUrl: './routersimulate.component.html',
  styleUrls: ['./routersimulate.component.css']
})
export class RoutersimulateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToComponent(router: string) {
    this.router.navigate([router]);
  }

}
