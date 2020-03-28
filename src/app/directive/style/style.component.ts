import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  @Input() backColor = 'lightBlue';
  @Input() color = 'white';
  size = 20;
  constructor() { }

  ngOnInit(): void {
  }

  changeSize(size) {
    this.size = size;
  }

}
