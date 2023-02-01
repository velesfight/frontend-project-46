import _ from 'lodash';

const genDiff1 = (data1, data2) => {
  const getKeys = Object.keys({ ...data1, ...data2 });
  const sortKeys = _.sortBy(_.union(getKeys));
  const result = sortKeys.map((key) => {
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { type: 'nested', key, children: genDiff1(data1[key], data2[key]) };
    }
    if (!_.has(data1, key)) {
      return { type: 'added', key, value: data2[key] };
    }
    if (!_.has(data2, key)) {
      return { type: 'deleted', key, value: data1[key] };
    }
    if (data2[key] !== data1[key]) {
      return {
        type: 'changed', key, value1: data1[key], value2: data2[key],
      };
    }
    return { type: 'notchanged', key, value: data1[key] };
  });
  return result;
};
export default genDiff1;
