import { compile } from 'handlebars';

export const operator = {
  name: 'handlebars-template',
  description: 'Generates text by applying a handlebars template to "data"',
  inputs: ['template', 'data'],
  outputs: ['result', 'err'],
  run: (template: string, data: object) => {
    try {
      const handlebarDelegate = compile(template);
      const result = handlebarDelegate(data);
      return {
        result,
        err: 'ok',
      };

    } catch (e) {
      return {
        result: '',
        err: '' + e.toString(),
      };
    }
  },
};

