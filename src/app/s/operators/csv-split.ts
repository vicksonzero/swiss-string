export const operator = {
  name: 'csv-split',
  description: 'split a csv string into tokens, taking account of the presence of quotes',
  inputs: ['str', 'separatorRegex', 'quotesRegex'],
  outputs: ['tokens', 'err'],
  run: (str: string, separatorRegex: string, quotesRegex: string) => {
    try {
      // const testCase = '123,2.99,AMO024,Title,  "Description\\", more info",,123987564';
      // const regex = / (?=(?:(?:[^\"]|\\")*\"(?:[^\"]|\\")*\")*(?!(?:[^\"]|\\")*\"))/;
      const regexStr = `${separatorRegex}(?=(?:(?:[^${quotesRegex}]|\\${quotesRegex})*${quotesRegex}(?:[^${quotesRegex}]|\\${quotesRegex})*${quotesRegex})*(?!(?:[^${quotesRegex}]|\\${quotesRegex})*${quotesRegex}))`;
      const regex = new RegExp(regexStr, '');
      const tokens = str.split(regex).map((token, i) => {
        return (token
          .replace(new RegExp(`(^${quotesRegex})|(${quotesRegex}$)`, 'g'), '') // remove start and end quotes
          .replace(new RegExp(`\\\\(${quotesRegex})`, 'g'), '$1') // remove escaped quotes
        );
        // return token;
      });

      return {
        tokens,
        err: 'ok',
      };

    } catch (e) {
      return {
        tokens: null,
        err: '' + e.toString(),
      };
    }
  },
};

