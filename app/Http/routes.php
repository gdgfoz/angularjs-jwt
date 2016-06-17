<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(['namespace' => 'Api\V1', 'prefix' => 'api/v1', 'middleware' => ['api', 'cors']], function(){

    Route::post('auth/login', 'AuthenticateController@authenticate');
    
    Route::group(['middleware' => 'jwt.auth'], function(){    
        Route::get('posts', 'PostController@index');    
        Route::get('posts/{id}', 'PostController@show');    
    });
    
    Route::get('/', function(){
        return ['api' => 'V1', 'name' => 'Blog API'];
    });
    
});


Route::get('/', function () {
    return view('welcome');
});
