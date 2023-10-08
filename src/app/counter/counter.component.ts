import { Component, OnInit } from '@angular/core';
import { CounterService } from '../Counter.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  public count: number = 0;
  ctServ:CounterService;

  constructor(ctServ: CounterService) { this.ctServ = ctServ}

  ngOnInit() {
    
  }

  

  increment(event:any){
    console.log(event)
    this.count++;
    this.ctServ.count++;
  }

  decrease(){
    if(this.count == 0)
    {
      alert("Cannot decrease below 0");
      return;
    }
    this.count--;
    this.ctServ.count--;
    
  }

}
