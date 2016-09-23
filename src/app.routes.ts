import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent }      from './todo.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TodoComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
