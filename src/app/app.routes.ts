import { Routes } from '@angular/router';

export const routes: Routes =[
  {
    path:'auth',
    loadChildren:() => import('auth').then((M) => M.authRoutes),
  },
  {
    path:'internal',
    loadChildren:() => import('internal').then(M => M.internalRoutes),
  }
];
