import { Routes } from '@angular/router';
import {LayoutPrivateComponent} from '../page/private/layout-private/layout-private.component';
import {LayoutPublicComponent} from '../page/public/layout-public/layout-public.component';
import {HomeComponent} from '../page/public/home/home.component';
import {DashboardComponent} from '../page/private/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '', // path '/'
    component: LayoutPublicComponent,
    children: [
      {
        path: '', // path '/'
        component: HomeComponent
      }
    ]
  },
  {
    path: 'dashboard', // path '/dashboard'
    component: LayoutPrivateComponent,
    children: [
      {
        path: '', // path '/dashboard'
        component: DashboardComponent
      }
    ]
  },
];
