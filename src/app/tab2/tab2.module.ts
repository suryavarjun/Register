import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    children:[{
      path:'',
      component:Tab2Page
    },
    {
      path:'tab3',
      loadChildren:'../tab3/tab3.module#Tab3PageModule'
    },
    {
      path:'camera',
      loadChildren:'../camera/camera.module#CameraPageModule'
    }]
  }
];


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
