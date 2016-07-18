import { provideRouter, RouterConfig } from '@angular/router';
import { AboutRoutes }       from './about/about.routes';
import { HomeRoutes }       from './home/home.routes';
import { PolymerRoutes }       from './polymer/polymer.routes';


export const routes: RouterConfig = [
  ...AboutRoutes,
  ...HomeRoutes,
  ...PolymerRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

