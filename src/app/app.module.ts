import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiDirectionalBindingModule } from './bi-directional-binding/bi-directional-binding.module';
import { FormsModule }   from '@angular/forms';
import { ContainerModule } from './container/container.module';
import { ContactImageDetailsComponent } from './contact-image-details/contact-image-details.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactImageDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BiDirectionalBindingModule,
    ContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
