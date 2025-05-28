<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\savedbook;

class savedbookController extends Controller
{
    public function index() {
        $books = savedbook::all();
        return view('saved', compact('books'));
    }

    public function store(Request $request) {
        $book = savedbook::create($request->all());
        return response()->json($book);
    }

    public function destroy($id) {
        savedbook::destroy($id);
        return redirect()->back();
    }
}
