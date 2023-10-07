import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService implements OnInit {

  public countEmitter: BehaviorSubject<number> = new BehaviorSubject(0);
  public count: number = 0;
  constructor() { 
    
    setInterval(() => { this.count--; this.countEmitter.next(this.count) }, 1000)
  }

  ngOnInit(): void {
    
  }

}
