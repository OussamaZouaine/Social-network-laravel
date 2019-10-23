<?php

namespace App\Models\Auth;

use Illuminate\Database\Eloquent\Model;

class Info extends Model
{
    //

    public function user()
    {
        return $this->belongsTo('App\Models\Auth\Usemr');
    }
}
