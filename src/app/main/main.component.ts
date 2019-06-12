import { Component, OnInit } from '@angular/core';
import {ItemService} from '../item.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  netImage:string = "../assets/img/pppndownload.png";
  netImage2:string = "../assets/img/booksillustration_wide-13cd61d06fa067471bec5cd02ad95fea25d2dfe4.png";
  netImage3:string = "../assets/img/apple-1986660_960_720.png";
  netImage4:string = "../assets/img/glo0004018-1-354x397.png";
  

  constructor(public itemService:ItemService) { }

  ngOnInit() {
    localStorage.setItem('list', JSON.stringify(this.itemService.listitems));
  }
  delete(id:number){
    //  this.itemService.listitems=this.itemService.listitems.filter(date=>date.id!==id)
    for(let i=0; i<this.itemService.listitems.length; i++){
if(this.itemService.listitems[i].id===id){
   this.itemService.listitems.splice(i,1);
   localStorage.setItem('list', JSON.stringify(this.itemService.listitems));
  

}
    }
  }



  // criticalDate(value: Date, id:number){
    
  //   if(!value) return;
  //   let d = +new Date();
    
  //  let ng = +value;
  //  console.log(ng);
  //  console.log(d);
  //   let riz: number = ng-d;
  //   let sec = riz/1000;
  //   let res = sec/86400;
  //   console.log(res)
    
    
  //     for(let i=0; i<this.itemService.listitems.length; i++){
        
  //       if(this.itemService.listitems[i].id == id){
  //         this.itemService.listitems[i].res = res;
  //       }
      
     // console.log(`${res} days left`)
     
     // } 
  //}
  
  

}
