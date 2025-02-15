import { Route } from '@angular/router';

export const authRoutes: Route[] = [
  {
    path:'**',
    redirectTo: 'sign-in',
  }
];
