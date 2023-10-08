import { Component, OnInit } from '@angular/core';
import { CounterService } from '../Counter.service';
import { sampleTime } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countService: CounterService;

  constructor(countService: CounterService) { this.countService = countService, this.globalTimer = countService.countEmitter.pipe(sampleTime(5000))}

  ngOnInit() {
  }

  globalTimer: Observable<any>;

}