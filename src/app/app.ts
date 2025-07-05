import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Counter } from './counter/counter';
import { Signalsdemo } from './signalsdemo/signalsdemo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Signup, Counter,Signalsdemo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular';
  name: string = 'Niladri';
  display: boolean = true;
  users: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  students: { key: string, value: string }[] = [{ key: '1', value: 'A' }, { key: '2', value: 'B' }, { key: '3', value: 'C' }, { key: '4', value: 'D' }, { key: '5', value: 'E' }]
}
