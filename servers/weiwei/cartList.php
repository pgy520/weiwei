<?php
/**
 * Created by PhpStorm.
 * User: tronke
 * Date: 2017/5/27
 * Time: 9:40
 */
header("Content-type:JSON;charset=utf-8");  //统一输出编码为utf-8
header("Access-Control-Allow-Origin:*");

//if(!empty($_GET) && $_GET["uId"]!="" && $_GET["uId"]!=null){
    if(!empty($_GET) && $_GET["uId"]!="" && $_GET["uId"]!=null){

    $conn=new mysqli("127.0.0.1","root","","myjob");

    mysqli_query($conn,"set names utf8");

    $sql=" SELECT*FROM carts  WHERE prostatus=1 AND uid=".$_GET["uId"];


    $result=$conn->query($sql);// 返回结果

    $arrlist=array();

    if($result->num_rows>0){
        while($row=$result->fetch_assoc()){
            array_push($arrlist,$row);
        }
    }
    print_r(json_encode($arrlist));


}








