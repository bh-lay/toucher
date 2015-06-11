toucher
=======
#toucher是什么
toucher是一个面向移动端web开发，通过监听原生事件模拟手势事件的库。

#目前支持哪些事件
基本事件
 * singleTap：轻击
 * doubleTap：双击
 * longTap：长按
 * swipeUp：上划
 * swipeRight：右划
 * swipeDown：下划
 * swipeleft：左划

高级事件
 * swipeStart：滑动开始
 * swipe：滑动（阻止浏览器默认事件，滑动过程效果更佳）
 * swipeEnd：滑动结束

#说明
目前尚不支持双指操作的事件，此类事件可能会在下次大的更新之后作为补充加入进来。

事件触发时不阻止浏览器默认事件，若要用于拖动操作，或滑动更为细腻，可在swipe事件中使用“return false;”阻止浏览器默认事件！

#DEMO
请使用移动设备或使用调试工具模拟移动设备查看 [demo](http://bh-lay.github.io/toucher/)

#如何使用
接口提供了链式调用的实现，及事件委托（仅支持class）。

```javascript
var myTouch = util.toucher(document.getElementById('touchBox'));

myTouch.on('singleTap',function(e){
    //
}).on('longTap',function(e){
	//
}).on('singleTap','.checkA',function(e){
	console.log(this,e);
	return false
});


```
