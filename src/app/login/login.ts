import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  handleClick(){
    console.log('clicked');
    this.handleInput();
  }
  handleInput(){
    console.log('input');
  }
}
