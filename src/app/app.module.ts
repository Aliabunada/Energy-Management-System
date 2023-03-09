import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, ArrayOfComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared-components/services/authGuard/auth.guard';
import { SharedComponentsModule } from './shared-components/shared-components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedComponentsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule]
})
export class AppModule { }
