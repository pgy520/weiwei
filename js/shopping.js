/**
 * Created by Administrator on 2017/5/26 0026.
 */
$(function () {

    var target=$(".fixed-nav").offset().top;

    $(".bar_bg").css("left",(($(document.body).width()-1200)/2+198)).css("top",0);

    $(document).scroll(function () {


        if($(this).scrollTop()>target)
        {
            $(".fixed-nav").css("position","fixed").css("top",0);
            $(".shopping-right-bottom").css("margin-top",$(".fixed-nav").height());
            $(".bar_bg").show();
            $(".bar_bg").css("position","fixed");
            if(flagbox)
            {
                $(".bar_bg").css("left",(($(document.body).width()-1200)/2+10)).css("top",0);
            }
        }
        if($(this).scrollTop()<=target)
        {
            $(".fixed-nav").css("position","static");
            $(".shopping-right-bottom").css("margin-top",0);
            if(!flagbox)
            {
                $(".bar_bg").hide();
            }
            else
            {
                $(".bar_bg").css("position","absolute");
                $(".bar_bg").css("left",0).css("top","0px");
            }
        }


    })
    var flagbox=false;
    $(".bar_bg").on("click",function () {
        console.log($(document.body).width());
        if(!flagbox)
        {
            $("#shopping-left").hide();
            $(this).css("background-position","-14px 0");
            $(this).css("left",(($(document.body).width()-1200)/2+10)).css("top",0);
            flagbox=true;
        }
        else
        {
            $("#shopping-left").show();
            $(this).css("background-position","0 0");
            $(this).css("left",(($(document.body).width()-1200)/2+198)).css("top",0);
            flagbox=false;
        }
    })




    $.ajax({
            "url": "province.json",
            "datatype":"json",
            "success": function ($data) {
                $.each($data,function (index,ele) {
                    $(ele).each(function (index,item) {
                        var li=$("<li></li>").html(item)
                        $(".address .bottom>ul").append(li);
                    })
                })
            }
        }
    )

    $.ajax({
            "url": "band.json",
            "datatype":"json",
            "success": function ($data) {
                var tempindex=0;
                $.each($data,function (index,ele) {
                    for(var i=0;i<$(ele).length;i++)
                    {
                        var mya=$("<a href=''></a>")
                        mya.html($(ele)[i])
                       // console.log($(ele)[i]);
                        $(".band_menu_list dl").eq(tempindex).find("dd").append(mya);
                    }
                    tempindex++;
                })
            }
        }
    )



    $(".band").on("mouseenter",function () {
        $(this).find(".menu").show();
    })
    $(".band").on("mouseleave",function () {
        $(this).find(".menu").hide();
    })


    // $(".address .bottom>ul").


    //header
//        address
    $(".address").mouseenter(function () {
        $(this).find(".top").css(
            {
                "background":"white",
                "border-left":"1px solid #ccc",
                "border-right":"1px solid #ccc"
            }
        )
        $(this).find(".bottom").css(
            {
                "display":"block"
            }
        )
    })

    $(".address").mouseleave(function () {
        $(this).find(".top").css(
            {
                "background":"#fafafa",
                "border-left":"1px solid #fafafa",
                "border-right":"1px solid #fafafa"
                // "border":"none"

            }
        )
        $(this).find(".bottom").hide();
    })


    //menu

    $(".menu>ul").children(".sele").mouseenter(
        function () {
            $(this).css({

                    "background":"white",
                    "border":"1px solid #ccc",
                    "border-bottom":"none",
                    "border-top":"none"
                }
            )
            $(this).children("a").css("border","none");
            $(this).children("ul").css("border","1px solid #ccc").css("border-top","none").show();
        }
    )
    $(".menu>ul").find(".animate").mouseleave(
        function () {
            $(this).css({

                    "background":"#fafafa",
                    "border":"1px solid #fafafa",
                    "border-bottom":"none",
                    "border-top":"none"
                }
            );
            $(this).children("a").css("border-right","1px solid #ccc");
            $(this).children("ul").hide();
        }
    )

    $(".menu>ul").children(".attention").mouseenter(function () {
        $(this).css({
                "background":"white",
                "border-left":"1px solid #ccc",
                "border-bottom":"none",
                "border-top":"none"
            }
        )
        $(this).children("a").css("border","none");
        $(this).children("ul").css("border","1px solid #ccc").css("border-top","none").css("border-right","none").show();

    })


    //搜索
    $(".sect").mouseenter(function () {
        $(this).find("ul").show();
    })
    $(".sect").mouseleave(function () {
        $(this).find("ul").hide();
    })

//商品列表
    $(".menulist").mouseenter(
        function () {
            $(this).find(".list").css("display","flex");
        }
    )
    $(".menulist").mouseleave(
        function () {
            $(this).find(".list").hide();
        }
    )


//购物车
    $(".shopping").mouseenter(function () {
        $(".spbox").show();
    })
    $(".shopping").mouseleave(function () {
        $(".spbox").hide();
    })



    //放大镜
    var smallImg = $(".smallImg");//小图
    var smallArea = $(".smallArea");//小区域

    var bigArea = $(".bigArea"); //大区域
    var bigImg = $(".bigImg")//大图

    smallArea.css({
        "height": (smallImg.height() / bigImg.height()) * bigArea.height(),
        "width": (smallImg.width() / bigImg.width()) * bigArea.width(),
    });


    var oScale = bigArea.width() / smallArea.width();//算了比例


    var widthMax = smallImg.width() - smallArea.width(); //可移动最大值

    var heightMax = smallImg.height() - smallArea.height();


    //鼠标进入小图，就让小区域显示

    $(".smallImg").on("mouseenter", function () {
        smallArea.show();//小区域显示
        bigArea.show();


        $(".smallImg").mousemove(function (evt) {

            //算出能在里面移动的位置。
            var x = evt.pageX - smallImg.offset().left - smallArea.width() / 2;
            var y = evt.pageY - smallImg.offset().top - smallArea.height() / 2;

            smallArea.css({
                left: x,
                top: y,
            });


            bigImg.css({
                left: -x * oScale,
                top: -y * oScale
            })


            if (x <= 0) {
                smallArea.css("left", 0);
                //不在让鼠标跟随走，大图不在动
                bigImg.css("left", 0);
            }
            if (x >= widthMax) {
                smallArea.css("left", widthMax);
                //不在让鼠标跟随走，大图不在动
                bigImg.css("left", -widthMax * oScale);
            }


            if (y <= 0) {
                smallArea.css("top", 0);
                //不在让鼠标跟随走，大图不在动
                bigImg.css("top", 0);
            }

            if (y >= heightMax) {
                smallArea.css("top", heightMax);
                //不在让鼠标跟随走，大图不在动
                bigImg.css("top", -heightMax * oScale);
            }


        })

    })


    $(".smallImg").on("mouseleave", function () {
        smallArea.hide();//小区域显示
        bigArea.hide();

        $(".smallImg").mousemove(null)
    })


    $(".ncs-top-tab li a").on("mouseenter",function () {
        $(this).parent("li").addClass("current").siblings("li").removeClass("current");
        $(".content>div").eq($(this).parent("li").index()).show().siblings("div").hide();
    })



    //转换菜单
    $(".switch>li>a").click(function () {
        $(this).addClass("current").parent("li").siblings("li").children("a").removeClass("current");
    })
    
    $(".changelistshow>li>a").click(function () {
        console.log($(this).parent("li").index());
        switch($(this).parent("li").index())
        {
            case 0:
                for(var i=0;i<$("#shopping-right-bottom").children("div").length;i++)
                {
                    if(i!=1)
                    {
                        $("#shopping-right-bottom>div").eq(i).show();
                    }
                }
                break;
            case 1:
                for(var i=0;i<$("#shopping-right-bottom").children("div").length;i++)
                {
                    if(i==3||i==4)
                    {
                        $("#shopping-right-bottom>div").eq(i).show();
                    }
                    else
                    {
                        $("#shopping-right-bottom>div").eq(i).hide();
                    }
                }
                break;
            case 2:
                for(var i=0;i<$("#shopping-right-bottom").children("div").length;i++)
                {
                    if(i==5)
                    {
                        $("#shopping-right-bottom>div").eq(i).show();
                    }
                    else
                    {
                        $("#shopping-right-bottom>div").eq(i).hide();
                    }
                }
                break;
            case 3:
                for(var i=0;i<$("#shopping-right-bottom").children("div").length;i++)
                {
                    if(i==6)
                    {
                        $("#shopping-right-bottom>div").eq(i).show();
                    }
                    else
                    {
                        $("#shopping-right-bottom>div").eq(i).hide();
                    }
                }
                break;

        }
    })












})


