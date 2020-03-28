import { Component, OnInit } from '@angular/core';
import {PremierService} from '../service/premier.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  providers: [PremierService]
})
export class ColorComponent implements OnInit {
  color = 'red';
  constructor(private premierService: PremierService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.color = params.default;
      }
    );
  }

  // changeColor(inputColor) {
  //   console.log(inputColor.value);
  //   this.color = inputColor.value;
  //   inputColor.value = '';
  // }

  processReq(message: any) {
    alert(message);
  }

  messageData() {
    this.premierService.Logger('Adding color data');
  }

  goToCV() {
    this.router.navigate(['cv']);
  }

}
