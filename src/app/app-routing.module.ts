import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'predictor',
    loadChildren: './predictor/predictor.module#PredictorModule'
  },
  /*{
    path: '',
    redirectTo: 'predictor',
    pathMatch: 'full'
  }
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
