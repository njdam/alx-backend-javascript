const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
    // Create a spy for Utils.calculateNumber
    const calcNumSpy = sinon.spy(Utils);

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Expect the spy to have been called with the correct arguments
    expect(calcNumSpy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(calcNumSpy.calculateNumber.callCount).to.be.equal(1);
    calcNumSpy.calculateNumber.restore();
  });
});
