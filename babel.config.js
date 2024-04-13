module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-typescript'],
  plugins: [
    ['module:react-native-dotenv', {
      moduleName: 'react-native-dotenv',
      path: '.env',
    }],
    [
      'module-resolver',
      {
        alias: {
          Assets: './src/Assets',
          Components: './src/Components',
          Constants: './src/Constants',
          Fixtures: './src/Fixtures',
          Helpers: './src/Helpers',
          Hooks: './src/Hooks',
          Modals: './src/Modals',
          Navigation: './src/Navigation',
          Network: './src/Network',
          Providers: './src/Providers',
          Screens: './src/Screens',
          Stores: './src/Stores',
          Theme: './src/Theme',
          Types: './src/Types',
        },
      },
    ],

    ['react-native-reanimated/plugin',],
  ]
}
