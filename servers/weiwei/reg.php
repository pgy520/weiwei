<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/5/25 0025
 * Time: 上午 11:15
 */
header ( "Content-type:text/html;charset=utf-8" );  //统一输出编码为utf-8
header('Access-Control-Allow-Origin:*');  //容许跨域 为ajax做准备

$dbserver="127.0.0.1";
$dbuser="root";
$dbpwd="";
$database="weiwei";

//创建新链接
$conn=new mysqli($dbserver,$dbuser,$dbpwd,$database);
mysqli_query($conn,"set names utf8");
//print_r($conn->connect_error);
$data=json_encode($_POST);
if(!empty($_POST)&&$_POST["loginname"]!=""&&$_POST["pwd"]!="")
{
    $uloginname=$_POST["loginname"];
    $uusername=$_POST["username"];
    $upwd=$_POST["pwd"];
    $usex=$_POST["sex"];
    $uaddress=$_POST["address"];
    $uemial=$_POST["email"];
    $msql="INSERT INTO register (uloginname,uusername,upwd,usex,uaddress,uemial)
VALUES('".$uloginname."','".$uusername."','".$upwd."','".$usex."','".$uaddress."','".$uemial."')";
   //建立连接并且返回结果
    $flag="SELECT*FROM register WHERE uloginname='".$_POST["loginname"]."'";
    $flag_1=$conn->query($flag);
    if($flag_1->num_rows==1)
    {
        $arr=array("status"=>0,"msg"=>"注册失败,用户名已被注册");
        print_r(json_encode($arr));
    }
    else
    {
        $result=$conn->query($msql);
        $arr=array("status"=>1,"msg"=>"注册成功");
        print_r(json_encode($arr));
    }

}
else{
    $arr=array("status"=>0,"msg"=>"注册失败");
    print_r(json_encode($arr));
}

//关闭连接
$conn->close();