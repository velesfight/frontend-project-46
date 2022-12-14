import _ from 'lodash';

const genDiff1 = (file1, file2) => {
  const keys = Object.keys({ ...file1, ...file2 });
  const sortKeys = _.sortBy(keys);
  const result = [];
  sortKeys.forEach((key) => {
    const value1 = file1[key];
    const value2 = file2[key];
    if (!_.has(file1, key)) {
      result.push(`+ ${key}: ${value2}`);
    } else if (!_.has(file2, key)) {
      result.push(`- ${key}: ${value1}`);
    } else if (value2 !== value1) {
      result.push(`- ${key}: ${value1}\n+ ${key}: ${value2}`);
    } else {
      result.push(`  ${key}: ${value1}`);
    }
    return `{\n${result.join('\n')}\n}`;
  });
};
export default genDiff1;
