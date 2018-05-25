import { RouterModule, Routes } from '@angular/router';
import { sampledata } from '../sourcedata';
import { CycleListComponent } from './cycle-list/cycle-list.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { ModuleWithProviders } from '@angular/core';
export const cycleRoutes: Routes = [
    { path: '', component: CycleListComponent, data: sampledata },
    { path: 'create', component: CreateFormComponent, data: sampledata }
];

export const routing: ModuleWithProviders = RouterModule.forChild(cycleRoutes);
