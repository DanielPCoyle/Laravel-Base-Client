<?php
use Illuminate\Http\Request;
use GuzzleHttp\Client;

define('CLIENT_ID',env("APP_CLIENT_ID"));
define('CLIENT_SECRET',env("APP_CLIENT_SECRET"));

Route::get('/redirect', function (Request $request) {
    $request->session()->put('state', $state = Str::random(40));

    $query = http_build_query([
        'client_id' => CLIENT_ID,
        'redirect_uri' => 'http://localhost:8000/callback',
        'response_type' => 'code',
        'scope' => '',
        'state' => $state,
    ]);
    return redirect('http://localhost/oauth/authorize?'.$query);
});

Route::get('/callback', function (Request $request) {
    // $state = $request->session()->pull('state');

    // dump(strlen($state));
    // dd($state);
    // throw_unless(
    //     strlen($state) > 0 && $state === $request->state,
    //     InvalidArgumentException::class
    // );

    $http = new Client;

    $response = $http->post('http://localhost/oauth/token', [
        'form_params' => [
            'grant_type' => 'authorization_code',
            'client_id' => CLIENT_ID,
            'client_secret' => CLIENT_SECRET,
            'redirect_uri' => 'http://localhost:8000/callback',
            'code' => $request->code,
        ],
    ]);

    $path = app_path();
    $file = $path."access.json";
    $f = fopen($file,"w");
    $result = (string) $response->getBody();
    fwrite($f, $result);
    fclose($f);
    $result = json_decode($result,true);
    $content = "<h1>Access Token</h1><pre>".$result['access_token']."<pre>";
    $content .= "<h1>Refresh</h1><pre>".$result['refresh_token']."<pre>";

    return $content;
});


Route::get('/{any}', 'SinglePageController@index')->where('any', '.*');

