<?php
ini_set('log_errors', true);
ini_set('error_log', dirname(__FILE__).'/debug_demo.log');

define('OAUTH2_CLIENT_ID', 'b9aedf60090569270b51');
define('OAUTH2_CLIENT_SECRET', 'e2008f33163497d972f91c325e6c6c0784f84899');

$authorizeURL = 'https://github.com/login/oauth/authorize';
$tokenURL = 'https://github.com/login/oauth/access_token';
$apiURLBase = 'https://api.github.com/';

session_start();

// for debug
// unset(  $_SESSION['access_token'] );

if(get('callback_url')){
  $_SESSION['callback_url'] = get('callback_url');
}

if(session('access_token')) {
  $token = session('access_token');
  if(session('callback_url')){
    redirect_to(session('callback_url')."#access_token=".$token."&days=".$row['days']);
  }else{
    echo "No original callback_url, token : ".$token;
  }
}else if(get('code')) {
  // Verify the state matches our stored state
  if(!get('state') || $_SESSION['state'] != get('state')) {
    redirect_to($_SERVER['PHP_SELF']);
  }

  // Exchange the auth code for a token
  $token = apiRequest($tokenURL . '?' . http_build_query([
    'client_id' => OAUTH2_CLIENT_ID,
    'client_secret' => OAUTH2_CLIENT_SECRET,
    'state' => session('state'),
    'code' => get('code')
  ]));

  $_SESSION['access_token'] = $token->access_token;


   redirect_to(get_current_base_url());
}else{
  // Generate a random hash and store in the session for security
  $_SESSION['state'] = hash('sha256', microtime(TRUE) . rand() . $_SERVER['REMOTE_ADDR']);
  unset($_SESSION['access_token']);

  // Redirect the user to Github's authorization page
  redirect_to($authorizeURL . '?' . http_build_query([
    'client_id' => OAUTH2_CLIENT_ID,
    'redirect_uri' => get_current_base_url(),
    'state' => $_SESSION['state'],
    'scope' => 'repo'
  ]));
}

function apiRequest($url) {
  $context  = stream_context_create([
    'http' => [
      'user_agent' => 'CrossUI OAuth Login',
      'header' => 'Accept: application/json'
    ]
  ]);
  $response = @file_get_contents($url, false, $context);
  return $response ? json_decode($response) : $response;
}

function get($key, $default=NULL) {
  return isset($_GET[$key]) ? $_GET[$key] : $default;
}

function session($key, $default=NULL) {
  return isset($_SESSION[$key]) ? $_SESSION[$key] : $default;
}

function get_current_base_url() {
  return get_site_url() . preg_replace('/\?.*/', '', $_SERVER['REQUEST_URI']);
}

function get_site_url() {
  return 'http' . ($_SERVER["HTTPS"] ? 's' : '')
    . "://{$_SERVER['SERVER_NAME']}"
    . ($_SERVER["SERVER_PORT"] !== '80' ? ":{$_SERVER['SERVER_PORT']}" : '');
}

function redirect_to($url) {
  header('Location: ' . $url);
  die();
}