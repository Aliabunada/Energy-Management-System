import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetersDetailsComponent } from './components/meters-details/meters-details.component';
import { MetersOutletComponent } from './components/meters-outlet/meters-outlet.component';
import { MetersComponent } from './components/meters/meters.component';
import { TermsOfServicesComponent } from './components/terms-of-services/terms-of-services.component';

const routes: Routes = [
  {
    path: '', component: MetersOutletComponent, children: [
      { path: '', data: { title: 'Meters' }, component: MetersComponent },
      { path: 'Meter_Details', data: { title: 'Meters Details' }, component: MetersDetailsComponent },
      { path: 'Service', data: { title: 'Terms of Services' }, component: TermsOfServicesComponent },
    ]
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetersRoutingModule { }
