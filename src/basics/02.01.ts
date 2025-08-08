/* eslint-disable @typescript-eslint/no-unused-vars */

// Problem ❌
// Types are duplicated and don't know about each other
function Component(prop: string | number): string | number {
  return prop;
}

// Did you expect string? 🤪
const output = Component('whatever'); // output: string | number
// @ts-expect-error for demo purpose only
const x: boolean = output.startsWith('w'); // ❌ Nope, you can't use methods belonged to a string type before narrowing.
const y: boolean = typeof output === 'string' ? output.startsWith('w') : false; // Pretty annoying, don't you think?
