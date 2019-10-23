<div class="sign_in_sec" id="tab-2">
        <div class="signup-tab">
            <i class="fa fa-long-arrow-left"></i>
            <h2>user@example.com</h2>
            <ul>
                <li data-tab="tab-3" class="current"><a href="#" title="">User</a></li>
                {{-- <li data-tab="tab-4"><a href="#" title="">Company</a></li> --}}
            </ul>
        </div><!--signup-tab end-->	
        <div class="dff-tab current" id="tab-3">
                {{ html()->form('POST', route('frontend.auth.register.post'))->open() }}
                <div class="row">
                    <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                                {{ html()->text('first_name')
                                ->class('form-control')
                                ->placeholder(__('validation.attributes.frontend.first_name'))
                                ->attribute('maxlength', 191)
                                ->required()}}                            <i class="la la-user"></i>
                        </div>
                    </div>
                    <div class="col-lg-12 no-pdd">
                            <div class="sn-field">
                                    {{ html()->text('last_name')
                                    ->class('form-control')
                                    ->placeholder(__('validation.attributes.frontend.last_name'))
                                    ->attribute('maxlength', 191)
                                    ->required() }}                           <i class="la la-user"></i>
                            </div>
                        </div>
                    <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                                {{ html()->email('email')
                                ->class('form-control')
                                ->placeholder(__('validation.attributes.frontend.email'))
                                ->attribute('maxlength', 191)
                                ->required() }}                            <i class="la la-globe"></i>
                        </div>
                    </div>
                    {{-- <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                            <select>
                                <option>Category</option>
                            </select>
                            <i class="la la-dropbox"></i>
                            <span><i class="fa fa-ellipsis-h"></i></span>
                        </div>
                    </div> --}}
                    <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                                {{ html()->password('password')
                                ->class('form-control')
                                ->placeholder(__('validation.attributes.frontend.password'))
                                ->required() }}                            <i class="la la-lock"></i>
                        </div>
                    </div>
                    <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                                {{ html()->password('password_confirmation')
                                ->class('form-control')
                                ->placeholder(__('validation.attributes.frontend.password_confirmation'))
                                ->required() }}                            <i class="la la-lock"></i>
                        </div>
                    </div>
                    <div class="col-lg-12 no-pdd">
                        <div class="checky-sec st2">
                            <div class="fgt-sec">
                                <input type="checkbox" name="cc" checked="true" id="c2">
                                <label for="c2">
                                    <span></span>
                                </label>
                                <small>Yes, I understand and agree to the workwise Terms & Conditions.</small>
                            </div><!--fgt-sec end-->
                        </div>
                    </div>
                    <div class="col-lg-12 no-pdd">
                            {{ form_submit(__('labels.frontend.auth.register_button')) }}
                        </div>
                </div>
            </form>
        </div><!--dff-tab end-->
        {{-- <div class="dff-tab" id="tab-4">
            <form>
                <div class="row">
                    <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                            <input type="text" name="company-name" placeholder="Company Name">
                            <i class="la la-building"></i>
                        </div>
                    </div>
                    <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                            <input type="text" name="country" placeholder="Country">
                            <i class="la la-globe"></i>
                        </div>
                    </div>
                    <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                            <input type="password" name="password" placeholder="Password">
                            <i class="la la-lock"></i>
                        </div>
                    </div>
                    <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                            <input type="password" name="repeat-password" placeholder="Repeat Password">
                            <i class="la la-lock"></i>
                        </div>
                    </div>
                    <div class="col-lg-12 no-pdd">
                        <div class="checky-sec st2">
                            <div class="fgt-sec">
                                <input type="checkbox" name="cc" id="c3">
                                <label for="c3">
                                    <span></span>
                                </label>
                                <small>Yes, I understand and agree to the workwise Terms & Conditions.</small>
                            </div><!--fgt-sec end-->
                        </div>
                    </div>
                    <div class="col-lg-12 no-pdd">
                        <button type="submit" value="submit">Get Started</button>
                    </div>
                </div>
            </form>
        </div><!--dff-tab end--> --}}
    </div>