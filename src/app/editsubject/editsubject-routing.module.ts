import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditsubjectPage } from './editsubject.page';

const routes: Routes = [
  {
    path: '',
    component: EditsubjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditsubjectPageRoutingModule {}
