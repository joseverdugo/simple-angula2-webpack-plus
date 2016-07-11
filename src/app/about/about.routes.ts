import { RouterConfig }          from '@angular/router';
import { AboutComponent }     from './about.component';
import { AboutPersonComponent }     from './person/about-person.component';
import { AboutCompanyComponent }     from './company/about-company.component';
import { AboutPersonDetailComponent }     from './person/about-person-detail.component';




export const AboutRoutes: RouterConfig = [
  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: 'person',  component: AboutPersonComponent },
      { path: 'person/:id',  component: AboutPersonDetailComponent },
      { path: 'company',  component: AboutCompanyComponent },
      { path: '',     component: AboutCompanyComponent }
    ]
  }
];
