// eslint-disable-next-line
const proxy = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    '/user',
    proxy({
      target: 'http://18.191.134.30:5002',
      changeOrigin: true,
    }),
  );
    app.use(
        '/user/auth',
        proxy({
            target: 'http://18.191.134.30:5002',
            changeOrigin: true,
        }),
    );
};
