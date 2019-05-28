import { Country } from '../main';

export const czech_republic: Country = {
  name: 'Czech Republic',
  codes: ['CZ', 'CZE', '203'],
  calcFn: function (vat: string) {
    function _isLegalEntities(vat, rules) {
      let total = 0;

      if (rules.additional[0].test(vat)) {
        // Extract the next digit and multiply by the counter.
        for (let i = 0; i < 7; i++) {
          total += Number(vat.charAt(i)) * rules.multipliers[i];
        }

        // Establish check digit.
        total = 11 - total % 11;
        if (total === 10) total = 0;
        if (total === 11) total = 1;

        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        const expect = +vat.slice(7, 8);
        return total === expect;
      }

      return false;
    }

    function _isIndividualType1(vat, rules) {
      if (rules.additional[1].test(vat)) {
        const temp = Number(vat.slice(0, 2));

        return temp <= 62;
      }
    }

    function _isIndividualType2(vat, rules) {
      let total = 0;

      if (rules.additional[2].test(vat)) {
        // Extract the next digit and multiply by the counter.
        for (let j = 0; j < 7; j++) {
          total += +vat.charAt(j + 1) * rules.multipliers[j];
        }

        // Establish check digit.
        total = 11 - total % 11;
        if (total === 10) total = 0;
        if (total === 11) total = 1;

        // Convert calculated check digit according to a lookup table
        let expect = +vat.slice(8, 9);
        return rules.lookup[total - 1] === expect;
      }

      return false;
    }

    function _isIndividualType3(vat, rules) {
      if (rules.additional[3].test(vat)) {
        const temp: number = Number(vat.slice(0, 2)) + Number(vat.slice(2, 4)) + Number(vat.slice(4, 6)) + Number(vat.slice(6, 8)) + Number(vat.slice(8));
        const expect: boolean = Number(vat) % 11 === 0;
        return !!(temp % 11 === 0 && expect);
      }
      return false;
    }

    if (_isLegalEntities(vat, this.rules)) return true;
    if (_isIndividualType2(vat, this.rules)) return true;
    if (_isIndividualType3(vat, this.rules)) return true;
    if (_isIndividualType1(vat, this.rules)) return true;

    return false;
  },
  rules: {
    multipliers: [8, 7, 6, 5, 4, 3, 2],
    lookup: [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10],
    regex: [/^(CZ)(\d{8,10})(\d{3})?$/],
    additional: [
      /^\d{8}$/,
      /^[0-5][0-9][0|1|5|6]\d[0-3]\d\d{3}$/,
      /^6\d{8}$/,
      /^\d{2}[0-3|5-8]\d[0-3]\d\d{4}$/
    ]
  }
};