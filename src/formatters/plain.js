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

const formatPlain = (tree) => {
  const iter = (node, parent) => {
    const types = node.type;
    const keys = node.key;
    const allKeys = parent ? `${parent}.${keys}` : `${keys}`;
    if (types === 'deleted') {
      return `Property '${allKeys}' was removed`;
    }
    if (types === 'added') {
      return `Property '${allKeys}' was added with value: ${getString(node.value)}`;
    }
    if (types === 'changed') {
      return `Property '${allKeys}' was updated. From ${getString(node.value1)} to ${getString(node.value2)}`;
    }
    if (types === 'nested') {
      const childrens = node.children
        .map((child) => (iter(child, allKeys)))
        .filter((child) => (child !== ''));
      return `${childrens.join('\n')}`;
    }
    if (types === 'notchanged') {
      return '';
    }
    return Error(`Unknown type - ${types}`);
  };
  const result = tree
    .map((node) => iter(node))
    .filter((node) => (node !== ''));

  return `${result.join('\n')}`;
};

export default formatPlain;
