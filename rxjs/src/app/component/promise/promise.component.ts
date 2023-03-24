import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

   
  dell(){
    return true;
  }

  hp(){
      return false;
   }

  ngOnInit(): void {
    let buyLaptop = new Promise((resolve,reject)=>{
      // resolve("Promise is resolved")
      if(this.dell()){
        return setTimeout(()=>{
        resolve("Dell is available")
        },3000)
      }
      else if(this.hp()){
        return setTimeout(()=>{
          resolve("hp is available")
          },3000)
      }
      else{
        return setTimeout(()=>{
          reject("not available")
          },3000)
      }
    });

    buyLaptop.then(res=>{
      console.log("Success",res); 
    })
    
  }


}
