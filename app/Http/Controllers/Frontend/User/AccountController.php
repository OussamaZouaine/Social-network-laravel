<?php

namespace App\Http\Controllers\Frontend\User;

use App\Http\Controllers\Controller;
use Log;

/**
 * Class AccountController.
 */
class AccountController extends Controller
{
    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {

        Log::info(\Auth::user()->info);
        return view('frontend.user.account');
    }
}
