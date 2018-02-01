import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArrayCompComponent } from './array-comp/array-comp.component';
import { UpperDirective } from './upper.directive';
import { MycolorDirective } from './mycolor.directive';
import { VisibilityDirective } from './visibility.directive';


@NgModule({
  declarations: [
    AppComponent,
    ArrayCompComponent,
    UpperDirective,
    MycolorDirective,
    VisibilityDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
