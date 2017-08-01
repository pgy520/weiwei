/**
 * Created by Administrator on 2017/5/30 0030.
 */
$(function () {
    if(getCookie("login")!=null)
    {
        //      templogin=getCookie("login")
        // $(".menu").css("margin-left",440).css("width",760);
        $(".loading").html(getCookie("login")+'<a href="javascript:;" class="logoff" title="注销用户">&nbsp;&nbsp;&nbsp;&nbsp;注&nbsp;销</a>')
        $(".register").html("免费注册")
        $(".welcome").html("欢迎用户:")
        //      setMyCookie("login",getCookie("login"),-2);
    }
    $(".menu").on("click",".logoff",function () {


        setMyCookie("login",getCookie("login"),-5);
        window.location.href="index.html"
        $(".loading").html("请登录");
        $(".register").html("免费注册");
        $(".welcome").html("您好，欢迎来到 为为商城");

    })

    $(".go-to-carhtml").click(function () {
        if($(".gouwuche_box>li").length==0)
        {
            alert("请先加入商品!")
            return;
        }
        window.location.href="car.html";
    })


    //侧边栏
    //定义一个添加的函数



    var flag_login=false;
    //生成随机验证码
    function randomNumber(n) {
        var str="";
        var temp=0;
        while(n)
        {
            temp=parseInt(Math.random()*200);
            if(temp>=48&&temp<=57||temp>=65&&temp<=90||temp>=97&&temp<=122)
            {
                str+=String.fromCharCode(temp)
                n--;
            }
        }
        return str;

    }
    $(".yzm").html(randomNumber(4));
    //输入验证码
    $(".yzmbox").keyup(function () {
        if($(".yzmbox").val().toUpperCase()!=$(".yzm").html().toUpperCase())
        {
            flag_login=false;
        }
        else
        {
            flag_login=true;
        }
    })

    //刷新验证码
    $(".yzm").click(function () {
        $(".yzm").html(randomNumber(4));
        flag_login=false;
    })

    $(".btn").on("click",function () {
        if(!flag_login)
        {
            alert("请核对验证码")
        }
        else
        {
            $.ajax({
                url:"./servers/weiwei/login.php",
                data:$("#my_form").serialize(),
                datatype:"json",
                type:"post",
                success:function (data) {
                    console.log(JSON.parse(data));
                    if(JSON.parse(data).status)
                    {
                        alert(JSON.parse(data).msg);
                        setMyCookie("login",$("#my_form .login").val(),1);
                        window.location.href="index.html";
                    }
                    else
                    {
                        alert(JSON.parse(data).msg);
                    }

                }
            })
        }
    })

    //close
    $(".close_btn").on("click",function () {
        $(this).closest("div").hide();
    })

    //弹出登录框
    $(".side-login-box").click(function () {
        $(".side-login").show();
    })


    //弹出购物车
    $(".side-center").click(function () {
        $(".side-shoppingcar-wrp").show();
        $(".side-shoppingcar").animate({"left":0},500,function () {

        });
    })

    //隐藏购物车
    $(".hide-sc").click(function () {

        $(".side-shoppingcar").animate({"left":230},500,function () {
            $(".side-shoppingcar-wrp").hide();
        });

    })




//scroll to top
    $(document).on("scroll",function () {
        if($(this).scrollTop()>0)
        {
            $(".sc-return-top").css("opacity",1)
        }
        else
        {
            $(".sc-return-top").css("opacity",.5)
        }
    })

    $(".sc-return-top").on("click",function () {
       $("body").animate({"scrollTop":0})
    })




//加载购物车
    if(getCookie("login")==null)
    {
        $(".status_number").hide().html("0");
        $(".spbox .empty").show();
        $(".gouwukinds").html("0");
        $(".countmoney").html("￥0");

        //侧边栏购物车
        $(".sc-empty").show();
        $(".sc-count-all").html("￥0");
        $(".side-car-number").hide();

    }
    else
    {
        $.ajax({
            url: "./servers/weiwei/cartlist.php?uId="+getCookie("login"),
            type: "get",
            success: function (res) {
                var arr=JSON.parse(res);
                console.log(arr);
                console.log(arr.length);
                $(".spbox .empty").hide();
                $(".sc-empty").hide();

                var money=0;
                var sidemoney=0;
                $(".gouwuche_box").html("")
                for(var i=0;i<arr.length;i++) {
                    var tempstr='<li>'
                    tempstr+='<a href="javasacript:;"><img src="'+arr[i].proimg+'" alt=""></a>'
                    tempstr+='<a href="javasacript:;">'+arr[i].proname+'</a>'
                    tempstr+='<span>'+arr[i].proprice+'x'+arr[i].carnumber+'</span>'
                    tempstr+='<a href="javasacript:;" class="deletecar" onclick="delet(this)" data-cartid="'+arr[i].carid+'" data-money="'+parseFloat(arr[i].proprice.split("￥")[1])*arr[i].carnumber+'">删除</a>'
                    tempstr+=   '</li>'
                    $(".gouwuche_box").html($(".gouwuche_box").html()+tempstr)
                    money+=parseFloat(arr[i].proprice.split("￥")[1])*arr[i].carnumber;

                }
                //侧边购物车

                for(var j=0;j<arr.length;j++)
                {
                    var sidestr='<li>'
                    sidestr+='<a href="javascript:;">'
                    sidestr+='<img class="sc-img" src="'+arr[j].proimg+'" alt="">'
                    sidestr+='</a>'
                    sidestr+='<div>'
                    sidestr+='<a href="javascript:;" class="sc-name">'+arr[j].proname+'</a>'
                    sidestr+='<p><span class="sc-money">'+arr[j].proprice+'</span>x<span class="sc-count">'+arr[j].carnumber+'</span></p>'
                    sidestr+='</div>'
                    sidestr+='<a class="sc-remove" href="javascript:;" class="deleteside-car" onclick="deletside(this)" data-cartid="'+arr[j].carid+'" data-money="'+parseFloat(arr[j].proprice.split("￥")[1])*arr[j].carnumber+'">X</a>'
                    sidestr+='</li>'
                    $(".side-car-box").html( $(".side-car-box").html()+sidestr);
                    sidemoney+=parseFloat(arr[j].proprice.split("￥")[1])*arr[j].carnumber;


                }



                if(arr.length>0)
                {
                    $(".status_number").show().html(arr.length);
                    $(".gouwukinds").html(arr.length)
                    $(".countmoney").html("￥"+money.toFixed(2));

                    //侧边栏购物车
                    $(".sc-empty").hide();
                    $(".sc-count-all").html("￥"+sidemoney.toFixed(2));
                    $(".side-car-number").show().html(arr.length);
                }
                else
                {
                    $(".status_number").hide().html("0");
                    $(".spbox .empty").show();
                    $(".gouwukinds").html("0");
                    $(".countmoney").html("￥0");

                    //侧边栏购物车
                    $(".sc-empty").show();
                    $(".sc-count-all").html("￥0");
                    $(".side-car-number").hide();
                }
                console.log(tempstr);

            }
        })
    }


})


