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
  const iterS = (currentTree, depth) => {
    const getType = currentTree.type;
    const getKey = currentTree.key;
    const result = tree.map((currentTree) => {
      if (getType === 'added') {
      return `${(intendOpen)}+ ${getKey}: ${treeString(currentTree.value)}`;
    }
    if (getType === 'deleted') {
      return `${(intendOpen)}- ${getKey}: ${treeString(currentTree.value)}`;
    }
    if (getType === 'changet') {
      const string1 = `${(intendOpen)}- ${getKey}: ${treeString(currentTree.value1)}`;
      const string2 = `${(intendOpen)}+ ${getKey}: ${treeString(currentTree.value2)}`;
      return (`${string1}('/n')${string2}`);
    }
    if (getType === 'nested') {
      return `${(intendOpen)} ${getKey}: ${iterS(currentTree.value, depth + 1)}`;
    }
    if (getType === 'notchanged') {
      return `${(intendOpen)}- ${getKey}: ${treeString(currentTree.value)}`;
    }
  });
    return ['{', ...result, '}'].join('\n');
  };
  return (iterS(tree, 1));
};

export default formaterStylish;
