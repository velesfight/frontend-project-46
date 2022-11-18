#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
const program = new Command();
program
  .option('-h, --help', 'display help for command')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-v, --vers', 'output the number version');

  program.parse();
