/* eslint-disable consistent-return */
import _ from 'lodash';

const replace = ' ';
const intendSize = (depth, spaceCount = 4) => depth * spaceCount;
const intendOpen = replace.repeat(intendSize);
const intendClose = replace.repeat(intendOpen - intendSize);

const treeString = (value) => {
  const iter = (currentValue, depth) => {
    if (_.isObject(currentValue) || currentValue === null) {
      return String(currentValue);
    }
    const muss = Object.entries(currentValue);
    const string = muss.map(([key, val]) => `${intendOpen}${key}: ${iter(val, depth + 1)}`);
    const result = ['{', ...string, `${intendClose}}`].join('\n');
    return result;
  };
  return iter(value, 1);
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
      const childrens = nested.map((node) => iter(node, depth));
      return `${(intendOpen)} ${getKey}: ${childrens})}`;
    }
    if (getType === 'notchanged') {
      return `${(intendOpen)}- ${getKey}: ${treeString(node.value)}`;
    }
  };
  const result = tree.map((node) => iter(node, 1));
  return ['{', ...result, '}'].join('\n');
};

export default formaterStylish;
