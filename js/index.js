onload = function() {
    var oList = document.querySelectorAll('.list h2'),
        oHide = document.querySelectorAll('.hide'),
        oIcon = document.querySelectorAll('.list i'),
        lastIndex = 0;
    for (var i = 0; i < oList.length; i++) {
        oList[i].index = i; //自定义属性
        oList[i].isClick = false;
        oList[i].initHeight = oHide[i].clientHeight;
        oHide[i].style.height = '0';
        oList[i].onclick = function() {
            if (this.isClick) {
                oHide[this.index].style.height = '0';
                oIcon[this.index].className = '';
                oList[this.index].className = '';
                oList[this.index].isClick = false;
            } else {
                oHide[lastIndex].style.height = '0';
                oIcon[lastIndex].className = '';
                oList[lastIndex].className = '';
                oHide[this.index].style.height = '150px';
                oIcon[this.index].className = 'on';
                oList[this.index].className = 'on';
                oList[lastIndex].isClick = false;
                oList[this.index].isClick = true;
                lastIndex = this.index;
            }
        }
    }
}


//错误信息提醒
function showMsg(msg) {
    $("#CheckMsg").text(msg);
}

function logout() {
    localStorage.removeItem("username");
    //刷新部分
    load_data();
}

function load_data() {
    var theme = localStorage.getItem("username");
    if (theme == null || theme == "") {
        $("#cue").show();
        $("#uname").html('');
    } else {
        $("#cue").hide();
        $("#uname").html(theme);
    }
}