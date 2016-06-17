<?php

namespace App\Http\Controllers\Api\V1;


use App\Http\Controllers\Controller;

class PostController extends Controller {

    public function index() {
        return \App\Post::all();
    }

    public function show($id) {
        $post = \App\Post::find($id);
        
        if(is_null($post)){
            return \Response::json(['message' => 'Not found'], 404);
        }
        
        return $post;
    }

}
