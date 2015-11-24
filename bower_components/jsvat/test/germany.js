var expect = require('chai').expect;
var jsvat = require('../dist/jsvat.js');

describe("Germany VAT", function () {
    it("Valid VAT", function () {
        expect(jsvat.checkVAT('DE111111125')).to.be.true;
        expect(jsvat.checkVAT('DE113298780')).to.be.true;
        expect(jsvat.checkVAT('DE113891176')).to.be.true;
        expect(jsvat.checkVAT('DE114189102')).to.be.true;
        expect(jsvat.checkVAT('DE119429301')).to.be.true;
        expect(jsvat.checkVAT('DE122119035')).to.be.true;
        expect(jsvat.checkVAT('DE126639095')).to.be.true;
        expect(jsvat.checkVAT('DE126823642')).to.be.true;
        expect(jsvat.checkVAT('DE128575725')).to.be.true;
        expect(jsvat.checkVAT('DE128936602')).to.be.true;
        expect(jsvat.checkVAT('DE129516430')).to.be.true;
        expect(jsvat.checkVAT('DE130502536')).to.be.true;
        expect(jsvat.checkVAT('DE132507686')).to.be.true;
        expect(jsvat.checkVAT('DE136695976')).to.be.true;
        expect(jsvat.checkVAT('DE138263821')).to.be.true;
        expect(jsvat.checkVAT('DE138497248')).to.be.true;
        expect(jsvat.checkVAT('DE142930777')).to.be.true;
        expect(jsvat.checkVAT('DE145141525')).to.be.true;
        expect(jsvat.checkVAT('DE145146812')).to.be.true;
        expect(jsvat.checkVAT('DE146624530')).to.be.true;
        expect(jsvat.checkVAT('DE160459932')).to.be.true;
        expect(jsvat.checkVAT('DE184543132')).to.be.true;
        expect(jsvat.checkVAT('DE199085992')).to.be.true;
        expect(jsvat.checkVAT('DE126563585')).to.be.true;
        expect(jsvat.checkVAT('DE203159652')).to.be.true;
        expect(jsvat.checkVAT('DE220709071')).to.be.true;
        expect(jsvat.checkVAT('DE247139684')).to.be.true;
        expect(jsvat.checkVAT('DE252429421')).to.be.true;
        expect(jsvat.checkVAT('DE256319655')).to.be.true;
        expect(jsvat.checkVAT('DE262044136')).to.be.true;
        expect(jsvat.checkVAT('DE282741168')).to.be.true;
        expect(jsvat.checkVAT('DE811209378')).to.be.true;
        expect(jsvat.checkVAT('DE811363057')).to.be.true;
        expect(jsvat.checkVAT('DE812321109')).to.be.true;
        expect(jsvat.checkVAT('DE812529243')).to.be.true;
        expect(jsvat.checkVAT('DE813030375')).to.be.true;
        expect(jsvat.checkVAT('DE813189177')).to.be.true;
        expect(jsvat.checkVAT('DE813232162')).to.be.true;
        expect(jsvat.checkVAT('DE813261484')).to.be.true;
        expect(jsvat.checkVAT('DE813495425')).to.be.true;
    });

    it("Invalid VAT", function () {
        expect(jsvat.checkVAT('DE111111126')).to.be.false;
        expect(jsvat.checkVAT('DE111111127')).to.be.false;
        expect(jsvat.checkVAT('DE111111128')).to.be.false;
        expect(jsvat.checkVAT('DE111111129')).to.be.false;
        expect(jsvat.checkVAT('DE111111120')).to.be.false;
        expect(jsvat.checkVAT('DE111111121')).to.be.false;
        expect(jsvat.checkVAT('DE000000020')).to.be.false;
        expect(jsvat.checkVAT('DE000000038')).to.be.false;
        expect(jsvat.checkVAT('DE000000046')).to.be.false;
        expect(jsvat.checkVAT('DE000000206')).to.be.false;
        expect(jsvat.checkVAT('DE000000062')).to.be.false;
        expect(jsvat.checkVAT('DE000000079')).to.be.false;
        expect(jsvat.checkVAT('DE000000087')).to.be.false;
        expect(jsvat.checkVAT('DE000000100')).to.be.false;
        expect(jsvat.checkVAT('DE000000118')).to.be.false;
        expect(jsvat.checkVAT('DE000000126')).to.be.false;
        expect(jsvat.checkVAT('DE000000142')).to.be.false;
        expect(jsvat.checkVAT('DE000000159')).to.be.false;
        expect(jsvat.checkVAT('DE000000167')).to.be.false;
        expect(jsvat.checkVAT('DE000000183')).to.be.false;
        expect(jsvat.checkVAT('DE000000191')).to.be.false;
        expect(jsvat.checkVAT('DE000000206')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(jsvat.checkVAT('DE 142930 777')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(jsvat.checkVAT('DE1-42930-777')).to.be.true;
    });
});