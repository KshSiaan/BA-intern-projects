<?php
require "./holidays.php";

foreach ($fridaysAndSaturdays as $day) {
    array_push($holidays, $day);
}
function getWorkdays($from, $to, $holidays)
{
    $from = new DateTime($from);
    $to = new DateTime($to);
    $interval = new DateInterval('P1D');
    $period = new DatePeriod($from, $interval, $to->modify('+1 day'));

    $workdays = 0;
    foreach ($period as $date) {
        if ($date->format('N') < 6 && !in_array($date->format('Y-m-d'), $holidays)) {
            $workdays++;
        }
    }
    return $workdays;
}


// Define date range here (Please keep it Year-Month-Day)

$from = "2024-06-24";
$to = "2024-08-12";


// Calculate workdays here

$workdays = getWorkdays($from, $to, $holidays);
echo "Number of workdays between $from and $to: $workdays";
