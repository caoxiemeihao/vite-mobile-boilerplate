module.exports = {
  "plugins": {
    "autoprefixer": {},
    "tailwindcss": {},
    // https://github.com/vitejs/vite/issues/3046
    "postcss-pxtorem": { rootValue: 100, unitPrecision: 5, propList: ['*'] },
  },
};
