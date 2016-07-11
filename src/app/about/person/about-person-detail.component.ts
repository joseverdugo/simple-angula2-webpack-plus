import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-app',
template: `
    <div>Detalle: {{identificador}}</div>
  `
  
})
export class AboutPersonDetailComponent  implements OnInit, OnDestroy {

  private identificador: any;
  private sub: any;

	constructor(
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
           

     this.sub = this.route.params.subscribe(params => {
     	this.identificador = +params['id']; 
     	console.log("Identificadod:" + this.identificador)
     });

     let id = +this.route.snapshot.params['id'];

     console.log("Con snapshot:" + id);

     this.router.subscribe(location => console.log("location changed: " + location));
  } 

  ngOnDestroy() {
    this.sub.unsubscribe();
  } 
}