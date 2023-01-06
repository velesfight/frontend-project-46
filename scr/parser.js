import yaml from 'js-yaml';

const parser = (data, format) => {
  if (format === 'json') {
    return JSON.parse(data);
  }
  if (format === 'yaml') {
    return yaml.load(data);
  }
  return 'error';
};
export default parser;
