import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  selector: 'my-app',
  template: require('./about-person.component.html'),
  directives: [ROUTER_DIRECTIVES]
})
export class AboutPersonComponent { }