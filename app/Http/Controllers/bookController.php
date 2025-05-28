<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class bookController extends Controller{

    public function home() {
        return view('home');
    }

    public function search() {
        return view('search');
    }

}
