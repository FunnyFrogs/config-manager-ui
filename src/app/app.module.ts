import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';
import { RouterModule } from '@angular/router';
import { AppComponent, AlwayAuthGuard, DataSaved } from './app.component';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CarsModule } from './cars/cars.module';
import { BikesModule } from './bikes/bikes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    LoginModule,
    DashboardModule,
    CarsModule,
    CarsModule,
    BikesModule,
    BrowserAnimationsModule
  ],
  providers: [AlwayAuthGuard, DataSaved],
  bootstrap: [AppComponent]
})
export class AppModule { }
