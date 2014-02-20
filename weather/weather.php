<?php
$ip = $_REQUEST['REMOTE_ADDR']; // the IP address to query

$query = @unserialize(file_get_contents('http://ip-api.com/php/'.$ip));
if($query && $query['status'] == 'success') {
  //get Coords
  $lat = $query['lat'];
  $lon = $query['lon'];

  $url = "http://api.openweathermap.org/data/2.5/weather?lat={$lat}&lon={$lon}";

   $djson = file_get_contents($url);
echo $djson;

} else {
   $url = "http://api.openweathermap.org/data/2.5/weather?q=Arlington";
   $djson = file_get_contents($url);
echo $djson;
}
?>