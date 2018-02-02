import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { StudentsComponent } from "./components/students/students.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { GuardsComponent } from "./guards/guards.component";


const MY_ROUTES: Routes = [
    { path: 'homepage', component: HomeComponent },
    { path: 'students', component: StudentsComponent },
    { path: 'students/profile/:id', component: ProfileComponent },
    { path: 'students/profile', redirectTo: 'error', pathMatch: 'full' },
    { path: 'error', component: GuardsComponent },
    { path: '**', redirectTo: '/' }
];

export const routes = RouterModule.forRoot(MY_ROUTES);