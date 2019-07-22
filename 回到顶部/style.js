window.onload = function () {
    var topbtn = document.getElementById("btn");
    var timer = null;
    //获取屏幕高度
    var pagelookheight = document.documentElement.clientHeight;
    // alert(pagelookheight);
    //鼠标滚动事件
    window.onscroll = function () {
        // alert("hello");
        //获取鼠标滑动屏幕的高度
        var backtop = document.body.scrollTop;
        // alert(backtop);
        if (backtop>= pagelookheight){
            topbtn.style.display = "block";

        }
        else{
            topbtn.style.display = "none";

        }

    }
    topbtn.onclick = function () {
        timer = setInterval(function () {
            var backtop = document.body.scrollTop;
            var speedtap = backtop / 5;
            document.body.scrollTop -= backtop - speedtap;
            if (backtop == 0) {
                //滚动回到顶部停止往上滚动
                clearInterval(timer);
            }
        },30);
    }
}