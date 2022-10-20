This simple app doesn't work when minified using `swcMinify`

Steps to reproduce:

1. `yarn & yarn build & yarn start`
2. Open http://localhost:3000/

The same steps but using `yarn dev` at step 1 doesn't produce the error:

```
main-385ea533ec15f018.js:1 TypeError: r is not a function
    at 205 (579-538a3d2584cf956a.js:1:819)
    at r (579-538a3d2584cf956a.js:1:34252)
    at 579-538a3d2584cf956a.js:1:34760
    at 579-538a3d2584cf956a.js:1:35380
    at e (579-538a3d2584cf956a.js:1:35386)
    at 7029 (579-538a3d2584cf956a.js:1:35405)
    at i (webpack-ee7e63bc15b31913.js:1:141)
    at 3678 (index-f62a6fb27ed71723.js:1:258)
    at i (webpack-ee7e63bc15b31913.js:1:141)
    at index-f62a6fb27ed71723.js:1:151
```
