const formatFullName = require('../formatFullName.js');
const expect = require('chai').expect;

describe('formatFullName', () => {

    it('should return an error if "fullName" arg is not a string', () => {
        expect(formatFullName(undefined)).to.equal('Error');
        expect(formatFullName(12)).to.equal('Error');
        expect(formatFullName({})).to.equal('Error');
        expect(formatFullName([])).to.equal('Error');
        expect(formatFullName(function() {})).to.equal('Error');
  
    });

    it('should return an error if "fullName" arg is empty', () => {
        expect(formatFullName('')).to.equal('Error');
    });

    it('should return an error if "fullName" arg is not in format <firstName> <lastName>', () => {
        expect(formatFullName('john')).to.equal('Error');
        expect(formatFullName('john amanda doe')).to.equal('Error');
    });

    it('should return correct first name and last name', () => {
        expect(formatFullName('john doe')).to.equal('John Doe');
        expect(formatFullName('jOHN dOE')).to.equal('John Doe');
        expect(formatFullName('JOHN DOE')).to.equal('John Doe');
    });
  
  });