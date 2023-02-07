import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponentComponent } from './main-component/main-component.component';
import { DetailsComponentComponent } from './details-component/details-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    DetailsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
