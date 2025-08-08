/* eslint-disable @typescript-eslint/no-unused-vars */

type Car = { model: string; speed: number };
type Person = { firstName: string, lastName: string };

// Problem
// Types and data structures duplication 🤫
type CarsNonGeneric = { cars: Car[] } & { select(): Car };
type PeopleNonGeneric = { people: Person[] } & { select(): Person };


// Solution
type List<T> = {
  items: T[];
  select: T;
}

// No duplication anymore
type Cars = List<Car>;
type People = List<Person>;
