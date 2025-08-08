/* eslint-disable @typescript-eslint/no-unused-vars */

type Car = { model: string; speed: number };
type Person = { firstName: string, lastName: string };

// Solution ✅
type List<T> = {
  items: T[];
  select: T;
};

// No duplications anymore 👍
type Cars = List<Car>;
type People = List<Person>;
