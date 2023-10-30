import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  navigationItems: navitems[] = [
    {
      name: 'Profile',
      link: 'profile'
    },
    {
      name: 'Components',
      link: 'custom'
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}



interface navitems{
  link:string,
  name:string
}
