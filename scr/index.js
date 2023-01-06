import fs from 'fs';
import path from 'path';
import genDiff1 from './diffFunc.js';
import parser from './parser.js';
import stringiJSON from './stringTree.js';

const getPath = (filepath) => path.resolve(filepath);
const readFile = (filepath) => fs.readFileSync((getPath(filepath)), 'utf-8');
const getFotmat = (filepath) => path.extname(filepath).slice(1);

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const fileOne = readFile(filepath1);
  const fileTwo = readFile(filepath2);
  const format1 = getFotmat(filepath1);
  const format2 = getFotmat(filepath2);
  const file1parse = parser(fileOne, format1);
  const file2parse = parser(fileTwo, format2);
  const tree = genDiff1(file1parse, file2parse);
  const treeString = stringiJSON(tree, format);
  return treeString;
};
export default genDiff;
