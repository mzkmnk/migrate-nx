import { Route } from '@angular/router';

export const internalRoutes: Route[] = [
  {
    path:'dashboard',
    loadComponent:() => import('@libs/internal/dashboard').then((M) => M.DashboardComponent),
  }
];
