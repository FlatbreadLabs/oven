#!/usr/bin/env node
import { resolve } from 'path';
import { existsSync } from 'fs';

if (process.env.FLATBREAD_CI) {
  const cliPath = resolve(
    process.cwd(),
    'node_modules',
    '@flatbread',
    'oven',
    'dist',
    'run_dag.js'
  );

  if (existsSync(cliPath)) {
    import('../dist/run_dag.js');
  } else {
    console.log('@flatbread/oven CLI is not available');
  }
} else {
  import('../dist/run_dag.js');
}
