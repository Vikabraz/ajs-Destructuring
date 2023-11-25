import Charakter from './Charakter';

class Undead extends Charakter {
  constructor(name, type = 'Undead') {
    super(name, type);
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
    this.special = [
      {
        id: 1,
        name: 'Двойной выстрел',
        icon: 'http:/',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 2,
        name: 'Накаутирующий удар',
        icon: 'http:/',
      },
    ];
  }
}

export default function getSpecial(pers) {
  const res = [];
  const { special } = pers;

  for (let i = 0; i < special.length; i++) {
    if (!special[i].descripton) {
      special[i].description = 'Описание недоступно';
    }
    res.push({
      id: special[i].id,
      name: special[i].name,
      icon: special[i].icon,
      description: special[i].description,
    });
  }
  return res;
}
