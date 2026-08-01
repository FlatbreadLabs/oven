export default {
  concurrency: 4,
  files: ['src/**/*.test.ts', 'scripts/**/*.test.js'],
  extensions: ['ts', 'js'],
  // Worker threads do not reliably honor `--import=tsx` for `.ts` test files.
  workerThreads: false,
  nodeArguments: ['--import=tsx'],
};
