const router = require('express').Router();
const controller = require('./controller');

router.route('/question')
  .get(controller.getQuestion);

router.route('/answer')
  .get(controller.getAnswer);

router.route('/product')
  .get(controller.getProduct);

router.route('/related')
  .get(controller.getRelated);

router.route('/loadCustomerQuestions')
  .get(controller.loadCustomerQuestions);

router.route('/loadRelatedProducts')
  .get(controller.loadRelatedProducts);

router.route('/loadProductDescription')
  .get(controller.loadProductDescription);

module.exports = router;