import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signalsdemo',
  imports: [],
  templateUrl: './signalsdemo.html',
  styleUrl: './signalsdemo.css'
})
export class Signalsdemo {
  count: WritableSignal<number> = signal(0);
  age: Signal<number> = computed(() => this.count() * 5);
  displayPopup: WritableSignal<boolean> = signal(false)

  constructor() {
    effect(() => {
      if (this.count() === 5) {
        this.displayPopup.set(true);
        const timer = setTimeout(() => {
          this.displayPopup.set(false);
        },2000)
        return () => clearTimeout(timer);
      }
      return;
    });

  }

  incrementCounter() {
    this.count.update(c => c + 1);
  }

  users=[1,2,3,4,5,6,7,8]
  /* users=[] */

}
