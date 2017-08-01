/**
 * Created by Administrator on 2017/5/26 0026.
 */
$(function () {
    var flag=false;
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
            flag=false;
        }
        else
        {
            flag=true;
        }
    })

    //刷新验证码
    $(".yzm").click(function () {
        $(".yzm").html(randomNumber(4));
        flag=false;
    })

    $(".btn").on("click",function () {
          if(!flag)
          {
              alert("用户名密码验证码不能为空!")
          }
          else
          {
              $.ajax({
                  url:"./servers/weiwei/login.php",
                  data:$("#myform").serialize(),
                  datatype:"json",
                  type:"post",
                  success:function (data) {
                      console.log(JSON.parse(data));
                      if(JSON.parse(data).status)
                      {
                          alert(JSON.parse(data).msg);
                          setMyCookie("login",$("#myform .login").val(),1);
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
})