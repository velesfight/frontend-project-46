import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../scr/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
const file1json = getFixturePath('file1.json');
const file2json = getFixturePath('file2.json');
const actual1 = genDiff(file1json, file2json);
const file1yaml = getFixturePath('file1.yaml');
const file2yaml = getFixturePath('file2.yaml');
const actual2 = genDiff(file1yaml, file2yaml);
const expectedResultStylish = readFile('resultStylish.txt');
const expectedResultJson = readFile('resultJson.txt');
test('gendiff.json', () => {
  expect(actual1).toEqual(expectedResultStylish);
});
test('gendiff.yaml', () => {
  expect(actual2).toEqual(expectedResultStylish);
});
test('gendiff.json', () => {
  expect(actual1).toEqual(expectedResultJson);
});
test('gendiff.yaml', () => {
  expect(actual2).toEqual(expectedResultJson);
});
