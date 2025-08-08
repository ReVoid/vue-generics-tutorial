/* eslint-disable @typescript-eslint/no-unused-vars */

// Solution ✅
function Component<T>(prop: T): T {
  return  prop;
}

const output: string = Component('whatever'); // output: string
const z: boolean = output.startsWith('w'); // ✅ No manual narrowing needed
