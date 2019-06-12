import { Injectable } from '@angular/core';
import {Item} from './item'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
listitems:Item[]=JSON.parse(localStorage.getItem('list'))
   // {id:0, name:'item1',  ButDelete:false, IsDone:false, IsDate:new Date() , IsfutureDate:'', res:10 },
    // {id:1, name:'item2',  ButDelete:false, IsDone:false, IsDate:new Date() , IsfutureDate:'', res:10 },
    // {id:2, name:'item3',  ButDelete:false, IsDone: false, IsDate: '' },
    // {id:3, name:'item4',  ButDelete:false, IsDone: false, IsDate: '' },
    // {id:4, name:'item5',  ButDelete:false, IsDone: false, IsDate: '' }
    



  constructor() { }
  
}

