import {NgModule} from '@angular/core';
import {LoginComponent} from "./login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {AddsiteComponent} from "./addsite/addsite.component";
import {HeroesComponent} from "./heroes/heroes.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  { path: 'heroes', component: HeroesComponent },
  {path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: HeroDetailComponent },
  {path: 'addsite', component: AddsiteComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
