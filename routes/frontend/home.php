<?php

use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\ContactController;
use App\Http\Controllers\Frontend\User\AccountController;
use App\Http\Controllers\Frontend\User\ProfileController;
use App\Http\Controllers\Frontend\User\DashboardController;
use App\Http\Middleware\CheckInfo;

/*
 * Frontend Controllers
 * All route names are prefixed with 'frontend.'.
 */
Route::group(['middleware' => ['auth']], function () {
    Route::get('/', [HomeController::class, 'index'])->name('index');
    Route::redirect('/', '/dashboard');
    Route::get('contact', [ContactController::class, 'index'])->name('contact');
    Route::post('contact/send', [ContactController::class, 'send'])->name('contact.send');
    Route::patch('info/update', [ProfileController::class, 'update'])->name('info.update');
});
/*
 * These frontend controllers require the user to be logged in
 * All route names are prefixed with 'frontend.'
 * These routes can not be hit if the password is expired
 */
route::get('info',function (){
    return view('work.user.info');
})->name('info')->middleware('auth');
Route::group(['middleware' => ['auth', 'password_expires','checkInfo']], function () {

    Route::group(['namespace' => 'User', 'as' => 'user.'], function () {
        // User Dashboard Specific
        Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');



        // User Account Specific
        Route::get('account', [AccountController::class, 'index'])->name('account');

        // User Profile Specific
        Route::patch('profile/update', [ProfileController::class, 'update'])->name('profile.update');

    });
});
