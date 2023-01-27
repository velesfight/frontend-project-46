import formaterStylish from './stylish.js';
import formaterPlain from './plain.js';

const getFormaters = (tree, format) => {
  switch (format) {
    case 'json':
      return JSON.stringify(tree);
    case 'stylish':
      return formaterStylish(tree);
    case 'plain':
      return formaterPlain(tree);
    default: return Error(`Unknown format - ${format}`);
  }
};
export default getFormaters;
