import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/d3sparql.mjs',

  output: [
    {
      file:    'dist/d3sparql.cjs',
      strict:  false, // d3.js is incompatible with strict mode because it accesses this.document
      format:  'cjs',
      exports: 'default'
    },

    {
      file:   'dist/d3sparql.js',
      strict:  false,
      format: 'iife',
      name:   'd3sparql',

      globals: {
        d3: 'd3'
      }
    }
  ],

  plugins: [
    nodeResolve(),
    commonjs()
  ],

  external: [
    'd3'
  ]
};
