@include('work.layouts.header')

<div class="col-lg-9">
    <div id="nav-tabContent" class="tab-content">
        <div id="nav-acc" role="tabpanel" aria-labelledby="nav-acc-tab" class="tab-pane fade">
            <div class="acc-setting">
                <h3>Account Setting</h3>
                <form>
                    <div class="notbar">
                        <h4>Notification Sound</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium nulla quis erat dapibus, varius hendrerit neque suscipit. Integer in ex euismod, posuere lectus id</p>
                        <div class="toggle-btn">
                            <a href="#" title=""><img src="images/up-btn.png" alt=""></a>
                        </div>
                    </div>
                    <div class="notbar">
                        <h4>Notification Email</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium nulla quis erat dapibus, varius hendrerit neque suscipit. Integer in ex euismod, posuere lectus id</p>
                        <div class="toggle-btn">
                            <a href="#" title=""><img src="images/up-btn.png" alt=""></a>
                        </div>
                    </div>
                    <div class="notbar">
                        <h4>Chat Message Sound</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium nulla quis erat dapibus, varius hendrerit neque suscipit. Integer in ex euismod, posuere lectus id</p>
                        <div class="toggle-btn">
                            <a href="#" title=""><img src="images/up-btn.png" alt=""></a>
                        </div>
                    </div>
                    <div class="save-stngs">
                        <ul>
                            <li>
                                <button type="submit">Save Setting</button>
                            </li>
                            <li>
                                <button type="submit">Restore Setting</button>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
        <div id="nav-status" role="tabpanel" aria-labelledby="nav-status-tab" class="tab-pane fade">
            <div class="acc-setting">
                <h3>Profile Status</h3>
                <div class="profile-bx-details">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <div class="profile-bx-info">
                                <div class="pro-bx"><img src="images/pro-icon1.png" alt="">
                                    <div class="bx-info">
                                        <h3>$5,145</h3>
                                        <h5>Total Income</h5></div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <div class="profile-bx-info">
                                <div class="pro-bx"><img src="images/pro-icon2.png" alt="">
                                    <div class="bx-info">
                                        <h3>$4,745</h3>
                                        <h5>Widthraw</h5></div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <div class="profile-bx-info">
                                <div class="pro-bx"><img src="images/pro-icon3.png" alt="">
                                    <div class="bx-info">
                                        <h3>$1,145</h3>
                                        <h5>Sent</h5></div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <div class="profile-bx-info">
                                <div class="pro-bx"><img src="images/pro-icon4.png" alt="">
                                    <div class="bx-info">
                                        <h3>130</h3>
                                        <h5>Total Projects</h5></div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pro-work-status"></div>
            </div>
        </div>
        <div id="nav-password" role="tabpanel" aria-labelledby="nav-password-tab" class="tab-pane fade">
            <div class="acc-setting">
                <h3>Account Setting</h3>
                <form>
                    <div class="cp-field">
                        <h5>Old Password</h5>
                        <div class="cpp-fiel">
                            <input type="text" name="old-password" placeholder="Old Password"> <i class="fa fa-lock"></i></div>
                    </div>
                    <div class="cp-field">
                        <h5>New Password</h5>
                        <div class="cpp-fiel">
                            <input type="text" name="new-password" placeholder="New Password"> <i class="fa fa-lock"></i></div>
                    </div>
                    <div class="cp-field">
                        <h5>Repeat Password</h5>
                        <div class="cpp-fiel">
                            <input type="text" name="repeat-password" placeholder="Repeat Password"> <i class="fa fa-lock"></i></div>
                    </div>
                    <div class="cp-field">
                        <h5><a href="#" title="">Forgot Password?</a></h5></div>
                    <div class="save-stngs pd2">
                        <ul>
                            <li>
                                <button type="submit">Save Setting</button>
                            </li>
                            <li>
                                <button type="submit">Restore Setting</button>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
        <div id="nav-notification" role="tabpanel" aria-labelledby="nav-notification-tab" class="tab-pane fade">
            <div class="acc-setting">
                <h3>Notifications</h3>
                <div class="notifications-list">
                    <div class="notfication-details">
                        <div class="noty-user-img"><img src="http://via.placeholder.com/35x35" alt=""></div>
                        <div class="notification-info">
                            <h3><a href="#" title="">Jassica William</a> Comment on your project.</h3> <span>2 min ago</span></div>
                    </div>
                    <div class="notfication-details">
                        <div class="noty-user-img"><img src="http://via.placeholder.com/35x35" alt=""></div>
                        <div class="notification-info">
                            <h3><a href="#" title="">Poonam Verma</a> Bid on your Latest project.</h3> <span>2 min ago</span></div>
                    </div>
                    <div class="notfication-details">
                        <div class="noty-user-img"><img src="http://via.placeholder.com/35x35" alt=""></div>
                        <div class="notification-info">
                            <h3><a href="#" title="">Tonney Dhman</a> Comment on your project.</h3> <span>2 min ago</span></div>
                    </div>
                    <div class="notfication-details">
                        <div class="noty-user-img"><img src="http://via.placeholder.com/35x35" alt=""></div>
                        <div class="notification-info">
                            <h3><a href="#" title="">Jassica William</a> Comment on your project.</h3> <span>2 min ago</span></div>
                    </div>
                    <div class="notfication-details">
                        <div class="noty-user-img"><img src="http://via.placeholder.com/35x35" alt=""></div>
                        <div class="notification-info">
                            <h3><a href="#" title="">Jassica William</a> Comment on your project.</h3> <span>2 min ago</span></div>
                    </div>
                    <div class="notfication-details">
                        <div class="noty-user-img"><img src="http://via.placeholder.com/35x35" alt=""></div>
                        <div class="notification-info">
                            <h3><a href="#" title="">Poonam Verma </a> Bid on your Latest project.</h3> <span>2 min ago</span></div>
                    </div>
                    <div class="notfication-details">
                        <div class="noty-user-img"><img src="http://via.placeholder.com/35x35" alt=""></div>
                        <div class="notification-info">
                            <h3><a href="#" title="">Tonney Dhman</a> Comment on your project</h3> <span>2 min ago</span></div>
                    </div>
                    <div class="notfication-details">
                        <div class="noty-user-img"><img src="http://via.placeholder.com/35x35" alt=""></div>
                        <div class="notification-info">
                            <h3><a href="#" title="">Jassica William</a> Comment on your project.</h3> <span>2 min ago</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="nav-requests" role="tabpanel" aria-labelledby="nav-requests-tab" class="tab-pane fade active show">
            <div class="acc-setting">
                <h3>Requests</h3>
                <div class="requests-list">
                    <div class="request-details">
                        <div class="noty-user-img"><img src="http://via.placeholder.com/35x35" alt=""></div>
                        <div class="request-info">
                            <h3>Jessica William</h3> <span>Graphic Designer</span></div>
                        <div class="accept-feat">
                            <ul>
                                <li>
                                    <button type="submit" class="accept-req">Accept</button>
                                </li>
                                <li>
                                    <button type="submit" class="close-req"><i class="la la-close"></i></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="request-details">
                        <div class="noty-user-img"><img src="http://via.placeholder.com/35x35" alt=""></div>
                        <div class="request-info">
                            <h3>John Doe</h3> <span>PHP Developer</span></div>
                        <div class="accept-feat">
                            <ul>
                                <li>
                                    <button type="submit" class="accept-req">Accept</button>
                                </li>
                                <li>
                                    <button type="submit" class="close-req"><i class="la la-close"></i></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="request-details">
                        <div class="noty-user-img"><img src="http://via.placeholder.com/35x35" alt=""></div>
                        <div class="request-info">
                            <h3>Poonam</h3> <span>Wordpress Developer</span></div>
                        <div class="accept-feat">
                            <ul>
                                <li>
                                    <button type="submit" class="accept-req">Accept</button>
                                </li>
                                <li>
                                    <button type="submit" class="close-req"><i class="la la-close"></i></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="request-details">
                        <div class="noty-user-img"><img src="http://via.placeholder.com/35x35" alt=""></div>
                        <div class="request-info">
                            <h3>Bill Gates</h3> <span>C &amp; C++ Developer</span></div>
                        <div class="accept-feat">
                            <ul>
                                <li>
                                    <button type="submit" class="accept-req">Accept</button>
                                </li>
                                <li>
                                    <button type="submit" class="close-req"><i class="la la-close"></i></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="request-details">
                        <div class="noty-user-img"><img src="http://via.placeholder.com/35x35" alt=""></div>
                        <div class="request-info">
                            <h3>Jessica William</h3> <span>Graphic Designer</span></div>
                        <div class="accept-feat">
                            <ul>
                                <li>
                                    <button type="submit" class="accept-req">Accept</button>
                                </li>
                                <li>
                                    <button type="submit" class="close-req"><i class="la la-close"></i></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="request-details">
                        <div class="noty-user-img"><img src="http://via.placeholder.com/35x35" alt=""></div>
                        <div class="request-info">
                            <h3>John Doe</h3> <span>PHP Developer</span></div>
                        <div class="accept-feat">
                            <ul>
                                <li>
                                    <button type="submit" class="accept-req">Accept</button>
                                </li>
                                <li>
                                    <button type="submit" class="close-req"><i class="la la-close"></i></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="nav-deactivate" role="tabpanel" aria-labelledby="nav-deactivate-tab" class="tab-pane fade">
            <div class="acc-setting">
                <h3>Deactivate Account</h3>
                <form>
                    <div class="cp-field">
                        <h5>Email</h5>
                        <div class="cpp-fiel">
                            <input type="text" name="email" placeholder="Email"> <i class="fa fa-envelope"></i></div>
                    </div>
                    <div class="cp-field">
                        <h5>Password</h5>
                        <div class="cpp-fiel">
                            <input type="password" name="password" placeholder="Password"> <i class="fa fa-lock"></i></div>
                    </div>
                    <div class="cp-field">
                        <h5>Please Explain Further</h5>
                        <textarea></textarea>
                    </div>
                    <div class="cp-field">
                        <div class="fgt-sec">
                            <input type="checkbox" name="cc" id="c4">
                            <label for="c4"><span></span></label> <small>Email option out</small></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium nulla quis erat dapibus, varius hendrerit neque suscipit. Integer in ex euismod, posuere lectus id,</p>
                    </div>
                    <div class="save-stngs pd3">
                        <ul>
                            <li>
                                <button type="submit">Save Setting</button>
                            </li>
                            <li>
                                <button type="submit">Restore Setting</button>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

