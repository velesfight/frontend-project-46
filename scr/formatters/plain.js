/* eslint-disable consistent-return */
import _ from 'lodash';

const valueString = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return String(value);
};

const formaterPlain = (tree) => {
  const iter = (node, parent) => {
    const getType = node.type;
    const getKey = node.key;
    const allKeys = parent ? `${parent}.${getKey}` : `${getKey}`;
    if (getType === 'deleted') {
      return `Property '${allKeys}' was removed`;
    }
    if (getType === 'added') {
      return `Property '${allKeys}' was added with value: ${valueString(node.value)}`;
    }
    if (getType === 'changed') {
      return `Property '${allKeys}' was updated. From ${valueString(node.value1)} to ${valueString(node.value2)}`;
    }
    if (getType === 'nested') {
      const childrens = node.children.map((child) => (iter(child, allKeys)));
      return `${childrens.join('\n')}`;
    }
  };
  const result = tree.map((node) => iter(node));
  return `${result.join('\n')}`;
};
export default formaterPlain;
