import { NgModule } from '@angular/core';
import { CycleListComponent } from './cycle-list/cycle-list.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routing } from './cycle.router';
@NgModule({
  imports: [
    ReactiveFormsModule,
    routing,
    RouterModule
  ],
  declarations: [CycleListComponent, CreateFormComponent]
})
export class CyclesModule { }
