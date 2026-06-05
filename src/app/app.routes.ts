import {Routes} from '@angular/router';
import {routes as templateDrivenFormsRoutes} from './features/template-driven-forms/routes'

export const routes: Routes = [
   {
      path: 'template-driven-forms',
      children: templateDrivenFormsRoutes
   },
];
