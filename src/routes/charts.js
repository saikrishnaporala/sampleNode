var express = require('express'),
  router = express.Router(),
  ChartsController = require('../controllers/charts.controller.js'),
  controller = new ChartsController();

router.post('/', (req, res) => controller.createchart(req, res) );
router.get('/chart/Data', (req, res) => controller.getChartData(req, res) );

module.exports = router;