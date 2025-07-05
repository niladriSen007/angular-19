import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  count = signal<number>(0)
  increment(){
    this.count.update(c => c + 1)
    this.count.set(this.count() + 1)
    this.count.set(this.count() + 1)
  }
}
