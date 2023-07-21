import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { VuelosComponent } from './components/vuelos/vuelos.component';
import { RentaJetsComponent } from './components/renta-jets/renta-jets.component';
import { PaqueteriaComponent } from './components/paqueteria/paqueteria.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: '/login'},
  {path:'login', component: LoginComponent},
  {path:'registro', component: RegistroComponent},
  {path:'dashboard', component: DashboardComponent, ...canActivate(()=> redirectUnauthorizedTo(['/registro']))},
  {path:'vuelos', component: VuelosComponent, ...canActivate(()=> redirectUnauthorizedTo(['/registro']))},
  {path:'jetsPrivados', component: RentaJetsComponent, ...canActivate(()=> redirectUnauthorizedTo(['/registro']))},
  {path:'paqueteria', component: PaqueteriaComponent, ...canActivate(()=> redirectUnauthorizedTo(['/registro']))}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
