import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import '../../assets/css/styles.css';
@Component({
  selector: 'my-app',
  template: require('./about.component.html'),
  styles: [require('./about.component.css')]
})
export class AboutComponent { }