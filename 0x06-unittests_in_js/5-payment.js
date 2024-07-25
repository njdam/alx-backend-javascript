const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const totCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${totCost}`);
}

module.exports = sendPaymentRequestToApi;
