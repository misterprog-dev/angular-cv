import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  tabColor = ['yellow', 'red', 'green', 'blue', 'pink', 'coral'];

  @HostBinding('style.borderColor') bc;
  @HostBinding('style.color') c;

  constructor() { }

@HostListener('keypress') keypress() {
  const index1 = Math.floor(Math.random() * (this.tabColor.length) - 1);
  const index2 = Math.floor(Math.random() * (this.tabColor.length) - 1);
  this.bc = this.tabColor[index1];
  this.c = this.tabColor[index2];
}

}
