<?php
header("Content-Type: text/html; charset=utf-8");
header('Access-Control-Allow-Origin:*');
//获取前段提交的数据
$usename = $_POST["username"];
$pwd = $_POST["pwd"];

//echo $username. $pwd.
class Res{
    public $status;
    public $msg;
}

//注册
$conn = new mysqli("127.0.0.1", "root","", "mydb") or die("连接失败");
$sql = "select * from mybooks where uname='$usename'";
$result = $conn->query($sql);
if($result && $result->num_rows > 0){
    //存在相同用户
    $res = new Res();
    $res->status = 0;
    $res->msg = "该用户已存在";
    echo json_encode($res);
}
else{
    //不存在相同用户
    //插入数据
    $sql = "insert into mybooks(uname,upwd) values('$usename','$pwd')";
    $result = $conn->query($sql);
    if($result){
        $res = new Res();
        $res->status = 1;
        $res->msg = "注册成功";
        echo json_encode($res);
    }
    else{
        $res = new Res();
        $res->status = 2;
        $res->msg = "注册失败";
        echo json_encode($res);
    }
    $conn->close();
}