/**
 * Created by Administrator on 2017/5/20 0020.
 */
$(function () {



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
                        console.log($(ele)[i]);
                        $(".band_menu_list dl").eq(tempindex).find("dd").append(mya);
                    }
                    tempindex++;
                })
            }
        }
    )


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


    //商品展示列表侧边栏切换
    $(".bd-r-top").children("span").mouseenter(function () {
        $(".bd-r-center").children("ul").eq($(this).index()).show().siblings("ul").hide();
    })

    //点击跳转到指定楼层
    $(".floormsg").find("a").click(
        function(){
            console.log($(this).index());
            if($(this).index()==1)
            {
                $('html,body').animate({"scrollTop":$("#first_floor_wrp").offset().top-80}, 0);
            }
            if($(this).index()==2)
            {
                $('html,body').animate({"scrollTop":$("#second_floor_wrp").offset().top-80}, 0);
            }
            if($(this).index()==3)
            {
                $('html,body').animate({"scrollTop":$("#third_floor_wrp").offset().top-80}, 0);
            }
        }
    )


    //商品轮播显示


    var timerbrand=0;
    var timerbrand2=1;
    var timerbrand3=2;
    var index=1;
    var index2=1;
    var index3=1;
    function show(){
        $(".animate_brand").animate({"left":-index*500},300,function () {
            if($(".animate_brand").css("left")!="0px")
            {
                index=0;
            }
            else
            {
                index=1;
            }
        })
    }
    function show2(){
        $(".animate_brand_2").animate({"left":-index2*500},500,function () {
            if($(".animate_brand_2").css("left")!="0px")
            {
                index2=0;
            }
            else
            {
                index2=1;
            }
        })
    }
    function show3(){
        $(".animate_brand_3").animate({"left":-index3*500},400,function () {
            if($(".animate_brand_3").css("left")!="0px")
            {
                index3=0;
            }
            else
            {
                index3=1;
            }
        })
    }
    timerbrand2=setInterval(show2,4500);
    timerbrand3=setInterval(show3,4000);
    timerbrand=setInterval(show,3500);



    $(document).scroll(function () {
        var firstfloor_height=$("#first_floor_wrp").offset().top-80;
        var secondfloor_height=$("#second_floor_wrp").offset().top-80;
        var thirdfloor_height=$("#third_floor_wrp").offset().top-80;
        if($(this).scrollTop()>=$("#floor-wrp").offset().top)
        {
            $("#floor-wrp").css("position","fixed").css("top",0);
            $("#first_floor_wrp").css("margin-top",$("#floor-wrp").height());
        }
        if($(this).scrollTop()<firstfloor_height)
        {
            $("#floor-wrp").stop().css("position","static");
            $("#first_floor_wrp").stop().css("margin-top",0);
        }

        if($(this).scrollTop()>=firstfloor_height&&($(this).scrollTop()<secondfloor_height))
        {
            $(".floormsg a").eq(0).siblings("a").stop().css({"backgroundColor":"white","color":"black"})
            $(".floormsg a").eq(0).removeClass("or_color").stop().animate({"backgroundColor":"orange"},30,function () {
                $(".floormsg a").eq(0).animate({"color":"white"},10)
            })

        }
        if($(this).scrollTop()>=secondfloor_height&&($(this).scrollTop()<thirdfloor_height))
        {
            $(".floormsg a").eq(1).siblings("a").stop().css({"backgroundColor":"white","color":"black"})
            $(".floormsg a").eq(1).removeClass("or_color").stop().animate({"backgroundColor":"orange"},30,function () {
                $(".floormsg a").eq(1).animate({"color":"white"},10)
            })

        }
        if($(this).scrollTop()>=thirdfloor_height)
        {
            $(".floormsg a").eq(2).siblings("a").stop().css({"backgroundColor":"white","color":"black"})
            $(".floormsg a").eq(2).removeClass("or_color").stop().animate({"backgroundColor":"orange"},30,function () {
                $(".floormsg a").eq(2).animate({"color":"white"},10)
            })
        }
    })


})

// function addCart(obj) {
//     console.log($(obj).data("proimg")+" "+$(obj).data("proname")+" "+$(obj).data("proid")+" "+$(obj).data("proprice"));
//
// //        window.location.href
//     window.location.assign("cart.html?pid="+$(obj).data("proid"));
// }

window.onload=function () {
    /**
     * 轮播图
     */
    var oul=document.getElementById('lunbo');
    var olis=oul.children;
    var oSpan=document.getElementById("link").children;
    var banner=document.getElementById("banner")

    var square=1;
    for(var i=0;i<oSpan.length;i++){
        oSpan[i].index=i;
        oSpan[i].onclick=function(){
            for(var j=0;j<oSpan.length;j++){
                oSpan[j].className="origin-color";
                olis[j].style.zIndex=0;
            }
            olis[this.index].style.zIndex=num+1;
            this.className="orange-color";
            this.style.cursor="pointer"
            clearInterval(time);
            num=this.index;
            square=this.index;
        }
    }

    var num=1;
    function autoPlay(){
        if(num==olis.length){
            num=0;
        }
        if(square==oSpan.length){
            square=0;
        }
        for(var i=0;i<olis.length;i++)
        {
            olis[i].style.zIndex=0;
            oSpan[i].className="origin-color"
        }
        olis[num].style.zIndex=num+1;
        oSpan[square].className="orange-color"
        num++;
        square++;
    }
    var time=setInterval(autoPlay,2000);
    banner.onmouseover=function(){
        clearInterval(time);
    }
    banner.onmouseout=function(){
        time=setInterval(autoPlay,2000);
    }






}

