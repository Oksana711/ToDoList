import { Component, OnInit } from '@angular/core';
import {ItemService} from '../item.service';
import { enterView } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor(public itemService:ItemService) { }

  ngOnInit() {
  }
  add(value:string){
    if(!value.trim()) return;
    this.itemService.listitems.push({id:this.itemService.listitems.length, 
      name:value, ButDelete:false, IsDone:false, IsDate: new Date()})
      localStorage.setItem('list', JSON.stringify(this.itemService.listitems));
  }
  

  

}
