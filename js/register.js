/**
 * Created by Administrator on 2017/5/23 0023.
 */
$(function () {
   var userFlag=false;
   var yzmFlag=false;
   var mobileFlag=false;
   var readMsg=false;



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
//生成四位随机验证码
    $(".checknumber span").eq(1).html(randomNumber(4));
//手机号验证
$("#myform>.box01 .mobile").keyup(function () {
        console.log(1);
        if(/^[1][3548]\d{9}$/.test($(this).val()))
        {
            $(this).parent().find(".errorbox").hide();
            userFlag=true;
        }
        else
        {
            $(this).parent().find(".errorbox").show().html("手机号输入错误");
            userFlag=false;

        }
    })
    //验证码输入验证
    $("#myform>.box01 .check").keyup(function () {
        console.log(1);
        if($(this).val().toUpperCase()==$(".checknumber span").eq(1).html().toUpperCase())
        {
            $(this).parent().find(".errorbox").hide();
            yzmFlag=true;
        }
        else
        {
            $(this).parent().find(".errorbox").show().html("验证码输入错误");
            yzmFlag=false;
        }
    })
    //刷新验证码
    $(".box01>.checknumber>span").eq(1).on("click",function () {
        $(this).html(randomNumber(4));
        yzmFlag=false;
        $(this).parent().find(".errorbox").show().html("验证码输入错误");
    })


    //手机验证码生成
    $("#myform>.box01 .mb-btn").on("click",function () {
        $(this).prev("input").val(randomNumber(6));
        mobileFlag=true;
    })

    //是否阅读协议
    $(".box01>p span").on("click",function () {
        if(!readMsg)
        {
            $(this).css("background","url(loading/accept-icon.png) no-repeat center")
            readMsg=true;
        }
        else
        {
            $(this).css("background","")
            readMsg=false;
        }
    })

    //进入第二页
    $(".nextstep").on("click",function () {
        if(userFlag&&readMsg&&yzmFlag&&mobileFlag)
        {
            console.log($("#myform").serialize());
            $(".box02").siblings("div").hide();
            $(".box02").show();
            $(".rigister_box_top>div").eq(1).css("border-bottom","1px solid orange").find("span").eq(0).css({"background":"orange"});
            $(".rigister_box_top>div").eq(1).siblings("div").css("border-bottom","none").find("span").eq(0).css({"background":"#f7f7f7"});

        }
        else
        {
            alert("请认真填写信息!")
        }
    })
    
    
    //------------------第二页
    var pwdFlag=false;
    var pwdrFlag=false;
    $(".box02 .pwd").keyup(function () {
        if(/^[a-z0-9_A-Z]{6,20}$/.test($(this).val())&&$(this).val()!=" ")
        {
            $(this).next("div").hide();
            pwdFlag=true;
        }
        else{
            $(this).next("div").show().html("密码不能有空格,6-20位数字字母下划线结合");
            pwdFlag=false;
        }
          //  /^[a-z0-9_-]{6,18}$/
    })

    //重复密码
    $(".box02 .pwd1").keyup(function () {
        if(pwdFlag)
        {
            if($(this).val()!=$(".box02 .pwd").val())
            {
                $(this).next("div").show().html("重复密码不正确");
                pwdrFlag=false;
            }
            else{
                $(this).next("div").hide();
                pwdrFlag=true;
            }
        }
        else {
            $(this).next("div").show().html("请先输入正确密码格式！");
        }
    })

    //邮箱验证
    $(".email").keyup(function (){
        if(/^[a-zA-Z0-9_]{1,}@\w{1,}\.com$/.test($(this).val()))
        {
            console.log(11111);
            $(this).next("div").hide();
        }
        else
        {
            $(this).next("div").show().html("邮箱格式不正确！");
        }
    })

//进入第三页
    var success=false;
    $(".box02 .register").on("click",function () {

        console.log($("#myform").serialize());
        var mydata=$("#myform").serialize();
        $.ajax({
            "url":"./servers/weiwei/reg.php",
            type:"post",
            "datatype":"json",
            data:mydata,
            success:function (data) {
                console.log(JSON.parse(data));
                //  data=JSON.parse(data);

                if(pwdFlag&&pwdrFlag)
                {
                    if(JSON.parse(data).status==1)
                    {
                        $(".box03").siblings("div").hide();
                        $(".box03").show();
                        $(".rigister_box_top>div").eq(2).css("border-bottom","1px solid orange").find("span").eq(0).css({"background":"orange"});
                        $(".rigister_box_top>div").eq(1).css("border-bottom","none").find("span").eq(0).css({"background":"#f7f7f7"});
                        success=true;
                        if(success)
                        {
                            var index=9;
                            var timer=setInterval(function () {
                                if(index==0)
                                {
                                    window.location.href="index.html";
                                    clearInterval(timer)
                                }
                                $(".box03 span").eq(1).css("color","orange").html("0"+index);
                                index--;
                                setMyCookie("login",$("#myform>.box01 .mobile").val(),1);
                            },1000)
                        }
                    }
                    else
                    {
                        alert(JSON.parse(data).msg);
                        window.location.href="register.html";

                    }

                }
                else{
                    alert("请核对密码信息")
                    success=false;
                }

            }
        })


    })



})