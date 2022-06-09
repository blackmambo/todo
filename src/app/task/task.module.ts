import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';

import { TaskcreateComponent } from './taskcreate/taskcreate.component';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { TaskdashboardComponent } from './taskdashboard/taskdashboard.component';



@NgModule({
  declarations: [
    TaskcreateComponent,
    TaskdisplayComponent,
    TaskdashboardComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatInputModule
  ]
})
export class TaskModule { }
