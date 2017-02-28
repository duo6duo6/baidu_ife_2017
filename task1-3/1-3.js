    window.onload = function(){
        var bar = document.getElementsByClassName("bar")[0];
        var menu = document.getElementsByClassName("menu")[0];
        bar.oncontextmenu = function(e){
            var e = e || window.event;
            if (e.stopPropagation){
                e.stopPropagation();
                e.preventDefault();
            } else {
                e.cancelBubble= true;
                e.returnValue = false;
            }
            menu.style.display = "block";
            var x = e.clientX;
            var y = e.clientY;
            //alert(y);
            var browserWidth = document.documentElement.clientWidth || document.body.clientWidth;
            // alert(browserWidth);
            var browserHeight = document.documentElement.clientHeight || document.body.clientHeight;
            //alert(browserHeight);
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            //alert(scrollTop);
            var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
            //alert(scrollLeft);
            var offsetWidth = menu.offsetWidth;
            //alert(offsetWidth);
            var offsetHeight = menu.offsetHeight;
            //alert(offsetHeight);
            //alert(browserWidth/2 + 151 - offsetWidth);
            //条件写死了，后面要改进
            if (x > (browserWidth/2 + 151 - offsetWidth) && y > 92) {
                menu.style.left = (x-offsetWidth) + "px";
                menu.style.top = (y-offsetHeight) + "px";
            } else if (x > (browserWidth/2 + 151 - offsetWidth)) {
                menu.style.left = (x-offsetWidth) + "px";
                menu.style.top = y + "px";
            } else if (y > 92) {
                menu.style.left = x + "px";
                menu.style.top = (y-offsetHeight) + "px";
            } else {
                menu.style.left = x + "px";
                menu.style.top = y + "px";
            }
        }
        window.onclick = function(e){
            menu.style.display = 'none';
        }
        window.oncontextmenu = function(e){
            menu.style.display = 'none';
        }
    }
