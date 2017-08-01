<?php
/**
 * Created by PhpStorm.
 * User: tronke
 * Date: 2017/5/27
 * Time: 11:19
 */

/*$("#btn").data("proid",res[0].proid);
                $("#btn").data("proimg",res[0].proimg);
                $("#btn").data("proprice",res[0].proprice);
                $("#btn").data("proname",res[0].proname);*/
header("Content-type:text/html;charset=utf-8");  //统一输出编码为utf-8
header("Access-Control-Allow-Origin:*");


if(!empty($_POST) && $_POST["proid"] != null && $_POST["proid"] != ""){


    /*
     *
     *
     * proid:3
proimg:./images/3.jpg
proprice:998
proname:耳机
userId:1
     *
     *
     *
     * */


    $proid = $_POST["proid"];
    $proimg = $_POST["proimg"];
    $proprice = $_POST["proprice"];
    $proname = $_POST["proname"];
   $userId = $_POST["userId"]; //购车的用户id
    $carnumber=$_POST["carnumber"];


    $conn = new mysqli("127.0.0.1", "root", "", "myjob");

    mysqli_query($conn, "set names utf8");


    $sql = "SELECT *  FROM carts  WHERE uid=".$userId." AND   proid=" . $proid;
    $result1 = $conn->query($sql);// 返回结果

   // print_r($result1);

    if($result1 && $result1->num_rows == 1){
        //数据库中有记录,修改数量
        $sqlUpdate = "UPDATE carts SET carnumber=carnumber+$carnumber WHERE uid=" . $userId . " AND proid= " . $proid;
        $updateStatus = $conn->query($sqlUpdate);// 返回结果
        if($updateStatus){
            $arr = array("status" => 1, "msg" => "update成功");
            print_r(json_encode($arr));
        } else {
            $arr = array("status" => 0, "msg" => "update失败");
            print_r(json_encode($arr));
        }
    } else {
        // 如果没有记录，就添加

        $sqlAdd = "INSERT INTO `myjob`.`carts` (`carnumber`,`proid`,`proname`,`proprice`,`proimg`,`prostatus`,`uid`)
             VALUES( $carnumber, '".$proid."','". $proname ."','". $proprice ."','" . $proimg . "',1,'".$userId."');";
        $addStatus = $conn->query($sqlAdd);// 返回结果
        if($addStatus){
            $arr = array("status" => 1, "msg" => "add成功");
            print_r(json_encode($arr));
        } else {
            $arr = array("status" => 0, "msg" => "add失败");
            print_r($arr);
        }


    }

    $conn->close();//关闭数据连接；


    // print_r($sql);


}
