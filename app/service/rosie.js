'use strict';

const Service = require('egg').Service;
class RosieService extends Service {
  async getPerson(id) {
    return {
      id,
      name: 'rosie',
      age: 28,
    };
  }
}

module.exports = RosieService;
