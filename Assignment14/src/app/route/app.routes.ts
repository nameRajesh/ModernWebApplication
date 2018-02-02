import { RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "../component/welcome/welcome.component";
import { FormComponent } from "../component/form/form.component";


const MY_ROUTES: Routes = [
    { path: '', redirectTo: 'form', pathMatch: 'full'},
    { path: 'form', component: FormComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'welcome/', redirectTo: 'form'},
    { path: '**', redirectTo: '/' }
];

export const routes = RouterModule.forRoot(MY_ROUTES);