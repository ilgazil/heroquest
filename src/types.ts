export enum HeroEnum {
  barbarian = 'barbarian',
  dwarf = 'dwarf',
  elf = 'elf',
  wizard = 'wizard',
}

export class Hero {
  name: HeroEnum;
  player = '';

  constructor(name: HeroEnum) {
    this.name = name;
  }
}