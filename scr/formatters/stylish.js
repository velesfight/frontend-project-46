import _ from 'lodash';

const replace = ' ';
const intendSize = (depth, spaceCount = 4) => replace.repeat(depth * spaceCount - 2);

const treeString = (data, depth) => {
  if (!_.isObject(data) || data === null) {
    return String(data);
  }
  const muss = Object.entries(data).map(([key, value]) => `${intendSize(depth + 1)}  ${key}: ${treeString(value, depth + 1)}`);
  const result = ['{', ...muss, `${intendSize(depth)}  }`].join('\n');
  return result;
};
const formaterStylish = (tree) => {
  const iter = (node, depth) => {
    const getType = node.type;
    const getKey = node.key;
    if (getType === 'added') {
      return `${intendSize(depth)}+ ${getKey}: ${treeString(node.value, depth)}`;
    }
    if (getType === 'deleted') {
      return `${intendSize(depth)}- ${getKey}: ${treeString(node.value, depth)}`;
    }
    if (getType === 'changed') {
      const string1 = `${intendSize(depth)}- ${getKey}: ${treeString(node.value1, depth)}`;
      const string2 = `${intendSize(depth)}+ ${getKey}: ${treeString(node.value2, depth)}`;
      return [string1, string2].join('\n');
    }
    if (getType === 'nested') {
      const nested = node.children;
      const childrens = nested.map((child) => iter(child, depth + 1));
      return `${intendSize(depth)}  ${getKey}: {\n${childrens.join('\n')}\n${intendSize(depth)}  }`;
    }
    if (getType === 'notchanged') {
      return `${(intendSize(depth))}  ${getKey}: ${treeString(node.value, depth)}`;
    }
  };
  const result = tree.map((node) => iter(node, 1));
  return ['{', ...result, '}'].join('\n');
};

export default formaterStylish;
