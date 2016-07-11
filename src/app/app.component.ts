import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import '../assets/css/styles.css';
@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [ROUTER_DIRECTIVES] 
})
export class AppComponent { }