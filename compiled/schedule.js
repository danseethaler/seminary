'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schedule_dates = require('./schedule_dates');

var _schedule_dates2 = _interopRequireDefault(_schedule_dates);

var _ut = require('@danseethaler/ut');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var today = (0, _moment2.default)().format('YYYY-MM-DD');

exports.default = _schedule_dates2.default.reduce(setupSchedule, {
  today: null,
  next: null,
  dates: []
});


function setupSchedule(config, date) {
  date.date = (0, _moment2.default)(date.date, 'M-D-YYYY').format('YYYY-MM-DD');

  if (date.date > today && !config.next) {
    date.id = 'next';
    config.next = date;
  }

  if (date.date === today) {
    date.id = 'today';
    config.today = date;
  }

  config.dates.push(date);

  return config;
}