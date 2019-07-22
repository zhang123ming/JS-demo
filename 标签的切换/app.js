function $(id) {
    return typeof  id == "string" ? document.getElementById(id) : id;
}
//以下是设置高亮公告栏标题
window.onload = function () {
    var titleNmae = $("tab-title").getElementsByTagName("li");
    var tabContent = $("tab-content").getElementsByTagName("div");
    if (titleNmae.length != tabContent.length) {
        return;
    }
    for (var i=0;i<titleNmae.length;i++){
        titleNmae[i].id=i;
        titleNmae[i].onmouseover=function () {
            for (var j=0; j<titleNmae.length;j++)
            {
                //鼠标移入移出原来的背景改变
                titleNmae[j].className="";
                //鼠标移入标题下面内容改变
                tabContent[j].style.display="none";
            }
            this.className="select";
            tabContent[this.id].style.display="block";
        }
    }
}