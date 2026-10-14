import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragon',
  templateUrl: './dragon.html',
})
export class Dragon {

  name = signal('Gohan');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Dragon', power: 100 },
    { id: 2, name: 'Knight', power: 80 },
    { id: 3, name: 'Wizard', power: 90 },
    { id: 4, name: 'Elf', power: 70 },
  ]);

  addCharacter() {
    this.characters.update( (characters) => {
      const newCharacter: Character = {
        id: characters.length + 1,
        name: `Character ${characters.length + 1}`,
        power: Math.floor(Math.random() * 100),
      };
      console.log('Adding new character:', newCharacter);
      return [...characters, newCharacter];
    })
  }

}
