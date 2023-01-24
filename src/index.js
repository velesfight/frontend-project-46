/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';
import genDiff1 from './diffFunc.js';
import parser from './parser.js';
import formaters from './formatters/index.js';

const getPath = (filepath) => path.resolve(filepath);
const readFile = (filepath) => fs.readFileSync((getPath(filepath)), 'utf-8');
const getFormat = (filepath) => path.extname(filepath).slice(1);

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const file1 = readFile(filepath1);
  const file2 = readFile(filepath2);
  const format1 = getFormat(filepath1);
  const format2 = getFormat(filepath2);
  const parsedFile1 = parser(file1, format1);
  const parsedFile2 = parser(file2, format2);
  const tree = genDiff1(parsedFile1, parsedFile2);
  return formaters(tree, format);
};
export default genDiff;
