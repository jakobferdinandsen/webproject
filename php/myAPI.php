<?php
/**
 * Created by PhpStorm.
 * User: jakob
 * Date: 26-10-16
 * Time: 13:37
 */
echo "<pre>";
var_dump($_SERVER);
echo "</pre>";

$method = $_SERVER['REQUEST_METHOD'];

var_dump($method);

if ($method !== "GET"){

}