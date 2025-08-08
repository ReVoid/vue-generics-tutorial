/* eslint-disable @typescript-eslint/no-unused-vars */

function whatever<T>(arg: T): T {
  return arg;
}

// Let's try to pass a generic argument
const x: string = whatever<string>('');

// What if we don't have a possibility to pass a generic argument?
const y: number = whatever(2077); // ✅ It works!

// Resume
// That's how Vue components find out what type of data they are working with
