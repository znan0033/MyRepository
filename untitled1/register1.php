<?php
/**
 * Created by PhpStorm.
 * User: ijeff
 * Date: 17/6/26
 * Time: 下午1:42
 */

//username : 用户名
//pwd : 密码
//age : 年龄

//获取前端提交过来的参数
$username = $_POST["username"];
$pwd = $_POST["pwd"];
$age = $_POST["age"];

//echo $username.$pwd.$age;
class Res {
    public  $status;
    public  $msg;
}

//注册
$conn = new mysqli("127.0.0.1", "root", "", "mydb2") or die("连接失败");
$sql = "select * from users where uname='$username'";
$result = $conn->query($sql);
if ($result && $result->num_rows > 0){
    //存在相同用户
    $res = new Res();
    $res->status = 0;
    $res->msg = "该用户已存在";
    echo  json_encode($res);
}
else {
    //不存在相同用户

    //插入数据
    $sql = "insert into users(uname,upwd,uage) values('$username','$pwd','$age')";
    $result =  $conn->query($sql);
    if ($result) {
        $res = new Res();
        $res->status = 1;
        $res->msg = "注册成功！";
        echo  json_encode($res);
    }
    else {
        $res = new Res();
        $res->status = 2;
        $res->msg = "注册失败";
        echo  json_encode($res);
    }
    $conn->close();
}

























