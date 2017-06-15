(function (routeConfig) {
  'user strict':

  routeConfig.init = function(app) {
    const routes = require('../routes/index');
    const authRoutes = require('../routes/auth');

    app.use('/', routes);
    app.user('/auth', authRoutes);
  };
})(module.exports);
