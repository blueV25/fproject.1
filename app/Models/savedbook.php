<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class savedbook extends Model
{
    protected $fillable = ['title',
        'author',
        'cover_url',
        'openlibrary_id'];


}
