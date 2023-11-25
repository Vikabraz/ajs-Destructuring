export default class Charakter {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('фигня какая-то');
    }
    this.name = name;

    if (
      !['Bowman', 'Swordsman', 'Magician', 'Deamon', 'Undead', 'Zombie'].some(
        (el) => el === type,
      )
    ) {
      throw new Error('фигня какая-то');
    }
    this.type = type;

    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('уже умер');
    }
    this.level++;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('уже умер');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
