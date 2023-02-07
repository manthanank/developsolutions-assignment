import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponentComponent } from './details-component/details-component.component';
import { MainComponentComponent } from './main-component/main-component.component';

const routes: Routes = [
  {
    path: '', component: MainComponentComponent
  },
  {
    path: 'details/:id', component: DetailsComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
