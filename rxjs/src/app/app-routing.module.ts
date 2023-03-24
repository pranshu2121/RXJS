import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { toArray } from 'rxjs';
import { IntervalComponent } from './component/interval/interval.component';
import { AllComponent } from './component/observable/all/all.component';
import { FromEventComponent } from './component/observable/from-event/from-event.component';
import { ObservableComponent } from './component/observable/observable.component';
import { OfFromComponent } from './component/of-from/of-from.component';
import { PromiseComponent } from './component/promise/promise.component';
import { ToArrayComponent } from './component/to-array/to-array.component';

const routes: Routes = [
  {path:'promise',component:PromiseComponent},
  {path:'observable',component:ObservableComponent,children:[
    {path:'',component:AllComponent},
    {path:'from-event',component:FromEventComponent},
    {path:'interval',component:IntervalComponent},
    {path:'of-from',component:OfFromComponent},
    {path:'to-array',component:ToArrayComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
