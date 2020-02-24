declare function require(moduleName: string): any;

export const operators = {
  'csv-split': require('./operators/csv-split').operator,
  'handlebars-template': require('./operators/handlebars-template').operator,
  'regex-match-rename': require('./operators/regex-match-rename').operator,
};

