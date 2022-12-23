import yaml from 'js-yaml';
import _ from 'lodash';

const parser = (data, format) => {
if (format === 'json') {
    return JSON.parse(data);
  } else if (format === 'yml') {
    return yaml.load(data);
  } else if (format === 'yaml') {
    return yaml.load(data);
} else {
    return 'error';
}
};
export default parser;
