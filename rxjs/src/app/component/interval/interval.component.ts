import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit{

  constructor(private cdr: ChangeDetectorRef,private zone: NgZone) {}


  objStream:any
  unsubStream:Subscription = new Subscription();

  ngOnInit(): void {
    const Stream = interval(1000);
   this.unsubStream= Stream.subscribe(res=>{
     this.objStream = 'Video '+res ;
     if(res>=5){
      this.unsubStream.unsubscribe();
     }  
    })
  }
}
