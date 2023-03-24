import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit{
    
  constructor(private _common:CommonService){}
  
  ngOnInit(): void {
       const Obj = of("anup","shekhar","om");
       
       Obj.subscribe(res=>{
          this._common.elAppend(res,'cont')
       })

       //from

       const obj = from(["asas","ggg","gfgf"]);
       obj.subscribe(res=>{
        this._common.elAppend(res,'arId')
       })

       const promise = new Promise(resolve=>{
          setTimeout(() => {
            resolve("Promise resolved")
          }, 3000);
      })

      // promise.then(res=>{
      //   // console.log(res);
      //   this._common.elAppend(res,'prId');
      // })
      const obj2 = from(promise);
      obj2.subscribe(res=>{
       this._common.elAppend(res,'prId')
      })

      const obj4 = from("Pranshu");
      obj4.subscribe(res=>{
       this._common.elAppend(res,'sId')
      })
    }
}
