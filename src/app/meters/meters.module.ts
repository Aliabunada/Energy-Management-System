import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetersRoutingModule } from './meters-routing.module';
import { MetersOutletComponent } from './components/meters-outlet/meters-outlet.component';
import { MetersComponent } from './components/meters/meters.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { TermsOfServicesComponent } from './components/terms-of-services/terms-of-services.component';
import { MetersDetailsComponent } from './components/meters-details/meters-details.component';


@NgModule({
  declarations: [
    MetersOutletComponent,
    TermsOfServicesComponent,
    MetersComponent,
    MetersDetailsComponent
  ],
  imports: [
    CommonModule,
    MetersRoutingModule,
    SharedComponentsModule
  ]
})
export class MetersModule { }
