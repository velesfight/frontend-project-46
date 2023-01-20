import formaterStylish from './stylish.js';
import formaterPlain from './plain.js';

const formaters = (tree, format) => {
  if (format === 'json') {
    return JSON.stringify(tree);
  }
  if (format === 'stylish') {
    return formaterStylish(tree);
  }
  if (format === 'yaml') {
    return JSON.stringify(tree);
  }
  if (format === 'plain') {
    return formaterPlain(tree);
  }
  return 'error';
};
export default formaters;
