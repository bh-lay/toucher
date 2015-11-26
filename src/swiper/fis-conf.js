

//md5
fis.match('**', {
  useHash: true
});
//html不用 md5
fis.match('*.html', {
  useHash: false
});

fis.match('*.less', {
  // fis-parser-less 插件进行解析
  parser: fis.plugin('less'),
  // .less 文件后缀构建后被改成 .css 文件
  rExt: '.css'
});

//启用插件
fis.hook('relative');

//让所有文件，都使用相对路径。
fis.match('**', {
  relative: true
})
