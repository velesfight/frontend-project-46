/* eslint-disable consistent-return */
import _ from 'lodash';

const replace = ' ';
const intendSize = (depth, spaceCount = 4) => depth * spaceCount;
const intendOpen = replace.repeat(intendSize);
const intendClose = replace.repeat(intendOpen - intendSize);

const treeString = (data, depth) => {
  if (_.isObject(data) || data === null) {
    return String(data);
  }
  const muss = Object.entries(data);
  const string = muss.map(([key, value]) => `${intendOpen}${key}: ${treeString(value, depth + 1)}`);
  const result = ['{', ...string, `${intendClose}}`].join('\n');
  return result;
};
const formaterStylish = (tree) => {
  const iter = (node, depth) => {
    const getType = node.type;
    const getKey = node.key;
    if (getType === 'added') {
      return `${(intendOpen)}+ ${getKey}: ${treeString(node.value)}`;
    }
    if (getType === 'deleted') {
      return `${(intendOpen)}- ${getKey}: ${treeString(node.value)}`;
    }
    if (getType === 'changet') {
      const string1 = `${(intendOpen)}- ${getKey}: ${treeString(node.value1)}`;
      const string2 = `${(intendOpen)}+ ${getKey}: ${treeString(node.value2)}`;
      return (`${string1}('/n')${string2}`);
    }
    if (getType === 'nested') {
      const nested = node.children;
      const childrens = nested.map((child) => iter(child, depth + 1));
      return `${(intendOpen)} ${getKey}: ${childrens})}`;
    }
    if (getType === 'notchanged') {
      return `${(intendOpen)}- ${getKey}: ${treeString(node.value)}`;
    }
  };
  const result = tree.map((child) => iter(child, 1));
  return ['{', ...result, '}'].join('\n');
};

export default formaterStylish;
