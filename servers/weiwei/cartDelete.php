<?php
/**
 * Created by PhpStorm.
 * User: tronke
 * Date: 2017/5/27
 * Time: 9:40
 */
header("Content-type:JSON;charset=utf-8");  //统一输出编码为utf-8
header("Access-Control-Allow-Origin:*");

if(!empty($_POST) && $_POST["cartId"]!="" && $_POST["cartId"]!=null){



    $conn=new mysqli("127.0.0.1","root","","myjob");

    mysqli_query($conn,"set names utf8");

    $sql=" DELETE FROM carts WHERE carid=".$_POST["cartId"];

    $result=$conn->query($sql);// 返回结果

    if($result){
        $arrlist=array("status"=>1,"msg"=>"删除成功");
        print_r(json_encode($arrlist));
    }else{
        $arrlist=array("status"=>0,"msg"=>"删除失败");
        print_r(json_encode($arrlist));
    }







}








