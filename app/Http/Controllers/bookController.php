<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class bookController extends Controller{

    public function home() {
        return view('home');
    }

    public function search() {
        return view('search');
    }



}
