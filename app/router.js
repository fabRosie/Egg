/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/rosie', controller.home.rosie);
  router.get('/getboys', controller.home.getBoys);
  router.get('/getboy', controller.home.getBoy);
  router.get('/getboy2/:name/:age', controller.home.getBoy2);

  router.post('/add', controller.home.add);
};
