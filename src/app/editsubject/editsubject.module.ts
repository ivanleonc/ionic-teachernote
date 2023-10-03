import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditsubjectPageRoutingModule } from './editsubject-routing.module';

import { EditsubjectPage } from './editsubject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditsubjectPageRoutingModule
  ],
  declarations: [EditsubjectPage]
})
export class EditsubjectPageModule {}
