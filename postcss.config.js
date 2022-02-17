module.exports = {
  "plugins": {
    "autoprefixer": {},
    // https://github.com/vitejs/vite/issues/3046
    "postcss-pxtorem": { rootValue: 75, unitPrecision: 5, propList: ['*'] },
  },
};
