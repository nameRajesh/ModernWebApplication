import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { FormComponent } from './component/form/form.component';

import { routes } from './route/app.routes';
import { UtilService } from './services/util.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    routes,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})

export class AppModule { }