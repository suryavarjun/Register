import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CameraPageRoutingModule } from './camera-routing.module';
import { Camera } from '@ionic-native/camera/ngx';

//import { CameraPage } from './camera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //CameraPage,
    ReactiveFormsModule,
    CameraPageRoutingModule,
    RouterModule.forChild([{ path: '', component: Camera }])
  ],
  declarations: [Camera]
})
export class CameraPageModule {}
