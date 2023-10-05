import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewstudentPageRoutingModule } from './newstudent-routing.module';

import { NewstudentPage } from './newstudent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewstudentPageRoutingModule
  ],
  declarations: [NewstudentPage]
})
export class NewstudentPageModule {}
