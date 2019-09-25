<?php
use Illuminate\Http\Request;
use GuzzleHttp\Client;


CONST CLIENT_ID = 2;
CONST CLIENT_SECRET = "EhyaDkz0LMXCZw96TGiDvSaHTYdm49gu4L5gWm4F";

Route::get('/redirect', function (Request $request) {
    $request->session()->put('state', $state = Str::random(40));

    $query = http_build_query([
        'client_id' => CLIENT_ID,
        'redirect_uri' => 'http://127.0.0.1:8000/callback',
        'response_type' => 'code',
        'scope' => '',
        'state' => $state,
    ]);

    return redirect('http://localhost/oauth/authorize?'.$query);
});

Route::get('/callback', function (Request $request) {
    $state = $request->session()->pull('state');

    throw_unless(
        strlen($state) > 0 && $state === $request->state,
        InvalidArgumentException::class
    );

    $http = new Client;

    $response = $http->post('http://localhost/oauth/token', [
        'form_params' => [
            'grant_type' => 'authorization_code',
            'client_id' => CLIENT_ID,
            'client_secret' => CLIENT_SECRET,
            'redirect_uri' => 'http://127.0.0.1:8000/callback',
            'code' => $request->code,
        ],
    ]);

   	$path = app_path();
   	$file = $path."access.json";
    $f = fopen($file,"w");
    $result = (string) $response->getBody();
    fwrite($f, $result);
    fclose($f);
    return json_decode($result,true);
});


Route::get('/{any}', 'SinglePageController@index')->where('any', '.*');
