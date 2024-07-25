const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with right args', () => {
    // Create a spy for Utils.calculateNumber
    const calcNumSpy = sinon.spy(console);
    const sinStub = sinon.stub(Utils, 'calculateNumber');

    sinStub.returns(10);
    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Expect the spy to have been called with the correct arguments
    expect(sinStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(sinStub.callCount).to.be.equal(1);
    expect(calcNumSpy.log.calledWith('The total is: 10')).to.be.true;
    expect(calcNumSpy.log.callCount).to.be.equal(1);
    sinStub.restore()
    calcNumSpy.log.restore();
  });
});
