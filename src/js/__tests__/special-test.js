import getSpecial from "../app";

test("function getSpecial with description", () => {
  const pers = {
    special: [
      {
        id: 8,
        name: "Двойной выстрел",
        icon: "http:/",
        description: "Двойной выстрел наносит двойной урон",
      },
      {
        id: 9,
        name: "Накаутирующий удар",
        icon: "http:/",
      },
    ],
  };

  expect(getSpecial(pers)).toEqual([
    {
      id: 8,
      name: "Двойной выстрел",
      icon: "http:/",
      description: "Двойной выстрел наносит двойной урон",
    },
    {
      id: 9,
      name: "Накаутирующий удар",
      icon: "http:/",
      description: "Описание недоступно",
    },
  ]);
});
