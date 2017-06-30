<?php
/**
 * Created by PhpStorm.
 * User: ijeff
 * Date: 17/6/26
 * Time: 下午12:08
 */

//PHP 连接 MySql数据库
//创建数据库
//创建表
//插入数据
//查询数据
//修改数据
//删除数据


//连接数据库MySql
//第一个参数： 数据库所在的服务器地址
//第二个参数： MySql的用户名
//第三个参数： MySql的密码
//第四个参数： MySql中的指定数据库
//$conn = new mysqli("127.0.0.1", "root", "");

header("Content-type:text/html; charset=utf8");

/*
$conn = new mysqli("127.0.0.1", "root", "", "mydb2");
if ($conn->connect_error){
    echo "连接失败";
}
else {
    echo "连接成功！";
}
*/

//连接MySql数据库
//创建表
/*
$conn1 = new mysqli("127.0.0.1", "root", "", "mydb2") or die("连接失败");
$sql = "create table if not exists mybooks(id int not null PRIMARY  KEY auto_increment, name varchar(255), url varchar(255))";
$result = $conn1->query($sql);
if ($result == true) {
    echo "创建表成功或表已经存在！";
}
else {
    echo "创建表失败！";
}
$conn1->close(); //关闭数据库
*/

//插入数据
/*
$conn2 = new mysqli("127.0.0.1", "root", "", "mydb2") or die("连接失败！");
$sql = "insert into mybooks(name,url) values('zhangsan', 'www.baidu.com')";
$result = $conn2->query($sql);
if ($result) {
    echo  "插入成功！";
}
else  {
    echo "插入失败";
}
$conn2->close();
*/


//查询数据
/*
$conn3 = new mysqli("127.0.0.1", "root", "", "mydb2") or die("连接失败");
$sql = "select * from mybooks";
$result = $conn3->query($sql);
if ($result && $result->num_rows > 0) {
    //有数据
    while ($row = $result->fetch_assoc()){
        echo  "数据：" . $row["id"] . "，名字：" . $row["name"] . "，路径：" . $row["url"] . "<br>";
    }
}
else  {
    //没有数据
}
$conn3->close();
*/

//修改数据
//要使用面向过程的写法, 调用函数mysqli_connect
/*
$conn4 = mysqli_connect("127.0.0.1", "root", "", "mydb2") or die("连接失败");
$sql = "update mybooks set name='lisi' where id=6";
$result = mysqli_query($conn4, $sql);
if ($result) {
    echo "修改成功！";
}
else  {
    echo "修改失败！";
}
mysqli_close($conn4);
*/

//删除数据
/*
$conn5 = mysqli_connect("127.0.0.1", "root", "", "mydb2") or die("连接失败");
$sql = "delete from mybooks where name='lisi'";
$result = mysqli_query($conn5, $sql);
if ($result) {
    echo "删除成功！";
}
else  {
    echo  "删除失败！";
}
mysqli_close($conn5);
*/






