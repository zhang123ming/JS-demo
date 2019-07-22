$(function () {

    var size=$(".img li").size();
   for (var i=1;i<=size;i++){
       //遍历循环li标签
       var li="<li>"+i+"</li>";
       $(".num").append(li);
   }
$(".num li").eq(0).addClass("active");
 
    $(".num li").mouseover(function () { 
        $(this).addClass("active").siblings().removeClass("active"); 
        var index = $(this).index();
        i=index;
        $(".img li").eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);
    })
    var i = 0;
    var t = setInterval(move, 1500);

//    核心定义定时器函数
    function move() {
        i++;
   
        if (i == size) {
            i = 0;
        }
        $(".num li").eq(i).addClass("active").siblings().removeClass("active");
        $(".img li").eq(i).fadeIn(500).siblings().fadeOut(500);
    }

    function moveL() {
        i--;
        if (i == -1) {
            i =size-1;
        }
        $(".num li").eq(i).addClass("active").siblings().removeClass("active");
        $(".img li").eq(i).fadeIn(500).siblings().fadeOut(500);
    }
    $(".out").hover(function () {
        clearInterval(t);
    }, function () {
        t = setInterval(move, 1500);
    })
    $(".out .left").click(function () {
        moveL();
    })
    $(".out .right").click(function () {
        move();
    })
})