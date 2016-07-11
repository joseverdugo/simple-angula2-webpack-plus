import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import '../../assets/css/styles.css';
@Component({
  selector: 'my-app',
  template: require('./home.component.html'),
  styles: [require('./home.component.css')]
})
export class HomeComponent { }