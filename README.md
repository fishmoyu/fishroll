# fishroll
<br/>
/*==========================================================<br/>
@基于JQ3.5的循环滚动插件<br/>
@作者：张宇 QQ46708420 www.souniuniu.com<br/>
@没有限制被包裹元素.direction的样式，便于使用者自定义<br/>
@注意：可能不适用于IE9及以下版本，请使用极速模式<br/>                                                    
===========================================================<br/>
*/<br/>

使用方法<br/>

1、引入相关JS<br/>
<script src="jquery-3.5.1.min.js"></script><br/>
<script src="fishroll.js"></script><br/>

2、创建并使用滚动类<br/>

var g1=new rolling({
		id:'.ledmianbody',
		direction:'top',
		play:true
	})
	g1.init();
  
OPT选项说明：
示例：
<div class="ledmianbody layui-col-xs12">
	<div class="direction">
		这是滚动区域<br/>2222
	</div>
</div>
 
 OPT选项在初始化NEW类时，必须要先指定滚动元素的父元素，如ledmianbody，此元素内必须包裹一个.direction元素作为滚动元素的标识。
 选项：
 {
  id: 必须，如".ledmianbody"，为滚动元素的父类
  direciton:'left',滚动方向[left,right,top,bottom]默认从右向左滚动
  play:false, 是否滚动，默认假
  speed:1   滚动步数(速度加成)，默认1
 }
 
 控制方法：
 gl.play();//开始滚动
 gl.stop();//停止
 gl.pause();//暂停
 
 

