var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("Bulgaria VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVAT('BG0000100153')).to.be.true;
        expect(VatChecker.checkVAT('BG0000100159')).to.be.true;
        expect(VatChecker.checkVAT('BG000670680')).to.be.true;
        expect(VatChecker.checkVAT('BG0041010002')).to.be.true;
        expect(VatChecker.checkVAT('BG0432270001')).to.be.true;
        expect(VatChecker.checkVAT('BG040683212')).to.be.true;
        expect(VatChecker.checkVAT('BG101004508')).to.be.true;
        expect(VatChecker.checkVAT('BG103041626')).to.be.true;
        expect(VatChecker.checkVAT('BG103704427')).to.be.true;
        expect(VatChecker.checkVAT('BG103873594')).to.be.true;
        expect(VatChecker.checkVAT('BG103873594')).to.be.true;
        expect(VatChecker.checkVAT('BG104049218')).to.be.true;
        expect(VatChecker.checkVAT('BG111004501')).to.be.true;
        expect(VatChecker.checkVAT('BG123115379')).to.be.true;
        expect(VatChecker.checkVAT('BG117546706')).to.be.true;
        expect(VatChecker.checkVAT('BG121393209')).to.be.true;
        expect(VatChecker.checkVAT('BG121745404')).to.be.true;
        expect(VatChecker.checkVAT('BG121846702')).to.be.true;
        expect(VatChecker.checkVAT('BG1234567893')).to.be.true;
        expect(VatChecker.checkVAT('BG127595406')).to.be.true;
        expect(VatChecker.checkVAT('BG130389149')).to.be.true;
        expect(VatChecker.checkVAT('BG130500368')).to.be.true;
        expect(VatChecker.checkVAT('BG130544891')).to.be.true;
        expect(VatChecker.checkVAT('BG131071587')).to.be.true;
        expect(VatChecker.checkVAT('BG131134023')).to.be.true;
        expect(VatChecker.checkVAT('BG131142625')).to.be.true;
        expect(VatChecker.checkVAT('BG131202360')).to.be.true;
        expect(VatChecker.checkVAT('BG131272009')).to.be.true;
        expect(VatChecker.checkVAT('BG131394206')).to.be.true;
        expect(VatChecker.checkVAT('BG131406904')).to.be.true;
        expect(VatChecker.checkVAT('BG131570565')).to.be.true;
        expect(VatChecker.checkVAT('BG160084694')).to.be.true;
        expect(VatChecker.checkVAT('BG160135231')).to.be.true;
        expect(VatChecker.checkVAT('BG175074752')).to.be.true;
        expect(VatChecker.checkVAT('BG175163651')).to.be.true;
        expect(VatChecker.checkVAT('BG175281594')).to.be.true;
        expect(VatChecker.checkVAT('BG175352176')).to.be.true;
        expect(VatChecker.checkVAT('BG175379202')).to.be.true;
        expect(VatChecker.checkVAT('BG200174309')).to.be.true;
        expect(VatChecker.checkVAT('BG200313292')).to.be.true;
        expect(VatChecker.checkVAT('BG200717477')).to.be.true;
        expect(VatChecker.checkVAT('BG200893288')).to.be.true;
        expect(VatChecker.checkVAT('BG200950556')).to.be.true;
        expect(VatChecker.checkVAT('BG200964147')).to.be.true;
        expect(VatChecker.checkVAT('BG201071853')).to.be.true;
        expect(VatChecker.checkVAT('BG201219134')).to.be.true;
        expect(VatChecker.checkVAT('BG201543613')).to.be.true;
        expect(VatChecker.checkVAT('BG201809971')).to.be.true;
        expect(VatChecker.checkVAT('BG202376409')).to.be.true;
        expect(VatChecker.checkVAT('BG825312229')).to.be.true;
        expect(VatChecker.checkVAT('BG831144533')).to.be.true;
        expect(VatChecker.checkVAT('BG837107196')).to.be.true;
        expect(VatChecker.checkVAT('BG9902280002')).to.be.true;
        expect(VatChecker.checkVAT('BG101004509')).to.be.false;
        expect(VatChecker.checkVAT('BG101004507')).to.be.false;
        expect(VatChecker.checkVAT('BG111004500')).to.be.false;
        expect(VatChecker.checkVAT('BG111004502')).to.be.false;
        expect(VatChecker.checkVAT('BG9902280001')).to.be.false;
        expect(VatChecker.checkVAT('BG9902280004')).to.be.false;
        expect(VatChecker.checkVAT('BG0433170001')).to.be.false;
        expect(VatChecker.checkVAT('BG0433170002')).to.be.false;
        expect(VatChecker.checkVAT('BG0433170003')).to.be.false;
        expect(VatChecker.checkVAT('BG0433170004')).to.be.false;
        expect(VatChecker.checkVAT('BG0433170005')).to.be.false;
        expect(VatChecker.checkVAT('BG0433170006')).to.be.false;
        expect(VatChecker.checkVAT('BG0433170007')).to.be.false;
        expect(VatChecker.checkVAT('BG0433170009')).to.be.false;
        expect(VatChecker.checkVAT('BG0413270001')).to.be.false;
        expect(VatChecker.checkVAT('BG0413270002')).to.be.false;
        expect(VatChecker.checkVAT('BG0413270003')).to.be.false;
        expect(VatChecker.checkVAT('BG0413270004')).to.be.false;
        expect(VatChecker.checkVAT('BG0413270005')).to.be.false;
        expect(VatChecker.checkVAT('BG0413270008')).to.be.false;
        expect(VatChecker.checkVAT('BG0413270009')).to.be.false;
        expect(VatChecker.checkVAT('BG0413270000')).to.be.false;
        expect(VatChecker.checkVAT('BG1234567894')).to.be.false;
        expect(VatChecker.checkVAT('BG4234567890')).to.be.false;
        expect(VatChecker.checkVAT('BG4234567892')).to.be.false;
        expect(VatChecker.checkVAT('BG4234567893')).to.be.false;
        expect(VatChecker.checkVAT('BG4234567894')).to.be.false;
        expect(VatChecker.checkVAT('BG4234567895')).to.be.false;
        expect(VatChecker.checkVAT('BG4234567897')).to.be.false;
        expect(VatChecker.checkVAT('BG4234567898')).to.be.false;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVAT('BG8 31144 533')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVAT('BG831-144-533')).to.be.true;
    });
});