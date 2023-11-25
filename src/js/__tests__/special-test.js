import getSpecial from '../Undead';

text('function getSpecial with description', () => {
  const pers = {
    special: [
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
    ],
  };

  expect(getSpecial(pers)).toEqual([
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
      description: 'Описание недоступно',
    },
  ]);
});
