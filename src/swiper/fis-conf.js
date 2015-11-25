fis.match('*.{js,css,jpg,png,less,gif,svg}', {
  useHash: true,
});


fis.match('*.less', {
  // fis-parser-less 插件进行解析
  parser: fis.plugin('less'),
  // .less 文件后缀构建后被改成 .css 文件
  rExt: '.css'
});

//让所有文件，都使用相对路径。
fis.match('**', {
  relative: true
});
