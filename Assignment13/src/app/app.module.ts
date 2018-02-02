import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StudentsComponent } from './components/students/students.component';
import { routes } from './app.routes';
import { DbService } from './services/db.service';
import { LogService } from './services/log.service';
import { ProfileComponent } from './components/profile/profile.component';
import { GuardsComponent } from './guards/guards.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    ProfileComponent,
    GuardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [DbService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
