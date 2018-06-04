import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { routing } from './app.routes';
import { RouterModule } from '@angular/router';
import { AppComponent, AlwayAuthGuard, DataSaved } from './app.component';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CarsModule } from './cars/cars.module';
import { BikesModule } from './bikes/bikes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ConfigListComponent } from './config-list/config-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigService } from './config.service';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationListComponent,
    ConfigListComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    LoginModule,
    DashboardModule,
    CarsModule,
    CarsModule,
    BikesModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AlwayAuthGuard, DataSaved, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
