/**
 * 鼠标滚动
 * */
function scroll() {
	if (window.pageYOffset !== null) {
		return {
			top: window.pageYOffset,
			left: window.pageXOffset,
		}
	} else if (document.compatMode === "CSS1Compat") {
		//严格模式
		return {
			top: document.documentElement.scrollLeft,
			left: document.documentElement.scrollLeft,
		}
	}
	//怪异模式
	return {
		top: document.body.scrollTop,
		left: document.body.scrollLeft,
	}
};

// =======================原型=============================================

	function ChangeStyle(btnObj, dvObj, json) {
				this.btnObj = btnObj;
				this.dvObj = dvObj;
				this.json = json;
			}
			ChangeStyle.prototype.init = function() {
				var that = this;
				this.btnObj.onclick = function() {
					for (var key in that.json) {
						that.dvObj.style[key] = that.json[key];
					}
				}
			}
			// var json = {"width": "500px","height": "500px","transition": "2s","background":"orange"};
			// var cs = new ChangeStyle(my$("btn"), my$("dv"), json);
			// cs.init();

/**
 * 获取屏幕的高度和宽度
 *
 * */
function client() {
	if (window.innerWidth) { //IE9+最新的浏览器
		return {
			width: window.innerWidth,
			height: window.innerHeight
		}
	} else if (document.compatMode === 'CSS1Compat') { //W3C
		return {
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight
		}
	}
	return {
		width: document.body.clientWidth,
		height: document.body.clientHeight
	}
}

/**
 * id
 * */
function $(id) {
	return typeof id === "string" ? document.getElementById(id) : null;
}

/**
 * 显示
 * */
function show(obj) {
	return obj.style.display = "block";
}

/**
 * 隐藏
 * */
function hide(obj) {
	return obj.style.display = "none";
}


/**
 * 获取css样式值
 * obj:盒子（object）
 * attr:属性（string内型）
 * */
function getCssAttrValue(obj, attr) {
	if (obj.currentStyle) { //IE和opera
		return obj.currentStyle[attr];
	} else {
		return window.getComputedStyle(obj, null)[attr];
	}
};

/**
 * 函数封装
 * 参数分别为 box，属性，目标长度
 * */
function buffer(obj, json, fn) {
	clearInterval(obj.timer);
	var begin = 0;
	var target = 0;
	var speed = 0;
	obj.timer = setInterval(function() {
		//旗帜
		var flag = true;
		for (var key in json) {
			//获取初始值
			if ('opacity' === key) {
				//    设置透明度
				begin = Math.round(parseFloat(getCssAttrValue(obj, key)) * 100) || 100;
				target = parseInt(json[key] * 100);
			} else if ("scrollTop" === key) {
				begin = Math.ceil(obj.scrollTop);
				target = parseInt(json[key]);
			} else {
				//其他情况
				begin = parseInt(getCssAttrValue(obj, key)) || 0;
				target = parseInt(json[key]);
			}
			//求出步长
			speed = (target - begin) * 0.2;
			//向上取整
			//判断是向左还是向右运动
			speed = (target > begin) ? Math.ceil(speed) : Math.floor(speed);
			//    盒子动起来
			if ('opacity' === key) {
				//W3C浏览器
				obj.style.opacity = (begin + speed) / 100;
				// IE
				obj.style.filter = 'alpha(opacity:' + (begin + speed) + ')';
			} else if ('scrollTop' === key) {
				obj.scrollTop = begin + speed;
			} else {
				obj.style[key] = begin + speed + 'px';
			}
			//判断
			if (begin !== target) {
				flag = false;
			}
		}
		//    清除定时器
		if (flag) {
			clearInterval(obj.timer);
			console.log(fn);
			//    判断有没有回调函数
			if (fn) {
				fn();
			};

		}
	}, 20)
};

/**
 * 节流
 *
 * 调用事例
 * window.onresize=throttle(function(){},20)
 * */
function throttle(fn, delay) {
	var timer = null;
	return function() {
		clearInterval(timer);
		timer = setTimeout(fn, delay);
	}
}




// 获取任意一个元素的任意一个样式属性的值
function getStyle(element, attr) {
	return window.getComputedStyle ?
		window.getComputedStyle(element, null)[attr] : element.currentStyle[attr]
}

//匀速动画
function animate(element, target) {
	//清理定时器
	clearInterval(element.timeId);
	element.timeId = setInterval(function() {
		//获取元素的当前位置
		var current = element.offsetLeft;
		//移动的步数
		var step = (target - current) / 10;
		step = step > 0 ? Math.ceil(step) : Math.floor(step);
		current += step;
		element.style.left = current + "px";
		if (current == target) {
			//清理定时器
			clearInterval(element.timeId);
		}
		//测试代码:
		console.log("目标位置:" + target + ",当前位置:" + current + ",每次移动步数:" + step);
	}, 20);
}

// 缓动动画

function animates(element, target) {
	clearInterval(element.timerId);
	element.timeId = setInterval(function() {
		var current = element.offsetLeft;
		// 移动的步数
		var step = (target - current) / 10;
		step = step > 0 ? Math.ceil(step) : Math.floor(step);
		current += step;
		if (current === target) {
			clearInterval(element.timeId);
		} else {
			element.style.left = current + 'px';
		}
		console.log("目标位置：" + target + "当前位置：" + current + "每次移动步数" + step);
	}, 20);

}
