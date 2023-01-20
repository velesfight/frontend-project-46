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
const file1yaml = getFixturePath('file1.yaml');
const file2yaml = getFixturePath('file2.yaml');
const expectedResultJson = readFile('resultJson.txt');
const expectedResultYaml = readFile('resultYaml.txt');
const expectedResultStylish = readFile('resultStylish.txt');
const expectedResultPlain = readFile('resultPlain.txt');
test.each([
  {
    a: file1json, b: file2json, format: 'json', expectresult: expectedResultJson,
  },
  {
    a: file1yaml, b: file2yaml, format: 'yaml', expectresult: expectedResultYaml,
  },
  {
    a: file1yaml, b: file2yaml, format: 'stylish', expectresult: expectedResultStylish,
  },
  {
    a: file1json, b: file2json, format: 'stylish', expectresult: expectedResultStylish,
  },
  {
    a: file1json, b: file2json, format: 'plain', expectresult: expectedResultPlain,
  },
  {
    a: file1yaml, b: file2yaml, format: 'plain', expectresult: expectedResultPlain,
  },

])('gendiff %s, %s', ({
  a, b, format, expectresult,
}) => {
  expect(genDiff(a, b, format)).toBe(expectresult);
});
