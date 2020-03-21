export type Hero = "barbarian" | "dwarf" | "elf" | "wizard";

export function isHero(id: string): id is Hero {
  return ["barbarian", "dwarf", "elf", "wizard"].indexOf(id) > -1;
}

export class Sheet {
  readonly hero: Hero;
  player = "";

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

  notes = "";

  constructor(hero: Hero, data: Partial<Sheet> = {}) {
    this.hero = hero;
    Object.assign(this, data);
  }
}
