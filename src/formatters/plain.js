import _ from 'lodash';

const getString = (value) => {
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
      return `Property '${allKeys}' was added with value: ${getString(node.value)}`;
    }
    if (getType === 'changed') {
      return `Property '${allKeys}' was updated. From ${getString(node.value1)} to ${getString(node.value2)}`;
    }
    if (getType === 'nested') {
      const childrens = node.children
        .map((child) => (iter(child, allKeys)))
        .filter((child) => (child !== ''));
      return `${childrens.join('\n')}`;
    }
    if (getType === 'notchanged') {
      return '';
    }
    return Error(`Unknown type - ${getType}`);
  };
  const result = tree
    .map((node) => iter(node))
    .filter((node) => (node !== ''));

  return `${result.join('\n')}`;
};

export default formaterPlain;
