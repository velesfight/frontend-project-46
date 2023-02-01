import _ from 'lodash';

const replace = ' ';
const intendSize = (depth, spaceCount = 4) => replace.repeat(depth * spaceCount - 2);

const getTreeString = (data, depth) => {
  if (!_.isObject(data) || data === null) {
    return String(data);
  }
  const lines = Object.entries(data).map(([key, value]) => `${intendSize(depth + 1)}  ${key}: ${getTreeString(value, depth + 1)}`);
  const result = ['{', ...lines, `${intendSize(depth)}  }`].join('\n');
  return result;
};
const formaterStylish = (tree) => {
  const iter = (node, depth) => {
    const types = node.type;
    const keys = node.key;
    if (types === 'added') {
      return `${intendSize(depth)}+ ${keys}: ${getTreeString(node.value, depth)}`;
    }
    if (types === 'deleted') {
      return `${intendSize(depth)}- ${keys}: ${getTreeString(node.value, depth)}`;
    }
    if (types === 'changed') {
      const string1 = `${intendSize(depth)}- ${keys}: ${getTreeString(node.value1, depth)}`;
      const string2 = `${intendSize(depth)}+ ${keys}: ${getTreeString(node.value2, depth)}`;
      return [string1, string2].join('\n');
    }
    if (types === 'nested') {
      const nested = node.children;
      const childrens = nested.map((child) => iter(child, depth + 1));
      return `${intendSize(depth)}  ${keys}: {\n${childrens.join('\n')}\n${intendSize(depth)}  }`;
    }
    if (types === 'notchanged') {
      return `${(intendSize(depth))}  ${keys}: ${getTreeString(node.value, depth)}`;
    }
    return Error(`Unknown type - ${types}`);
  };
  const result = tree.map((node) => iter(node, 1));
  return ['{', ...result, '}'].join('\n');
};

export default formaterStylish;
