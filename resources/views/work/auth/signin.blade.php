<div class="sign_in_sec current" id="tab-1">
									
        <h3>Sign in</h3>
        {{ html()->form('POST', route('frontend.auth.login.post'))->open() }}
        

       
            <div class="row">
                <div class="col-lg-12 no-pdd">
                    <div class="sn-field">
                        <input type="text" name="email" placeholder="Email" type="email">
                        <i class="la la-user"></i>
                    </div><!--sn-field end-->
                </div>
                <div class="col-lg-12 no-pdd">
                    <div class="sn-field">
                        <input type="password" name="password" placeholder="Password" type="password">
                        <i class="la la-lock"></i>
                    </div>
                </div>
                <div class="col-lg-12 no-pdd">
                    <div class="checky-sec">
                        <div class="fgt-sec">
                            <input type="checkbox" name="remember" checked="true" id="c1">
                            <label for="c1">
                                <span></span>
                            </label>
                            <small>{{__('labels.frontend.auth.remember_me')}}</small>
                        </div><!--fgt-sec end-->
                        <a href="{{ route('frontend.auth.password.reset') }}">@lang('labels.frontend.passwords.forgot_password')</a>
                    </div>
                </div>
               
                <div class="col-lg-12 no-pdd">
                    {{ form_submit(__('labels.frontend.auth.login_button')) }}
                </div>
            </div>
        </form>
        <div class="login-resources">
            <h4>Login Via Social Account</h4>
            <ul>
                <li><a href="#" title="" class="fb"><i class="fa fa-facebook"></i>Login Via Facebook</a></li>
                <li><a href="#" title="" class="tw"><i class="fa fa-twitter"></i>Login Via Twitter</a></li>
            </ul>
        </div><!--login-resources end-->
    </div><!--sign_in_sec end-->