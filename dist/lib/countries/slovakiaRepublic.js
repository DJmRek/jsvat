export const slovakiaRepublic = {
    name: 'Slovakia_Republic',
    codes: ['SK', 'SVK', '703'],
    calcFn: (vat) => {
        const expect = 0;
        const checkDigit = (Number(vat) % 11);
        return checkDigit === expect;
    },
    rules: {
        regex: [/^(SK)([1-9]\d[2346-9]\d{7})$/]
    }
};
