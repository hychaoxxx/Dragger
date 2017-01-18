var Dragger = function(area) {
	//定义参数
	var block = document.getElementById(area);
	var halfBlock = block.offsetWidth / 2;
	var mX, mY, mX2, mY2;
	var flag = false;

	//开始拖拽事件
	block.onmousedown = function (ev) {
		var blockX = block.offsetLeft + halfBlock;
		var blockY = block.offsetTop + halfBlock;
		var e = ev || window.event;
		mX = e.clientX;
		mY = e.clientY;
		flag = true;
		//更改拖拽区域透明度
		block.style.opacity = 0.5;

		//禁止IE文字选择
		block.onselectstart = function() {
			return false;
		}
		//div跟随鼠标拖动
		document.onmousemove = function (ev) {
			var e = ev || window.event;
			mX2 = e.clientX;
			mY2 = e.clientY;
			var dX = mX2 - mX;
			var dY = mY2 - mY;

			if(flag == true) {
				block.style.left = (blockX+dX + 'px');
				block.style.top = (blockY+dY + 'px');
			}
		}
	}
	//给div赋终态，结束拖拽
	document.onmouseup = function () {
		var nowblockX = block.offsetLeft + halfBlock;
		var nowblockY = block.offsetTop + halfBlock;
		//恢复拖拽区域透明度
		block.style.opacity = 1;
		block.style.left = (nowblockX + 'px');
		block.style.top = (nowblockY + 'px');
		flag = false;
	}
}