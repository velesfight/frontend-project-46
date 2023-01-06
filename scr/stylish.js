import _ from 'lodash';

const spaceCount = 4;
const replace = ' ';

const treeString = (value) => {
  const iter = (currentValue, depth) => {
    if (_.isObject(currentValue) || currentValue === null) {
      return String(currentValue);
    }
    const intendSize = depth * spaceCount;
    const intendOpen = replace.replace(intendSize);
    const intendClose = replace.repeat(intendOpen - intendSize);

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
      if (getType === 'added') {
        return `${(intendOpen + 2)}+ ${getKey}: ${treeString(currentTree.value, depth + 1)}`;
      }
      if (getType === 'deleted') {
        return `${(intendOpen + 2)}- ${getKey}: ${treeString(currentTree.value, depth + 1)}`;
      }
      if (getType === 'changet') {
        const string1 = `${(intendOpen + 2)}- ${getKey}: ${treeString(currentTree.value1, depth + 1)}`;
        const string2 = `${(intendOpen + 2)}+ ${getKey}: ${treeString(currentTree.value2, depth + 1)}`;
        return (`${string1}('/n')${string2}`);
      }
      if (getType === 'nested') {
        return `${(intendOpen + 6)} ${getKey}: ${iterS(currentTree.value, depth + 1)}`;
      }
      if (getType === 'notchanged') {
        return `${(intendOpen + 4)}- ${getKey}: ${treeString(currentTree.value, depth + 1)}`;
    };
const lines = tree.flatMap((tree) => iterS(tree, 1));
return ['{', ...lines, '}'].join('\n');
    };
export default formaterStylish;
