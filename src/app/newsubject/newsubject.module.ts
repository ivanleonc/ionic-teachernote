import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsubjectPageRoutingModule } from './newsubject-routing.module';

import { NewsubjectPage } from './newsubject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsubjectPageRoutingModule
  ],
  declarations: [NewsubjectPage]
})
export class NewsubjectPageModule {}
