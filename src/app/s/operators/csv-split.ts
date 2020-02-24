export const operator = {
  name: 'csv-split',
  description: 'split a csv string into tokens, taking account of the presence of quotes',
  inputs: ['str'],
  outputs: ['tokens', 'errorPrompt'],
  run: (str: string) => {
    try {
      // const testCase = '123,2.99,AMO024,Title,  "Description\\", more info",,123987564';
      const regex = /,(?=(?:(?:[^\"]|\\")*\"(?:[^\"]|\\")*\")*(?!(?:[^\"]|\\")*\"))/;
      const tokens = str.split(regex).map((token, i) => {
        if (i === 0) { return token; }
        return token.substring(1);
      });

      return {
        tokens,
        errorPrompt: 'ok',
      };

    } catch (e) {
      return {
        tokens: null,
        errorPrompt: '' + e.toString(),
      };
    }
  },
};

