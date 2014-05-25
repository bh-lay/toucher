toucher
=======
#toucher是什么
toucher是一个面向移动端web开发，通过监听原生事件模拟手势事件的库。

#目前支持哪些事件

* singleTap：轻击
* doubleTap：双击
* longTap：长按
* swipe：滑动（滑动过程中会持续触发）
* swipeUp：上划
* swipeRight：右划
* swipeDown：下划
* swipeleft：左划


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
