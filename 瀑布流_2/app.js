$(document).ready(function () {
    $(window).on("load", function () {
        imgLocation();
    });
});

function imgLocation() {
    var box = $(".box");
    var boxWidth = box.eq(0).width();
    var num = Math.floor($(window).width() / boxWidth);
    var boxArr = [];
    box.each(function (index, value) {
        var boxHeight = box.eq(index).height();
        if (index < num) {
            boxArr[index] = boxHeight;
        } else {
            var minboxHeight=math.min.apply(null,boxArr);
       var minboxIndex=$.inArray(minboxHeight,boxArr);
       $(value).css({
           "position":"absolute",
           "top":minboxHeight,
           "left":box.eq(minboxIndex).position.left
       });
       boxArr[minboxIndex]+=box.eq(index).height();
        }
    });

}