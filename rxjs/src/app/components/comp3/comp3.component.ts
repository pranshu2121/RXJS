import { Component, OnInit } from '@angular/core';
import {  BehaviorSubject,Subject } from 'rxjs';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit{

  ngOnInit(): void {
    let subject = new Subject();

    subject.subscribe((data) =>{
          console.log('observer 1',data);   
    })

     subject.next(2);


    subject.subscribe((data) =>{
      console.log('observer 2',data);   
})
    
subject.next(1);
// subject.next(3);

  //  let behaviourSubject = new BehaviorSubject(0);

  //  behaviourSubject.subscribe((data) =>{
  //             console.log('observer 1',data);   
  //       })
    
  //       behaviourSubject.next(2);
    
    
  //       behaviourSubject.subscribe((data) =>{
  //         console.log('observer 2',data);   
  //   })
        
  //   behaviourSubject.next(1);

  }

}
