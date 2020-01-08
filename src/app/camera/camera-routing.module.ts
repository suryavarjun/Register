import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
import { CameraPageModule } from './camera.module';

//import { CameraPage } from './camera.page';

const routes: Routes = [
  {
    path: '',
    component: Camera
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CameraPageRoutingModule {}
