import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { MeterCardComponent } from './meter-card/meter-card.component';
import { ViewBoxComponent } from './view-box/view-box.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    MeterCardComponent,
    ViewBoxComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [NavbarComponent, SidebarComponent, MeterCardComponent,
    ViewBoxComponent]
})
export class SharedComponentsModule { }
