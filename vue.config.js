module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/demo/'
  : '/',
  outputDir: 'docs',
  pages: {
    index: {
      entry: 'src/main.ts',
      title: 'verifive | Demo',
    }
  }
};
