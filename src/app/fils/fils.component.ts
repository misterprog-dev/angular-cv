import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input() filsProperty;
  @Output() sendRequestToData = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log('Fils Component : le contenu de la variable component du père -> ' + this.filsProperty);
  }

  sendEvent() {
    this.sendRequestToData.emit(
      'Please can i have some money :)'
    );
  }

}
