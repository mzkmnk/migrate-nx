import { Route } from '@angular/router';

export const internalRoutes: Route[] = [
  {
    path:'dashboard',
    loadComponent:() => import('libs/internal/src/lib/dashboard').then((M) => M.DashboardComponent),
  },
  {
    path:'**',
    redirectTo:'dashboard',
  }
];
