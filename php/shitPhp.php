<?php
/**
 * Created by PhpStorm.
 * User: jakob
 * Date: 26-10-16
 * Time: 11:04
 */

$departments = [
    "IT" => [
        "Alice" => 560,
        "Bob" => 560
    ],
    "Marketing" => [
        "Char" => 800,
        "Dan" => 900
    ]
];
$total = 0;
foreach ($departments as $department) {
    foreach ($department as $salary){
        $total += $salary;
    }
}

var_dump($_POST);

