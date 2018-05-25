import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [trigger('heroState', [
    state('inactive', style({
      backgroundColor: '#eee',
      transform: 'scale(.8)'
    })),
    state('active', style({
      backgroundColor: '#cfd8dc',
      transform: 'scale(1)'
    }))
    // transition('inactive => active', animate('100ms ease-in')),
    // transition('active => inactive', animate('100ms ease-out'))
  ])]
})
export class LoginComponent implements OnInit {

  public state = 'inactive';
  public name: String = 'Manikanta';
  constructor() { }
  ngOnInit() {
  }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

}
