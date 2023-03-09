import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetersComponent } from './meters/components/meters/meters.component';
import { AuthGuard } from './shared-components/services/authGuard/auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'Meters',
    canActivate: [AuthGuard],
    loadChildren: () => import('./meters/meters.module').then(m => m.MetersModule)
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = []
