import fs from 'fs';
import path from 'path';
import genDiff1 from './diffFunc.js';
import parser from './parser.js';
import formaters from './formatters/index.js';

const getPath = (filepath) => path.resolve(filepath);
const readFile = (filepath) => fs.readFileSync((getPath(filepath)), 'utf-8');
const getFormat = (filepath) => path.extname(filepath).slice(1);

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const fileOne = readFile(filepath1);
  const fileTwo = readFile(filepath2);
  const format1 = getFormat(filepath1);
  const format2 = getFormat(filepath2);
  const fileparse1 = parser(fileOne, format1);
  const fileparse2 = parser(fileTwo, format2);
  const tree = genDiff1(fileparse1, fileparse2);
  return formaters(tree, format);
};
export default genDiff;
