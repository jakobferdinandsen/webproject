<?php
/**
 * Created by PhpStorm.
 * User: jakob
 * Date: 26-10-16
 * Time: 13:37
 */

$method = $_SERVER['REQUEST_METHOD'];

if ($method !== "GET") {
    http_response_code(400);
    echo json_encode([
        "code" => 400,
        "msg" => "This API will process only get requests"
    ]);
    die;
}
$roomId = "";

if (isset($_GET["roomid"])){
    $roomId = $_GET["roomid"];
}


if ($roomId === "" || !is_numeric($roomId)) {
    http_response_code(400);
    echo json_encode([
        "code" => 400,
        "msg" => "Need a numeric roomid: Got '$roomId'"
    ]);
    die;
}


echo json_encode([
    "code" => 200,
    "temperature" => rand(-5, 39),
    "msg" => "Success",
    "id" => $roomId
]);