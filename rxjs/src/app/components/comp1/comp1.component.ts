import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component {

  constructor(private _dataService:DataService){}

  enteredText!:string;

  onSubmit(){
    this._dataService.raisedEvent(this.enteredText);
  }
}
