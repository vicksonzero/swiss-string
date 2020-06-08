import { compile } from 'handlebars';

export const operator = {
  name: 'handlebars-template',
  description: 'Generates text by applying a handlebars template to "data"',
  externalLinks: [
    'https://handlebarsjs.com/guide/expressions.html#basic-usage',
  ],
  inputs: ['template', 'data'],
  outputs: ['result', 'errorPrompt'],
  run: (template: string, data: object) => {
    try {
      const handlebarDelegate = compile(template);
      const result = handlebarDelegate(data);
      return {
        result,
        errorPrompt: 'ok',
      };

    } catch (e) {
      return {
        result: '',
        errorPrompt: '' + e.toString(),
      };
    }
  },
};

