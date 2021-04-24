import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomElementComponent } from './custom-element/custom-element.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'custom-element'
  },
  {
    path: 'custom-element',
    component: CustomElementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
