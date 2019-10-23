<?php

namespace App\Http\Middleware;
use Illuminate\Support\Facades\Auth;
use Closure;

class CheckInfo
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        
        echo('hello');
            $user = Auth::user();
            if($user->info){
                   return $next($request);
            }else{
                return redirect('dashboard');
            }
    
            
        

      
       
    }
}
