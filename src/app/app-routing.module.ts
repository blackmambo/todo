import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutmainComponent } from './layout/layoutmain/layoutmain.component';
import { TaskModule } from './task/task.module';
import { TaskdashboardComponent } from './task/taskdashboard/taskdashboard.component';

const routes: Routes = [

  {
    path: '',
    component: LayoutmainComponent,
    children: [
      { path: '', component: TaskdashboardComponent},
     
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
