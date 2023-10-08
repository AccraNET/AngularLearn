import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.css']
})
export class ProfileComponent implements OnInit {

  instance: number = 1;

  @ViewChild('test', {read: ViewContainerRef})
  testButtonRef: ViewContainerRef | undefined;

  constructor() { }

  ngOnInit() {
  }

  testClick(){
    console.log(this.testButtonRef);
    var componentRef = this.testButtonRef?.createComponent<CounterComponent>(CounterComponent, {index: 0});
    if(componentRef)
      componentRef.instance.count = this.instance++ ;

    setTimeout(() => {
      componentRef?.destroy()
    }, 5000)
  }

}
