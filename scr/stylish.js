const spaceCount = 4;
const replace = ' ';

const stringify= (value) => {
    const iter = (currentValue, depth) => {
        if (_.isObject(currentValue) || currentValue === null) {
            return String(currentValue);
          } 
        
        const intendSize = depth * spaceCount;
        const intendOpen = replace.replace(intendSize);
        const intendClose = replace.repeat(intendOpen - intendSize);

        const muss = Object.entries(currentValue);
        const string = muss.map(([key, value]) => `${indendOpen}${key}: ${iter(value, depth + 1)}`);
        const result = ['{', ...string, `${intendClose}}`].join('\n');

        return result;
    }
    const formaterStylish = (tree) => {
        const iterS = (currentTree, depth) => {
            const getType = currentTree.type;
            const getKey = curretnTree.key;
            if (getType === 'added') {
                return `${(intendOpen + 2)}+ ${getKey}: ${stringify(currentTree.value2, depth + 1)}`;
            }
            if (getType === 'deleted') {
                return `${(intendOpen + 2)}- ${getKey}: ${stringify(currentTree.value1, depth + 1)}`;
            }
            if (getType === 'changet') {
                const string1 = `${(intendOpen + 2)}- ${getKey}: ${stringify(currentTree.value1, depth + 1)}`;
                const string2 = `${(intendOpen + 2)}+ ${getKey}: ${stringify(currentTree.value2, depth + 1)}`;
                return (`${string1}('/n')${string2}`);
            }
            if (getType === 'nested') {
                return `${(intendOpen + 6)} ${getKey}: ${stringify(currentTree.values, depth + 1)}`;
            }
            if (getType === 'notchanged') {
                return `${(intendOpen + 4)}- ${getKey}: ${stringify(currentTree.value, depth + 1)}`;
            }
            }
        const mussEntr = Object.entries(tree);
        const lines  = mussEntr.flatMap(([key, value]) => `${intendOpen}${key}: ${stylish(value, depth + 1)}`);
        const result = ['{', ...lines, `${intendClose}}`].join('\n');

        return result;
    }
    return iter(value, 1);
};
export default formaterStylish;
