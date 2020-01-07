import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    children:[{
      path:'',
      component:Tab3Page
    },
    {
      path:'tab2',
      loadChildren:'../tab2/tab2.module#Tab2PageModule'
    }]
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
