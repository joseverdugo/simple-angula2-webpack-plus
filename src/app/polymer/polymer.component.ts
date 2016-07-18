import { Component, OnInit  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'my-app',
 template: `
    <div>Test con {{nombreDefault}}</div>

    <paper-input label="Your name here" ></paper-input>
    <paper-button>Boton</paper-button>
  `
})
export class PolymerComponent implements OnInit { 
	private nombreDefault: any;

	ngOnInit() {
		this.nombreDefault = 'Polymer';
	}


}