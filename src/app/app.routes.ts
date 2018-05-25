import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { sampledata } from './sourcedata';
import { CarListComponent } from './cars/car-list/car-list.component';
import { BikeListComponent } from './bikes/bike-list/bike-list.component';
import { CycleListComponent } from './cycles/cycle-list/cycle-list.component';
import { AlwayAuthGuard, DataSaved } from './app.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AlwayAuthGuard] },
    { path: 'carlist', component: CarListComponent, data: sampledata },
    { path: 'bikelist', component: BikeListComponent, data: sampledata },
    { path: 'cyclelist', loadChildren: 'app/cycles/cycles.module#CyclesModule' }

];

export const routing = RouterModule.forRoot(routes);

