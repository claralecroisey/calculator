import { expect } from 'chai';
import { add } from './calculator';

describe('calculator', () => {
    it('should return a calculated value of 0', () => {
        expect(add("")).to.equal(0);
    });

    it('should return a calculated value of 25', () => {
        expect(add("25")).to.equal(25);
    });

    it('should return a calculated value of 3', () => {
        expect(add("1,2")).to.equal(3);
    });

    it('should return a calculated value of 10', () => {
        expect(add("1,2,3,4")).to.equal(10);
    });

    it('should return a calculated value of 6', () => {
        expect(add("1\t2\t3")).to.equal(6);
    });

    it('should return a calculated value of 10', () => {
        expect(add("1\n2\n3\n4")).to.equal(10);
    });

    it('should return a calculated value of 6', () => {
        expect(add("1\n2,3")).to.equal(6);
    });

    it('should return a calculated value of 3', () => {
        expect(add("//[;]\n1;2")).to.equal(3);
    });

    it('should raise an exception "negatives not allowed"', () => {
        expect(function() { add("-1,2"); }).to.throw(Error, "negatives not allowed");
    });

    it('should ignore the number bigger than 1000 and return 2"', () => {
        expect(add("2,1001")).to.equal(2);
    });

    it('should return a calculated value of 6', () => {
        expect(add("//[***]\n1***2***3")).to.equal(5);
    });
})