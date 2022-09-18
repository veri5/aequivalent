module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/aequivalent/'
  : '/',
  outputDir: 'docs',
  pages: {
    index: {
      entry: 'src/main.ts',
      title: 'Identity Federation Demo',
    }
  }
};
