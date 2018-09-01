<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::view('chat', 'chat')->middleware('auth');
//Route::get('/chat', function () {
//    return view('chat');
//});

Route::get('/message', function () {
    //get messages from backend
    return App\Message::with('user')->get();
})->middleware('auth');

Route::post('/message', function () {
    //store new messag to backend
    $user = Auth::user();
    $user->messages()->create([
        'message' => request()->get('message')
    ]);
    return ['status' => 200];
})->middleware('auth');

/*not-working*/
//Route::get('/vue', function () {
//    return view('vue');
//});
//Route::view('vue', 'vue');


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
