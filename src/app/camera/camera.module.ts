import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CameraPageRoutingModule } from './camera-routing.module';

import { CameraPage } from './camera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CameraPageRoutingModule,
    RouterModule.forChild([{ path: '', component: CameraPage }])
  ],
  declarations: [CameraPage]
})
export class CameraPageModule {}
