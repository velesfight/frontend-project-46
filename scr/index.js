import genDiff1 from '../scr/diffFunc.js';
import fs from 'fs';
import path from 'path';

const genDiff = (filepath1, filepath2) => {

    const fileOne = fs.readFileSync((path.resolve(filepath1)), 'utf-8');
    const fileTwo = fs.readFileSync((path.resolve(filepath2)), 'utf-8');
    const file1parse = JSON.parse(fileOne);
    const file2parse = JSON.parse(fileTwo);
    const result = genDiff1(file1parse, file2parse);
    return JSON.stringify(result);
};
export default genDiff;
