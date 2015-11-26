(function(){
  /**
   * 判断dom是否拥有某个class
  **/
  function hasClass(dom,classSingle){
    return dom.className && dom.className.match(new RegExp('(\\s|^)' + classSingle + '(\\s|$)')) || false;
  }
  function addClass(dom, cls) {
    if (!hasClass(dom, cls)) dom.className += " " + cls;
  }
  function removeClass(dom, cls) {
    if (hasClass(dom, cls)) {
      var reg = new RegExp('(\\s+|^)' + cls + '(\\s+|$)');
      dom.className = dom.className.replace(reg, ' ');
    }
  }
  function setCss(node,cssObj){
    for(var key in cssObj){
      node.style[key] = cssObj[key];
      if(key == 'transform' || key == 'transition'){
        node.style['-webkit-' + key] = cssObj[key];
      }
    }
  }
  function createDom(html){
    var a = document.createElement('div');
    a.innerHTML = html.replace(/^\s+|\s+$/g,'');
    return a.childNodes[0];
  }
  function removeNode(elem){
    if(elem && elem.parentNode && elem.tagName != 'BODY'){
      elem.parentNode.removeChild(elem);
    }
  }
  var tpl = document.getElementById('tpl').innerHTML,
      body = document.getElementsByTagName('body')[0];
  function swiper(pics,index){
    var me = this,
        touch;
    me.node = createDom(tpl);
    me.swiper_list = me.node.getElementsByClassName('swiper-list')[0];
    me.swiper_list_body = me.node.getElementsByClassName('swiper-list-body')[0];
    me.swiper_items = me.swiper_list.getElementsByClassName('swiper-item');
    me.current_index = me.node.getElementsByClassName('current-index')[0];

    body.appendChild(me.node);
    me.index = index || 0;
    me.width = me.getWidth();
    me.total = me.swiper_items.length;
    me.refresh();
    me.scrollToItem(me.index,false);
    Array.prototype.forEach.call(me.swiper_items,function(node,index){
      node.style['background-image'] = 'url(' + pics[index] + ')';
    });
    new util.toucher(me.node)
    .on('swipe',function(){
      return false;
    }).on('swipeLeft',function(){
      if(me.index + 1 >= me.total){
        me.shock('toLeft');
        return;
      }
      me.index++;
      me.scrollToItem(me.index,true);
    }).on('swipeRight',function(){
      if(me.index <= 0){
        me.shock('toRight');
        return
      }
      me.index--;
      me.scrollToItem(me.index,true);
    }).on('longTap',function(){
      me.showMenu();
      return false;
    }).on('singleTap',function(){
      me.destroy();
    })
    //重置 pop 手势
    .on('singleTap','.swiper-menu',function(){
      me.closeMenu();
      return false;
    }).on('swipeLeft','.swiper-menu',function(){
      return false;
    }).on('swipeRight','.swiper-menu',function(){
      return false;
    }).on('longTap','.swiper-menu',function(){
      return false;
    }).on('singleTap','.menu-item',function(){
      return false;
    });

    this.node.oncontextmenu=function(){
      return false;
    }
  }
  swiper.prototype.destroy = function(){
    var me = this;
    removeClass(me.node,'zoomIn');
    addClass(me.node,'zoomOut');
    setTimeout(function(){
      removeNode(me.node);
    },400);
  }
  swiper.prototype.getWidth = function(){
    return this.node.clientWidth;
  }
  swiper.prototype.showMenu = function(){
    addClass(this.node,'showMenu');
  }
  swiper.prototype.closeMenu = function(){
    removeClass(this.node,'showMenu');
  }
  swiper.prototype.refresh = function(){
    var width = this.width;
    this.swiper_list_body.style.width = this.total * this.width + 'px';
    Array.prototype.forEach.call(this.swiper_items,function(node,index){
      node.style.width = width + 'px'
    });
  };
  swiper.prototype.shock = function(direction){
    var me = this,
        left = -me.index * me.width,
        a = direction=='toLeft' ? -40 : 40;
    me.scrollTo(left + a,true);
    setTimeout(function(){
      me.scrollTo(left,true);
    },200);
  };
  swiper.prototype.scrollToItem = function(index,useAnimation){
    this.current_index.innerHTML = index + 1;
    this.scrollTo(-index * this.width,useAnimation);
  };
  swiper.prototype.scrollTo = function(left,useAnimation){
    var useAnimation = typeof(useAnimation) == 'boolean' ? useAnimation : false,
        cssObj = {
          left: left + 'px'
        };

    cssObj.transition = useAnimation ? '.3s ease-in-out' : '0';
    setCss(this.swiper_list_body,cssObj);
  };
  window.swiper = swiper;
})();
