export const operator = {
    name: 'regex-match-rename',
    description: 'regex-match and then rename the resulting capture groups',
    externalLinks: [
      'https://regexone.com/',
      'https://regexr.com/',
      'https://cheatography.com/davechild/cheat-sheets/regular-expressions/',
    ],
    inputs: [
        'source', // string
        'regex', // string
        'names', // string
    ],
    outputs: [
        'result', // object[]
        'residue', // string
        'errorPrompt', // string
    ],
    run: (source: string, regex: string, names: string) => {
        const aliasList = ['_fullMatch', ...names.split('\n')];

        let splitRegex = /a/;
        let tokenRegex = /a/;
        try {
            splitRegex = new RegExp(regex, 'gm'); // global multiline
            tokenRegex = new RegExp(regex, 'm'); // multiline
        } catch (error) {
            return {
                result: [],
                residue: '',
                errorPrompt: error.toString(),
            };
        }
        const matchResults = source.match(splitRegex);
        const residue = source.replace(splitRegex, '');

        const isTotalMatch = residue === '';
        let matchResultSummary = (matchResults == null ? 'no match' : `${matchResults.length} matches`);
        if (isTotalMatch) {
            matchResultSummary += ', full match';
        } else {
            matchResultSummary += ', partial match';
        }

        if (!matchResults || matchResults.length <= 0) {
            return {
                result: [],
                residue: '',
                errorPrompt: matchResultSummary,
            };
        }

        const tokensList = (matchResults
            .map((match) => {
                return tokenRegex.exec(match);
            })
            .map((tokens, matchIndex) => {
                const result: { _matchIndex: number, [x: string]: any } = { _matchIndex: 0 };
                if (!tokens) { return {}; }
                tokens.forEach((token, i) => (result[aliasList[i] || i] = token));

                result._matchIndex = matchIndex;
                result._input = tokens.input;
                return result;
            })
        );

        return {
            result: tokensList,
            residue,
            errorPrompt: matchResultSummary,
        };
    },
};

