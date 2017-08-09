'use strict';

let HttpStatus = require('http-status-codes'),
  Chart = require('../models/chart.module');

class ChartsController {

  createchart(req, res){
    let charts = new Chart();

    charts.data=req.body.data;
    charts.price=req.body.price;
    return charts.save().then((chartCollection) => {
        res.status(HttpStatus.OK).json(chartCollection);
      })
      .catch((err) => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err))
  }

  getChartData(req, res){
    let query = Chart.find();
    return query.exec().then((chartCollection) => {
      res.status(HttpStatus.OK).json(chartCollection);
    })
    .catch((err) => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err))
  }

}

module.exports = ChartsController;
