toucher
=======
#toucher是什么
toucher是一个面向移动端web开发，通过监听原生事件模拟手势事件的库。

#目前支持哪些事件

* singleTap：轻击
* doubleTap：双击
* longTap：长按
* swipeStart：滑动开始
* swipe：滑动（若阻止浏览器默认事件，滑动过程中会持续触发）
* swipeEnd：滑动结束
* swipeUp：上划
* swipeRight：右划
* swipeDown：下划
* swipeleft：左划

#说明
目前尚不支持双指操作的事件，此类事件可能会在下次大的更新之后作为补充加入进来。

事件触发时不阻止浏览器默认事件，若要用于拖动操作，或滑动更为细腻，可在swipe事件中使用“return false;”阻止浏览器默认事件，但此时页面是不能通过拖动当前dom进行滚动页面操作！

#DEMO
请使用移动设备或使用调试工具模拟移动设备查看 [demo](http://htmlpreview.github.io/?https://github.com/bh-lay/toucher/blob/master/touch.html)

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
