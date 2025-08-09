/* eslint-disable @typescript-eslint/no-unused-vars */

type Car = { model: string; speed: number };
type Person = { firstName: string, lastName: string };

// Problem 1 ❌
// Type duplications.
type Cars = { cars: Car[], select(): Car };
type People = { people: Person[], select(): Person };


type CarsOrPeople = { items: (Car | Person)[]; select(): Car | Person };

const carsOrPeople: CarsOrPeople = undefined as unknown as CarsOrPeople; // The implementation doesn't matter.


// Problem 2 ❌
const selected = carsOrPeople.select(); // selected: Car | Person

// Manual type narrowing.
// @ts-expect-error for demo purpose only
const _speed: number = selected.speed; // Nope, you can't use the key belonged only to the `Car` type.
const speed: number = ('speed' in selected) ? selected.speed : 0; // Pretty annoying, don't you think?
