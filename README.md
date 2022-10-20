This simple app doesn't work when minified using `swcMinify`

Steps to reproduce:

1. `npm install && npm run build && npm run start`
2. Open http://localhost:3000/
3. Click on `Test`

The same steps but using `npm run dev` at step 1 doesn't produce the error:

```
react_devtools_backend.js:4026 TypeError: number 0 is not iterable (cannot read property Symbol(Symbol.iterator))
    at new Map (<anonymous>)
    at 477-6c21ad656f6f5619.js:1:34664
    at 477-6c21ad656f6f5619.js:1:33515
    at eO (477-6c21ad656f6f5619.js:1:34644)
    at C (477-6c21ad656f6f5619.js:1:31286)
    at 477-6c21ad656f6f5619.js:1:31334
    at uJ (framework-ed075df0e0b45174.js:9:91731)
    at u1 (framework-ed075df0e0b45174.js:9:91927)
    at o5 (framework-ed075df0e0b45174.js:9:112680)
    at oQ (framework-ed075df0e0b45174.js:9:104018)
```
