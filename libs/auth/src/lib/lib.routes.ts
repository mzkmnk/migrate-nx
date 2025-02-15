import { Route } from '@angular/router';

export const authRoutes: Route[] = [
  {
    path:'sign-in',
    loadComponent:() => import('./sign-in/sign-in-component.component').then((M) => M.SignInComponentComponent),
  },
  {
    path:'**',
    redirectTo: 'sign-in',
  }
];
