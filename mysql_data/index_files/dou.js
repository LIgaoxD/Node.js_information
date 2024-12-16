/**
 +----------------------------------------------------------
 * Bootstrap Navbar 一级菜单改为可以点击
 +----------------------------------------------------------
 */
$(document).ready(function() {
    // 恢复父级菜单可点击
    if ($(window).width() > 768) {
      $(document).off('click.bs.dropdown.data-api');
    }
    
    // 增加三级菜单支持
    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
     if (!$(this).next().hasClass('show')) {
       $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
     }
     var $subMenu = $(this).next(".dropdown-menu");
     $subMenu.toggleClass('show');


     $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
       $('.dropdown-submenu .show').removeClass("show");
     });


     return false;
    });

    // navbar一定高度后置顶固定
    if ($('.navbar').hasClass("scroll")) {
        $(window).on("scroll", function(){
            var scrollTop = $(window).scrollTop();
            if(scrollTop > 30){
                $(".navbar.scroll").addClass("fix");
            }else {
                $(".navbar.scroll").removeClass("fix");
            }
        });
    }

    // 在线客服
    $(".online-service .item").hover(function(){
        $(this).addClass("active");
        $('.pop-box',this).css('display', 'block');
    }, function(){
        $(this).removeClass("active");
        $('.pop-box',this).css('display', 'none');
    });

    // 当滚动条的垂直位置距顶部100像素以上时，出现返回顶部
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $('.go-top').show();
        } else {
            $(".go-top").hide();
        }
    });

    //点击跳转链接，滚动条跳到0的位置，页面移动速度是1000
    $(".go-top").click(function() {
        $('html,body').animate({
            scrollTop: '0'
        }, 1000);
        return false; //防止默认事件行为
    })
});

/**
 +----------------------------------------------------------
 * 刷新验证码
 +----------------------------------------------------------
 */
function refreshimage() {
    var cap = document.getElementById("vcode");
    cap.src = cap.src + '?';
}

/**
 +----------------------------------------------------------
 * 搜索框的鼠标交互事件
 +----------------------------------------------------------
 */
function inputClick(name, text) {
    var obj = name;
    if (typeof(name) == "string") obj = document.getElementById(id);
    if (obj.value == text) {
        obj.value = "";
    }
    obj.onblur = function() {
        if (obj.value == "") {
            obj.value = text;
        }
    }
}

/**
 +----------------------------------------------------------
 * 表单提交
 +----------------------------------------------------------
 */
function douSubmit(form_id, callback = 'json') {
    var formParam = $("#"+form_id).serialize(); //序列化表格内容为字符串
    
    $.ajax({
        type: "POST",
        url: $("#"+form_id).attr("action")+'&do=callback',
        data: formParam,
        dataType: "json",
        success: function(form) {
            if (!form) {
                $("#"+form_id).submit();
            } else {
                for(var key in form) {
                    if (callback == 'alert') {
                        if (form[key]) {
                            alert(form[key]);
                            break;
                        }
                    } else {
                        $("#"+key).html(form[key]);
                    }
                }
            }
        },   
        error:function (data, status, e){   
          alert("error");   
        }
    });
}

/**
 +----------------------------------------------------------
 * 弹出确认提示
 +----------------------------------------------------------
 */
function douConfirm(url, msg) {
    if (confirm(msg)) {
        window.location.href = url;
    }
}

/**
 +----------------------------------------------------------
 * 清空对象内HTML
 +----------------------------------------------------------
 */
function douRemove(target) {
    var obj = document.getElementById(target);
    obj.parentNode.removeChild(obj);
}

/**
 +----------------------------------------------------------
 * 收藏本站
 +----------------------------------------------------------
 */
function AddFavorite(url, title) {
    try {
        window.external.addFavorite(url, title)
    } catch(e) {
        try {
            window.sidebar.addPanel(title, url, "")
        } catch(e) {
            alert("加入收藏失败，请使用Ctrl+D进行添加")
        }
    }
}