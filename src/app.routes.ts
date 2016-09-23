import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent }      from './todo.component';
import { FinishComponent }      from './finish.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TodoComponent
  },
  {
    path: 'finish',
    component: FinishComponent
  }
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
