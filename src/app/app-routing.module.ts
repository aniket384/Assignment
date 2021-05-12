import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './task/form/form.component';
import { HomeComponent } from './task/home/home.component';

const routes: Routes = [
  { path:'',redirectTo:'/', pathMatch:'full'},
  { path: 'task4',component:HomeComponent },
  { path: 'task3',component:FormComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
