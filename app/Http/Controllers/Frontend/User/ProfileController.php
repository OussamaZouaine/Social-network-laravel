<?php

namespace App\Http\Controllers\Frontend\User;
use App\Models\Auth\User;
use App\Models\Auth\Info;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Repositories\Frontend\Auth\UserRepository;
use App\Http\Requests\Frontend\User\UpdateProfileRequest;

/**
 * Class ProfileController.
 */
class ProfileController extends Controller
{
    /**
     * @var UserRepository
     */
    protected $userRepository;

    /**
     * ProfileController constructor.
     *
     * @param UserRepository $userRepository
     */
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * @param UpdateProfileRequest $request
     *
     * @throws \App\Exceptions\GeneralException
     * @return mixed
     */
    public function update(UpdateProfileRequest $request)
    {
        
        $output = $this->userRepository->update(
            $request->user()->id,
            $request->only('first_name', 'last_name', 'email', 'avatar_type', 'avatar_location'),
            $request->has('avatar_location') ? $request->file('avatar_location') : false
        );
        $user = Auth::user();
        $info=$user->info?:new Info;
        $info->city=$request['city'];
        $info->birthday=date('Y-m-d', strtotime($request['birthday']));
        $info->country=$request['country'];
        $info->gender=$request['gender'];
        //save info
        $user->info()->save($info);
        // E-mail address was updated, user has to reconfirm
        if (is_array($output) && $output['email_changed']) {
            auth()->logout();

            return redirect()->route('frontend.auth.login')->withFlashInfo(__('strings.frontend.user.email_changed_notice'));
        }

        return redirect()->route('frontend.user.account')->withFlashSuccess(__('strings.frontend.user.profile_updated'));
    }
    public function setInfo(){
        $user = Auth::user();
        $info=$user->info?:new Info;
        $info->city='FES';
        $info->birthday=date('Y-m-d', strtotime(now()));
        $info->country='Morocco';
        $info->gender='male';

        $user->info()->save($info);




    }

}
