/* eslint-disable @typescript-eslint/no-unused-vars */

// Problem
function ComponentNonGeneric(prop: string | number): string | number {
  return prop;
}

// Did you expect string? 🤪
const outputNonGeneric = ComponentNonGeneric('whatever'); // output: string | number
// @ts-expect-error for demo purpose only
const x: boolean = outputNonGeneric.startsWith('w'); // ❌ Nope, you can't use methods belonged to a string type before narrowing.
const y: boolean = typeof outputNonGeneric === 'string' ? outputNonGeneric.startsWith('w') : false; // Pretty annoying, don't you think?


// Solution
function Component<T>(prop: T): T {
  return  prop;
}

const output = Component('whatever'); // output: string
const z = output.startsWith('w'); // ✅ No manual narrowing needed!


// Resume
// Generic types passthrough with strict types
