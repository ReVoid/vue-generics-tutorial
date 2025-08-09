/* eslint-disable @typescript-eslint/no-unused-vars */

type Car = { model: string; speed: number };
type Person = { firstName: string, lastName: string };

// Solution ✅
type SelectableList<T> = {
  items: T[];
  select: T;
};

// No duplications anymore 👍
type Cars = SelectableList<Car>;
type People = SelectableList<Person>;

const cars: SelectableList<Car> = undefined as unknown as SelectableList<Car>;  // The implementation doesn't matter.
const people: SelectableList<Person> = undefined as unknown as SelectableList<Person>;  // The implementation doesn't matter.

const car = cars.select;
const person = people.select;

const speed: number = car.speed;
const firstName: string = person.firstName;
