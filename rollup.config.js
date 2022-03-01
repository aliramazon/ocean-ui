import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import autoprefixer from 'autoprefixer';

const packageJson = require('./package.json');
const isDevEnv = process.env.NODE_ENV === 'development';

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: isDevEnv ? true : false
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: isDevEnv ? true : false
            }
        ],
        plugins: [
            postcss({
                extract: false,
                modules: true,
                extensions: ['scss', 'css'],
                use: ['sass'],
                plugins: [autoprefixer()]
            }),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            terser()
        ]
    },
    {
        input: 'dist/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts()],
        external: ['react']
    }
];
