var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Romania VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVAT('RO11198699')).to.be.true;
        expect(VatChecker.checkVAT('RO99908')).to.be.true;
        expect(VatChecker.checkVAT('RO19')).to.be.true;
        expect(VatChecker.checkVAT('RO124')).to.be.true;
        expect(VatChecker.checkVAT('RO1235')).to.be.true;
        expect(VatChecker.checkVAT('RO12340')).to.be.true;
        expect(VatChecker.checkVAT('RO123453')).to.be.true;
        expect(VatChecker.checkVAT('RO1234565')).to.be.true;
        expect(VatChecker.checkVAT('RO123456789')).to.be.true;
        expect(VatChecker.checkVAT('RO16252454')).to.be.true;
        expect(VatChecker.checkVAT('RO13182060')).to.be.true;
        expect(VatChecker.checkVAT('RO1634820')).to.be.true;
        expect(VatChecker.checkVAT('RO6088916')).to.be.true;
        expect(VatChecker.checkVAT('RO8887308')).to.be.true;
        expect(VatChecker.checkVAT('RO6528510')).to.be.true;
        expect(VatChecker.checkVAT('RO12532133')).to.be.true;
        expect(VatChecker.checkVAT('RO5903310')).to.be.true;
        expect(VatChecker.checkVAT('RO13269826')).to.be.true;
        expect(VatChecker.checkVAT('RO16795469')).to.be.true;
        expect(VatChecker.checkVAT('RO8440074')).to.be.true;
        expect(VatChecker.checkVAT('RO3106872')).to.be.true;
        expect(VatChecker.checkVAT('RO16914128')).to.be.true;
        expect(VatChecker.checkVAT('RO10871486')).to.be.true;
        expect(VatChecker.checkVAT('RO6484554')).to.be.true;
        expect(VatChecker.checkVAT('RO11303530')).to.be.true;
        expect(VatChecker.checkVAT('RO3162813')).to.be.true;
        expect(VatChecker.checkVAT('RO15049908')).to.be.true;
        expect(VatChecker.checkVAT('RO10656216')).to.be.true;
        expect(VatChecker.checkVAT('RO15056387')).to.be.true;
        expect(VatChecker.checkVAT('RO2240182')).to.be.true;
        expect(VatChecker.checkVAT('RO11134288')).to.be.true;
        expect(VatChecker.checkVAT('RO12622899')).to.be.true;
        expect(VatChecker.checkVAT('RO4985052')).to.be.true;
        expect(VatChecker.checkVAT('RO10310742')).to.be.true;
        expect(VatChecker.checkVAT('RO7206955')).to.be.true;
        expect(VatChecker.checkVAT('RO12059648')).to.be.true;
        expect(VatChecker.checkVAT('RO12278648')).to.be.true;
        expect(VatChecker.checkVAT('RO9452492')).to.be.true;
        expect(VatChecker.checkVAT('RO8921825')).to.be.true;
        expect(VatChecker.checkVAT('RO5217028')).to.be.true;
        expect(VatChecker.checkVAT('RO15032108')).to.be.true;
        expect(VatChecker.checkVAT('RO6814946')).to.be.true;
        expect(VatChecker.checkVAT('RO10489304')).to.be.true;
        expect(VatChecker.checkVAT('RO9992239')).to.be.true;
        expect(VatChecker.checkVAT('RO15315570')).to.be.true;
        expect(VatChecker.checkVAT('RO13663790')).to.be.true;
        expect(VatChecker.checkVAT('RO14749539')).to.be.true;
        expect(VatChecker.checkVAT('RO16740366')).to.be.true;
        expect(VatChecker.checkVAT('RO16334236')).to.be.true;
        expect(VatChecker.checkVAT('RO4626652')).to.be.true;
        expect(VatChecker.checkVAT('RO15545880')).to.be.true;
        expect(VatChecker.checkVAT('RO11552248')).to.be.true;
        expect(VatChecker.checkVAT('RO16076897')).to.be.true;
        expect(VatChecker.checkVAT('RO7838048')).to.be.true;
        expect(VatChecker.checkVAT('RO2253999')).to.be.true;
        expect(VatChecker.checkVAT('RO6727475')).to.be.true;
        expect(VatChecker.checkVAT('RO4594917')).to.be.true;
        expect(VatChecker.checkVAT('RO13499400')).to.be.true;
        expect(VatChecker.checkVAT('RO11198698')).to.be.false;
        expect(VatChecker.checkVAT('RO99907')).to.be.false;
        expect(VatChecker.checkVAT('RO18')).to.be.false;
        expect(VatChecker.checkVAT('RO125')).to.be.false;
        expect(VatChecker.checkVAT('RO1238')).to.be.false;
        expect(VatChecker.checkVAT('RO12349')).to.be.false;
        expect(VatChecker.checkVAT('RO123451')).to.be.false;
        expect(VatChecker.checkVAT('RO1234564')).to.be.false;
        expect(VatChecker.checkVAT('RO123456780')).to.be.false;
        expect(VatChecker.checkVAT('RO099908')).to.be.false;
        expect(VatChecker.checkVAT('RO0099908')).to.be.false;
        expect(VatChecker.checkVAT('RO00099908')).to.be.false;
        expect(VatChecker.checkVAT('RO000099908')).to.be.false;
        expect(VatChecker.checkVAT('RO0000099908')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVAT('RO 459 491 7')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVAT('RO-459-491-7')).to.be.true;
    });
});