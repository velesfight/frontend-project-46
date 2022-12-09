import fs from 'fs';
import path from 'path';
import genDiff1 from '../scr/diffFunc.js';

function getPath(filepath) {
    return path.resolve(filepath);
}
const readFile = (filepath) => fs.readFileSync((getPath(filepath)), 'utf-8');

  const genDiff = (filepath1, filepath2) => {
  const fileOne = readFile(filepath1);
  const fileTwo = readFile(filepath2);
  const file1parse = JSON.parse(fileOne);
  const file2parse = JSON.parse(fileTwo);
  const result = genDiff1(file1parse, file2parse);
  return result;
};
export default genDiff;
