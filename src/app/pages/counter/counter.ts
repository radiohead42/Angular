import { Component, signal } from '@angular/core';


@Component({
  templateUrl: './counter.html',
})
export class Counter {

  counter = 10;
  counterSignal = signal(10);

  increment( value: number) {
    this.counter += value;
  }

  decrement( value: number) {
    this.counter -= value;
    this.counterSignal.update( current => current - value);
  }

  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }

}
