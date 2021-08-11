import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {StudentmanagementComponent} from './studentmanagement/studentmanagement.component'
import {AddstudentComponent} from './addstudent/addstudent.component';
import {UpdatestudentComponent} from './updatestudent/updatestudent.component'

const routes: Routes = [
  {path:'',component:StudentmanagementComponent},
  {path:'add-student', component:AddstudentComponent},
  {path:'update-student/:id', component:UpdatestudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
