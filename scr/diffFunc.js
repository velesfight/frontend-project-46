import _ from 'lodash';

const genDiff1 = (file1, file2) => {
  const keys = Object.keys({ ...file1, ...file2 });
  const sortKeys = _.sortBy(keys);
  const result = sortKeys.map((key) => {
    const valueOne = file1[key];
    const valueTwo= file2[key];
    if (!_.has(file1, key)) {
      return { type: 'addded', key, value2: valueTwo };
    } 
    if (!_.has(file2, key)) {
      return { type: 'deleted', key, value1: valueOne } ;
    } 
    if (_.isObject(valueOne) && _.isObject(valueTwo)) {
      return { type: 'nested', key, values: genDiff1(valueOne, valueTwo) };
    }
    if (valueTwo !== valueOne) {
      return { type: 'changed', key, value1: valueOne, value2: valueTwo };
    } 
    return { type: 'notchanged', key,  value: valueOne };
  });
  return result;
};
export default genDiff1;
