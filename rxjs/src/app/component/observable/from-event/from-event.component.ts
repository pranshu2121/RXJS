import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit,AfterViewInit{

  @ViewChild('addBtn')
  addBtn!: ElementRef;

  constructor(private _common:CommonService){}

  ngOnInit(): void { 
   
  }
  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addBtn.nativeElement,'click').subscribe(res=>{
      let countVal = 'Video '+ count++;
      this._common.elAppend(countVal,'elItem');
      this._common.elAppend(countVal,'elItem2');
    })
  }

 
}
