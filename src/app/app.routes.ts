import { Routes } from '@angular/router';

export const routes: Routes =[
  {
    path:'auth',
    loadChildren:() => import('auth').then((M) => M.authRoutes),
  }
];
