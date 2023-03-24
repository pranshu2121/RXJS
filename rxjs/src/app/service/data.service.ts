import { EventEmitter, Injectable } from '@angular/core';
import { Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
   
  // dataEmmiter = new EventEmitter<string>();
  dataEmmiter = new Subject<string>()

  raisedEvent(data:string){
    this.dataEmmiter.next(data);
  }

}
