import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './hero.html',
  imports: [ UpperCasePipe ],
})
export class Hero {

  name = signal('Iron Man');
  age = signal(45);

  heroDescription = computed( () => {
    const description = `${this.name()} = ${this.age()}`;
    return description;
  })

  resetForm() {
    this.name.set('Iron Man');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(100);
  }

  changeHero () {
    this.name.set('spiderman');
    this.age.set(18);
  }

}
