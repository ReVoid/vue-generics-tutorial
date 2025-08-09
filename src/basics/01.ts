/* eslint-disable @typescript-eslint/no-unused-vars */

type Car = { model: string; speed: number };
type Person = { firstName: string, lastName: string };

// Problem ❌
// Types are duplicated.
type Cars = { cars: Car[] } & { select(): Car };
type People = { people: Person[] } & { select(): Person };
