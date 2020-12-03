export type HeroType = 'barbarian' | 'dwarf' | 'elf' | 'wizard';

export function isHeroType(id: string): id is HeroType {
  return ['barbarian', 'dwarf', 'elf', 'wizard'].indexOf(id) > -1;
}

export class Hero {
  readonly id: HeroType;

  daguer = false;
  shortSword = false;
  fineSword = false;
  steelLongSword = false;
  heavySword = false;
  hatchet = false;
  battleAxe = false;
  halberd = false;
  spear = false;
  club = false;
  crossbow = false;
  longBow = false;
  arrows = 0;

  leatherArmor = false;
  shield = false;
  helmet = false;
  chainMail = false;
  steelArmor = false;

  borinArmor = false;
  protectionCloak = false;
  orcScourge = false;
  spiritSteel = false;
  loreTalisman = false;
  returnScepter = false;
  balurBracers = false;
  ancientsCoat = false;
  livingStrength = false;
  sageRing = false;
  returnRing = false;
  magicalLightning = false;

  healing = 0;
  speed = 0;
  resistance = 0;
  strength = 0;
  heroic = 0;
  holy = 0;
  life = 0;

  rope = 0;
  toolset = false;

  notes = '';

  constructor(
    id: HeroType,
    data: Partial<Hero> = {},
  ) {
    this.id = id;
    Object.assign(this, data);
  }
}