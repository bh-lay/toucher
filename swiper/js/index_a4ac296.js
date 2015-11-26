(function(){
  var node_pics = document.getElementsByClassName('item'),
      big_pic_urls = [
        '../imgs/me_ba1d3e6.jpg',
        '../imgs/psb_da08ff5.jpeg',
        '../imgs/window_e02f4ca.jpg'
      ];
  Array.prototype.forEach.call(node_pics,function(node,index){
    new util.toucher(node).on('singleTap',function(){
        new swiper(big_pic_urls,index);
    });
  });
})();
