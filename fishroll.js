/*==========================================================
@基于JQ的循环滚动插件1.1
@作者：张宇 QQ46708420 
@没有限制被包裹元素.direction的样式，便于使用者自定义
@可能不适用于IE9及以下版本，请使用极速模式
@https://github.com/fishmoyu/fishroll                                                 
===========================================================
*/
function rolling(options){
		this.opt=options || {};
		this.init=function(){
			var that=this;
			window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
			//滚动元素包裹的ID".direction"
			var id=$(that.opt.id);
			    idw=id.width();//取父ID宽高
			    idh=id.height();
			$(that.opt.id+' .direction').css({
				'position':'absolute',
				"word-break" : "keep-all"
			});
			that.opt.play=that.opt.play || false;//默认不播放
			that.opt.direction=that.opt.direction || "left";//默认从左向右
			that.opt.speed=that.opt.speed || 1;
			//初始化位置
			that.setDri();
			//播放
			if(that.opt.play==true){
				that.anplay();
			}
		};
		//获取滚动获取尺寸
		this.getDir=function(){
			var that=this;
			var bw=$(that.opt.id).width();//父元素
			var bh=$(that.opt.id).height();
			var dw=$(that.opt.id+' .direction').width();
			var dh=$(that.opt.id+' .direction').height();
			var json={bw:bw,bh:bh,dw:dw,dh:dh};
			return json;
		};
		//初始化移动位置
		this.setDri=function(){
			var that=this;
			var whjson=that.getDir();
			switch(that.opt.direction){
				case "left":
				$(that.opt.id+' .direction').css({
					'margin-left':-whjson.dw+'px'
				});
				break;
				case "right":
				$(that.opt.id+' .direction').css({
					'margin-left':whjson.bw+'px'
				});
				break;
				case "top":
				$(that.opt.id+' .direction').css({
					'margin-top':-whjson.bh+'px'
				});
				break;
				case "bottom":
				$(that.opt.id+' .direction').css({
					'margin-top':whjson.bh+'px'
				});
				break;
			}
		};
		//返回元素不带PX的尺寸
		this.getIdSize=function(cssname){
			var that=this;
			var n=0;
			n=$(that.opt.id+' .direction').css(cssname);
			n=n.split("px");
			return parseInt(n[0]);
		};
		//设置元素样式
		this.setIdPosition=function(cssjson){
			var that=this;
			$(that.opt.id+' .direction').css(cssjson);
		};
		this.anplay=function(){
			var that=this;
			var anid=requestAnimationFrame(that.anplay.bind(this));
	　　    if(that.opt.play==true){
				var whjson=that.getDir();
				switch(that.opt.direction){
					case "left":
						var movex=that.getIdSize("margin-left");
					    movex+=that.opt.speed;
						that.setIdPosition({"margin-left":movex+"px"});
						if(movex>whjson.bw+(10)){
							that.setIdPosition({"margin-left":-whjson.dw+"px"});
						};
					break;
					case 'right':
						var movex=that.getIdSize("margin-left");
						movex-=that.opt.speed;
						that.setIdPosition({"margin-left":movex+"px"});
						if(movex<-whjson.dw){
							that.setIdPosition({"margin-left":whjson.bw+"px"});
						};
					break;
					case 'top':
					    var movey=that.getIdSize("margin-top");
						movey-=that.opt.speed;
						that.setIdPosition({"margin-top":movey+"px"});
						if(movey<-whjson.dh){
							that.setIdPosition({"margin-top":whjson.bh+"px"});
						};
					break;
					case 'bottom':
						var movey=that.getIdSize("margin-top");
						movey+=that.opt.speed;
						that.setIdPosition({"margin-top":movey+"px"});
						if(movey>whjson.bh){
							that.setIdPosition({"margin-top":-whjson.bh+"px"});
						};
					break;
				}
			};
			if(!that.opt.play){
				cancelAnimationFrame(anid);
			};
		};
		this.pause=function(){
			var that=this;
			that.opt.play=false;
		};
		this.stop=function(){
			var that=this;
			that.opt.play=false;
		};
		this.play=function(){
			var that=this;
			if(that.opt.play!=true){
				that.opt.play=true;
				that.anplay();
			}
		};
}