import { Component, OnInit } from '@angular/core';
import { interval, Subscription, take, toArray } from 'rxjs';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {
  
  subsC : Subscription = new Subscription();

  constructor(private _common:CommonService){}

  ngOnInit(): void {
    const src = interval(1000);

    this.subsC = src.pipe(
      take(5),toArray()
    )
    .subscribe(res=>{
     this._common.elAppend(res,'id');
      
    })
  }

}
