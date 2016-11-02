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

if (isset($_GET["roomid"])) {
    $roomId = trim($_GET["roomid"]);
}


if (strlen($roomId) == 0) {
    http_response_code(400);
    echo json_encode([
        "code" => 400,
        "msg" => "Room id cannot be empty"
    ]);
    die;
}


echo json_encode([
    "code" => 200,
    "temperature" => rand(-5, 39),
    "msg" => "Success",
    "id" => $roomId,
    "units" => "C"
]);