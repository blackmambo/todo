import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';

import { LayoutmainComponent } from './layoutmain/layoutmain.component';



@NgModule({
  declarations: [
    LayoutmainComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
    MatToolbarModule
  ]
})
export class LayoutModule { }
