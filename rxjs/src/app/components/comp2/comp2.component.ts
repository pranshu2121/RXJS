import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {
  input!:string;
  constructor(private _dataService:DataService){}
 
  ngOnInit(): void {
    this._dataService.dataEmmiter.subscribe((res)=>{
      this.input=res;
    })
  }

}
