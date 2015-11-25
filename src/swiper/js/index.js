(function(){

  var node_pics = document.getElementsByClassName('item'),
      big_pic_urls = [
        __uri('imgs/me.jpg'),
        __uri('imgs/psb.jpeg'),
        __uri('imgs/window.jpg')
      ];
  Array.prototype.forEach.call(node_pics,function(node,index){
    new util.toucher(node).on('singleTap',function(){
        new swiper(big_pic_urls,index);
    });
  });
})();
