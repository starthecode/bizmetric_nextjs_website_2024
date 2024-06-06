// const defaultTheme = require('tailwindcss/defaultTheme');
// const svgToDataUri = require('mini-svg-data-uri');
// const colors = require('tailwindcss/colors');
// const {
//   default: flattenColorPalette,
// } = require('tailwindcss/lib/util/flattenColorPalette');

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: 'class',
//   content: [
//     './app/**/*.{js,ts,jsx,tsx}',
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',

//     // Or if using `src` directory:
//     './src/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     keyframes: {
//       loop: {
//         to: {
//           'offset-distance': '100%',
//         },
//       },
//     },

//     extend: {
//       keyframes: {
//         wiggle: {
//           '0%': {
//             transform: 'translateY(5%)',
//           },
//           '50%': {
//             transform: 'translateY(0)',
//           },
//           '100%': {
//             transform: 'translateY(5%)',
//           },
//         },
//       },
//       animation: {
//         wiggle: 'wiggle 2s ease-in-out infinite',
//       },
//       colors: {
//         ebony: {
//           50: '#f4f6fb',
//           100: '#e8ecf6',
//           200: '#cbd8ec',
//           300: '#9db6dc',
//           400: '#6990c7',
//           500: '#4672b1',
//           600: '#345995',
//           700: '#2b4779',
//           800: '#273e65',
//           900: '#253555',
//           950: '#111827',
//         },

//         ebonyclay: {
//           50: '#f5f7fa',
//           100: '#eaeef4',
//           200: '#d0dbe7',
//           300: '#a6bcd3',
//           400: '#7799b9',
//           500: '#557ca2',
//           600: '#426287',
//           700: '#37506d',
//           800: '#30455c',
//           900: '#2c3c4e',
//           950: '#1f2937',
//         },

//         woodsmoke: {
//           50: '#f5f6f6',
//           100: '#e5e7e8',
//           200: '#ced2d3',
//           300: '#abb2b5',
//           400: '#828a8e',
//           500: '#666f74',
//           600: '#585e62',
//           700: '#4b4f53',
//           800: '#424648',
//           900: '#3a3d3f',
//           950: '#131415',
//         },
//         flamingo: {
//           50: '#fef5ee',
//           100: '#fee9d6',
//           200: '#fbd0ad',
//           300: '#f8ae79',
//           400: '#f48243',
//           500: '#f2692a',
//           600: '#e24614',
//           700: '#bc3412',
//           800: '#952a17',
//           900: '#782616',
//           950: '#411009',
//         },
//         junglegreen: {
//           50: '#effef9',
//           100: '#c7ffee',
//           200: '#90ffde',
//           300: '#51f7cc',
//           400: '#1de4b7',
//           500: '#04c89e',
//           600: '#00ae8d',
//           700: '#05806a',
//           800: '#0a6556',
//           900: '#0d5448',
//           950: '#00332d',
//         },
//         royalBlue: {
//           50: '#eff4ff',
//           100: '#dbe6fe',
//           200: '#bfd3fe',
//           300: '#93b4fd',
//           400: '#6090fa',
//           500: '#3b76f6',
//           600: '#2563eb',
//           700: '#1d58d8',
//           800: '#1e4baf',
//           900: '#1e408a',
//           950: '#172a54',
//         },
//       },
//       fontFamily: {
//         inter: ['Inter, sans-serif', 'sans-serif'],
//         cursive: ['Nothing You Could Do,cursive'],
//       },
//     },

//     plugins: [
//       addVariablesForColors,
//       function ({ matchUtilities, theme }) {
//         matchUtilities(
//           {
//             'bg-grid': (value) => ({
//               backgroundImage: `url("${svgToDataUri(
//                 `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
//               )}")`,
//             }),
//             'bg-grid-small': (value) => ({
//               backgroundImage: `url("${svgToDataUri(
//                 `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
//               )}")`,
//             }),
//             'bg-dot': (value) => ({
//               backgroundImage: `url("${svgToDataUri(
//                 `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
//               )}")`,
//             }),
//           },
//           {
//             values: flattenColorPalette(theme('backgroundColor')),
//             type: 'color',
//           }
//         );
//       },
//     ],
//   },
// };

// function addVariablesForColors({ addBase, theme }) {
//   let allColors = flattenColorPalette(theme('colors'));
//   let newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );

//   addBase({
//     ':root': newVars,
//   });
// }

const defaultTheme = require('tailwindcss/defaultTheme');

const svgToDataUri = require('mini-svg-data-uri');

const colors = require('tailwindcss/colors');
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    keyframes: {
      loop: {
        to: {
          'offset-distance': '100%',
        },
      },
    },

    extend: {
      keyframes: {
        wiggle: {
          '0%': {
            transform: 'translateY(5%)',
          },
          '50%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(5%)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
      },
      colors: {
        ebony: {
          50: '#f4f6fb',
          100: '#e8ecf6',
          200: '#cbd8ec',
          300: '#9db6dc',
          400: '#6990c7',
          500: '#4672b1',
          600: '#345995',
          700: '#2b4779',
          800: '#273e65',
          900: '#253555',
          950: '#111827',
        },

        ebonyclay: {
          50: '#f5f7fa',
          100: '#eaeef4',
          200: '#d0dbe7',
          300: '#a6bcd3',
          400: '#7799b9',
          500: '#557ca2',
          600: '#426287',
          700: '#37506d',
          800: '#30455c',
          900: '#2c3c4e',
          950: '#1f2937',
        },

        woodsmoke: {
          50: '#f5f6f6',
          100: '#e5e7e8',
          200: '#ced2d3',
          300: '#abb2b5',
          400: '#828a8e',
          500: '#666f74',
          600: '#585e62',
          700: '#4b4f53',
          800: '#424648',
          900: '#3a3d3f',
          950: '#131415',
        },
        flamingo: {
          50: '#fef5ee',
          100: '#fee9d6',
          200: '#fbd0ad',
          300: '#f8ae79',
          400: '#f48243',
          500: '#f2692a',
          600: '#e24614',
          700: '#bc3412',
          800: '#952a17',
          900: '#782616',
          950: '#411009',
        },
        junglegreen: {
          50: '#effef9',
          100: '#c7ffee',
          200: '#90ffde',
          300: '#51f7cc',
          400: '#1de4b7',
          500: '#04c89e',
          600: '#00ae8d',
          700: '#05806a',
          800: '#0a6556',
          900: '#0d5448',
          950: '#00332d',
        },
        royalBlue: {
          50: '#eff4ff',
          100: '#dbe6fe',
          200: '#bfd3fe',
          300: '#93b4fd',
          400: '#6090fa',
          500: '#3b76f6',
          600: '#2563eb',
          700: '#1d58d8',
          800: '#1e4baf',
          900: '#1e408a',
          950: '#172a54',
        },
      },
      fontFamily: {
        inter: ['Inter, sans-serif', 'sans-serif'],
        cursive: ['Nothing You Could Do,cursive'],
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-grid': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          'bg-grid-small': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          'bg-dot': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}
