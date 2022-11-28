import fs from 'fs';
import * as path from 'path';

const genDiff1 = (file1, file2) => {
    const path1 = path.resolve(file1);
    const path2 = path.resolve(file2);
    const readFile1 = fs.readFileSync(path1, 'utf-8');
    const readFile2 = fs.readFileSync(path2, 'utf-8');
    const string1 = JSON.parse(readFile1);
    const string2 = JSON.parse(readFile2);
    const keys = Object.keys({ ...string1, ...string2 });
    const sortKeys = _.sortBy(keys);
    const result = sortKeys.map((key) => {
        const value1 = string1[key];
        const value2 = string2[key];
        if (!_.has(string1, key)) {
            result[`+ ${key}`] = value2;
        } else if (!_.has(string2, key)) {
            result[`- ${key}`] = value1;
        } else if (value2 !== value1) {
            result[`- ${key}`] = value1;
            result[`+ ${key}`] = value2;
        } else {
            result[key] = value1;
        }
})
        return JSON.stringify(resultKey);
};
export default genDiff1;
