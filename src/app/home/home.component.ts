import { Component, OnInit } from '@angular/core';
import { CounterService } from '../Counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countService: CounterService;

  constructor(countService: CounterService) { this.countService = countService }

  ngOnInit() {
  }

}