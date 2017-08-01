<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/5/25 0025
 * Time: 下午 2:57
 */
header ( "Content-type:text/html;charset=utf-8" );  //统一输出编码为utf-8
header("Access-Control-Allow-Origin:*");
//连接sql服务器
$dbserve="127.0.0.1";
$dbusername="root";
$dbpwd="";
$dbdatabase="weiwei";

//创建新链接
$connection=new mysqli($dbserve,$dbusername,$dbpwd,$dbdatabase);
mysqli_query($connection,"set names utf8");
    $sql="SELECT*FROM register WHERE uloginname='".$_POST["loadingname"]."' AND upwd='".$_POST["pwd"]."'";
//    print_r( json_encode($_POST));
    $result=$connection->query($sql);
    if($result->num_rows==1)
    {
        $arr=array("status"=>1,"msg"=>"登陆成功");
        print_r(json_encode($arr));
    }
    else
    {
        $arr=array("status"=>0,"msg"=>"用户名或者密码输入错误,登陆失败");
        print_r(json_encode($arr));
    }
