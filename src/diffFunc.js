import _ from 'lodash';

const genDiff1 = (file1, file2) => {
  const getKeys = Object.keys({ ...file1, ...file2 });
  const sortKeys = _.sortBy(_.union(getKeys));
  const result = sortKeys.map((key) => {
    if (_.isObject(file1[key]) && _.isObject(file2[key])) {
      return { type: 'nested', key, children: genDiff1(file1[key], file2[key]) };
    }
    if (!_.has(file1, key)) {
      return { type: 'added', key, value: file2[key] };
    }
    if (!_.has(file2, key)) {
      return { type: 'deleted', key, value: file1[key] };
    }
    if (file2[key] !== file1[key]) {
      return {
        type: 'changed', key, value1: file1[key], value2: file2[key],
      };
    }
    return { type: 'notchanged', key, value: file1[key] };
  });
  return result;
};
export default genDiff1;
