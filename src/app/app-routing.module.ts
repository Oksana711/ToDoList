import { NgModule, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { InputComponent } from './input/input.component';


const routes: Routes = [
  {path:'main', component:MainComponent},
  {path:'input', component:InputComponent},
  {path:'', redirectTo:'/main', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
