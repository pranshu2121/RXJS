import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { Comp3Component } from './components/comp3/comp3.component';
import { HeaderComponent } from './component/header/header.component';
import { PromiseComponent } from './component/promise/promise.component';
import { RouterModule } from '@angular/router';
import { ObservableComponent } from './component/observable/observable.component';
import { AllComponent } from './component/observable/all/all.component';
import { FromEventComponent } from './component/observable/from-event/from-event.component';
import { IntervalComponent } from './component/interval/interval.component';
import { OfFromComponent } from './component/of-from/of-from.component';
import { ToArrayComponent } from './component/to-array/to-array.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    AllComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
