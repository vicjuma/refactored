var acc = document.getElementsByClassName("accordiontab");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {

        this.classList.toggle("active-accordion");
        var panel = this.nextElementSibling;

        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

function tabsign(evt, tabname, tabbtn, tabcontent, local) {
    var tabbutton, tabcontent, i;
    tabcontent = document.getElementsByClassName(tabcontent)
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"
    }

    tabbutton = document.getElementsByClassName(tabbtn)

    for (i = 0; i < tabbutton.length; i++) {
        tabbutton[i].className = tabbutton[i].className.replace(" activeS", "")


    }
    document.getElementById(tabname).style.display = "block"
    evt.currentTarget.className += " activeS"
    saveLocal(local, evt.currentTarget.id)


}


function tab1(evt, tabname, tabbtn, tabcontent, local) {
    var tabbutton, tabcontent, i;
    tabcontent = document.getElementsByClassName(tabcontent)
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"
    }

    tabbutton = document.getElementsByClassName(tabbtn)

    for (i = 0; i < tabbutton.length; i++) {
        tabbutton[i].className = tabbutton[i].className.replace(" activeQ", "")


    }
    document.getElementById(tabname).style.display = "block"
    evt.currentTarget.className += " activeQ"
    saveLocal(local, evt.currentTarget.id)


}

function tab(evt, tabname, tabbtn, tabcontent, local) {
    var tabbutton, tabcontent, i;
    tabcontent = document.getElementsByClassName(tabcontent)
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"
    }

    tabbutton = document.getElementsByClassName(tabbtn)

    for (i = 0; i < tabbutton.length; i++) {
        tabbutton[i].className = tabbutton[i].className.replace(" activeFaq", "")


    }
    document.getElementById(tabname).style.display = "block"
    evt.currentTarget.className += " activeFaq"
    saveLocal(local, evt.currentTarget.id)

}

function getElem(res) {
    var a, b, c, d, e, f;
    var a = document.getElementsByTagName("*");
    for (b = 0; b < a.length; b++) {
        c = a[b];
        d = c.getAttribute(res);
        if (d) {
            e = new XMLHttpRequest();
            e.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        c.innerHTML = this.responseText;
                    }

                    c.removeAttribute(res);
                    getElem(res);
                }
            }
            e.open("GET", d, true);
            e.send();
            return;
        }
    }
}

autoPages("FAQLocal", "how-it-works-btn")
autoPages("QuizLocal", "all-btn")
autoPages("SignLocal", "login-btn")
autoPages("SignLocal", "login-btn")


function saveLocal(name, data) {
    return localStorage.setItem(name, JSON.stringify(data))
}

function getLocal(name) {
    return JSON.parse(localStorage.getItem(name))
}

function autoPages(name, defaultLocal) {
    let Local = getLocal(name);
    if (Local == null) {
        saveLocal(name, defaultLocal)
        Local = defaultLocal;
    }
    console.log(Local);
    document.getElementById(Local).click()

}

function toogleSearch() {
    $(".search").toggleClass("searchtransition")
    $(".search-mobile").toggleClass("searchtransition")
}

window.onscroll = () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        $("header").addClass("headerBg")
    } else {
        $("header").removeClass("headerBg")
    }
}


setInterval(() => {
    if (screen.width > 888) {
        $(".mobile").addClass("hide-m")
    } else {
        $(".mobile").removeClass("hide-m")
    }
}, 10)

function openM() {


    var htm = `

    <div class="js-signin-modal-block" style="z-index:100000; background:red;" >
    <link href="/static/css/login.css" rel="stylesheet">
    <!-- modal -->
    <div class="modal-outer js-modal" style="display: block;">
       <div class="modal-fade js-modal-close"></div>
       <div class="modal-inner">
          <span class="modal-close js-modal-close"></span>
          <div class="window-title">
             Sign In to Your Account
          </div>
          <p class="modal_p">Enter your details below to login</p>
          <form id="login-form" class="modal__form" action="/api/auth/login" method="post">
             <div class="modal__form-row field-loginform-useridentifier required">
                <span class="label_span">Email/Username</span>
                <input type="text" id="loginform-useridentifier" class="form-control" name="username">
                <span class="modal__error-messagesp"></span>
             </div>
             <div class="modal__form-row field-loginform-password required">
                <a class="pull-right font_size_15 f-s-15" href="/forget-password.html" rel="nofollow">Forgot password?</a><span class="label_span">Password</span>
                <input type="password" id="loginform-password" class="form-control" name="password">
                <span class="modal__error-messagelp"></span>
             </div>
             <button id="login_btn" type="submit" class="btn btn-blue">Sign in</button>            
             <div class="info">
                Don’t have an account?
                <a class="js-modal-register-btn" href="javascript:;">Register now</a>            
             </div>
             <div class="indent25px"></div>
             <div class="social_links">
                <span class="social social_google_plus" authclient="google">
                   <div class="customGPlusSignIn"><span class="icon"></span><span class="buttonText">Sign in with Google</span></div>
                </span>
             </div>
             <div class="social_links">
                <span class="social social_facebook" authclient="facebook">
                   <div class="customFbSignIn"><span class="icon"></span><span class="buttonText">Sign in with Facebook</span></div>
                </span>
             </div>
             <script>$('.social_links>.social').on('click',function () {document.location.href = "/social/auth?authclient="+$(this).attr('authclient');});</script>            
          </form>
       </div>
    </div>
    <!-- modal -->
    <div class="modal-outer js-modal-register">
       <div class="modal-fade js-register-close"></div>
       <div class="modal-inner">
          <span class="modal-close js-register-close"></span>
          <div class="window-title">Create Account</div>
          <!-- modal form -->
          <form id="registration-form" class="modal__form" action="/api/users/create" method="POST">
             <!-- row -->
             <div class="switch" style="display: block;">
                <div class="modal__form-row field-registrationform-role required">
                   <span class="label_span">Who are you?</span>
                   <div id="registrationform-role">
                      <label class="register-radio">
                      <input type="radio" class="select_student" name="role" value="student">
                      <span>I am a Student</span>
                      </label>
                      <label class="register-radio">
                      <input type="radio" class="select_tutor" name="role" value="tutor">
                      <span>I am a Tutor</span>
                      </label>
                   </div>
                   <span class="modal__error-message"></span>
                </div>
             </div>
             <!-- row -->
             <div class="modal__form-row js-reg-username field-registrationform-username required" style="margin-top: 0px;">
                <span class="label_span">Username</span>
                <input type="text" id="registrationform-username" class="form-control" name="username">
                <span class="modal__error-messageu"></span>
             </div>
             <!-- row -->
             <div class="modal__form-row js-reg-email field-registrationform-email required">
                <span class="label_span">Email</span>
                <input type="input" id="registrationform-email" class="form-control" name="email">
                <span class="modal__error-messagee"></span>
             </div>
             <button type="submit" id="register_btn" class="btn btn-blue">Register</button>            
             <p class="signin_or">or</p>
             <div class="social_links">
                <span class="social social_google_plus" authclient="google">
                   <div class="customGPlusSignIn"><span class="icon"></span><span class="buttonText">Sign up with Google</span></div>
                </span>
             </div>
             <div class="social_links">
                <span class="social social_facebook" authclient="facebook">
                   <div class="customFbSignIn"><span class="icon"></span><span class="buttonText">Sign up with Facebook</span></div>
                </span>
             </div>
             <script>$('.social_links>.social').on('click',function () {document.location.href = "/social/auth?authclient="+$(this).attr('authclient');});</script>            
          </form>
       </div>
    </div>
    <!-- modal -->
    <div class="modal-outer  js-register-end-modal">
       <div class="modal-fade js-register-end-modal-close"></div>
       <div class="modal-inner">
          <span class="modal-close js-register-end-modal-close"></span>
          <div class="window-title">Registration Success!</div>
          <span class="modal__success-icon">
          <i class="fa fa-check"></i>
          </span>
          <p>You password was sent to your email <strong class="modal__text-email" id="place-email"></strong>!</p>
          <a style="padding:10px 20px" class="btn btn-blue  complete_registration_btn" href="javascript:;">Ok</a>        
       </div>
    </div>
 </div>
    
    `;

       
        $(function() {

            // 
            var jsModalRegister = $('.js-modal-register');
            if (jsModalRegister.hasClass('open-hard-modal')) {
                showModal(jsModalRegister, 0);
            }
            $("#login-form").on("submit", async(e)=>{
                e.preventDefault();
                var isValid = true;
                const username = $("#loginform-useridentifier").val().trim()
                const password = $("#loginform-password").val()
                const response = await fetch(`/api/users/check_user/${username}/${password}`) 
                console.log(username)
               
                if($("#loginform-useridentifier").val().trim() == '')
                {
                    isValid = false;
                    $("#loginform-useridentifier").css({
                        'border' : '1px solid red'
                    })
                    $(".modal__error-messagesp").html("<p style='color:red;' class='f-s-12'>Email field can not be empty</p>")
                }
                else
                {
                    $("#loginform-useridentifier").css({
                        'border' : '1px solid black'
                    })
                    $(".modal__error-messagesp").html("")
                }
               
                if( $("#loginform-password").val().trim() == '')
                {
                    isValid = false;
                    $("#loginform-password").css({
                        'border' : '1px solid red'
                    })
                    $(".modal__error-messagelp").html("<p style='color:red;' class='f-s-12'>Password field can not be empty</p>")

                }
                else
                {
                    $("#loginform-password").css({
                        'border' : '1px solid black'
                    })
                    $(".modal__error-messagelp").html("")

                }
                const responseData = await response.json();
                if(!responseData.Exists)
                {
                    isValid = false;
                    $("#loginform-useridentifier").css({
                        'border' : '1px solid red'
                    })
                    $(".modal__error-messagesp").html("<p style='color:red;' class='f-s-12'>The user is not in our database</p>")
                }
                else
                {
                    $("#loginform-useridentifier").css({
                        'border' : '1px solid black'
                    })
                    $(".modal__error-messagesp").html("")
                }

                if(!isValid)
                {
                    e.preventDefault()
                    return
                }
                $("#login-form")[0].submit()
                console.log(isValid)

            })

            $("#registration-form").on("submit", async(e)=>{
                e.preventDefault()
                const selectedValue = $('input[name="role"]:checked').val();
                const regexUsername = /^[a-zA-Z0-9_]{3,}$/;
                const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const username = $("#registrationform-username").val()
                console.log(username)
                const email = $("#registrationform-email").val()
                isValid = false;
               
                if($("#registrationform-username").val().trim() == '')
                {
                    $("#registrationform-username").css({
                        'border' : '1px solid red'
                    })
                    $(".modal__error-messageu").html("<p style='color:red;' class='f-s-12'>Username field can not be empty</p>")
                }
                else
                {
                    $("#registrationform-username").css({
                        'border' : '1px solid black'
                    })
                    $(".modal__error-messageu").html("")
                }

                if(!regexUsername.test($("#registrationform-username").val().trim()))
                {
                    $("#registrationform-username").css({
                        'border' : '1px solid red'
                    })
                    $(".modal__error-messageu").html("<p style='color:red;' class='f-s-12'>That is not a valid username</p>")
                }
                else
                {
                    $("#registrationform-username").css({
                        'border' : '1px solid black'
                    })
                    $(".modal__error-messageu").html("")
                }
               
                if( $("#registrationform-email").val().trim() == '')
                {
                    $("#registrationform-email").css({
                        'border' : '1px solid red'
                    })
                    $(".modal__error-messagee").html("<p style='color:red;' class='f-s-12'>Email field can not be empty</p>")

                }
                else
                {
                    $("#registrationform-email").css({
                        'border' : '1px solid black'
                    })
                    $(".modal__error-messagee").html("")

                }

                if( !regexEmail.test($("#registrationform-email").val().trim()))
                {
                    $("#registrationform-email").css({
                        'border' : '1px solid red'
                    })
                    $(".modal__error-messagee").html("<p style='color:red;' class='f-s-12'>Your input is not a valid email address</p>")

                }
                else
                {
                    $("#registrationform-email").css({
                        'border' : '1px solid black'
                    })
                    $(".modal__error-messagee").html("")

                }

                try {
                    // Send a POST request to your server to check if the user exists
                    const response = await fetch('/api/users/create', {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ "username": username, "email": email, "role": selectedValue })
                    });

                    if (!response.ok) {
                        $("#registrationform-email").css({
                            'border' : '1px solid red'
                        })
                            $(".modal__error-messagee").html("<p style='color:red;' class='f-s-12'>Check the information</p>")
                        return
                    }
                    else{
                        const responseData = await response.json();
                        if(responseData.detail === "Email Exists"){
                            $("#registrationform-email").css({
                                'border' : '1px solid red'
                            })
                            $(".modal__error-messagee").html("<p style='color:red;' class='f-s-12'>Email exists in our database. Login to continue</p>")
                            return
                        }else if(responseData.detail === "Username Exists"){
                            $("#registrationform-username").css({
                                'border' : '1px solid red'
                            })
                            $(".modal__error-messageu").html("<p style='color:red;' class='f-s-12'>Username already exists</p>")
                            return
                        }
                        isValid = true
                        showModal($('.js-register-end-modal'), 400);
                        closeModal($('.js-modal-register'), 0);
                    }
                    
                } catch (error) {
                    $("#registrationform-email").css({
                        'border' : '1px solid red'
                    })
                        $(".modal__error-messagee").html("<p style='color:red;' class='f-s-12'>An error occured during processing of your information</p>")
                    }
                e.preventDefault()
                
            })
          



            // 
          
                
            $('.complete_registration_btn').on('click', function() {
                 closeModal($('.js-register-end-modal'), 400);
            });
    
            $('.js-register-end-modal-close').on('click', function() {
                closeModal($('.js-register-end-modal'), 400);
            });
    
            $('#registrationform-role .register-radio input').change(function() {
                if($('#registrationform-role .register-radio input:checked').val() == 2 ) { // == Type Tutor
                    $('form#registration-form .social_links, form#registration-form .signin_or').slideUp(200);
                } else {
                    $('form#registration-form .social_links, form#registration-form .signin_or').slideDown(200);
                }
            })
            $('#registration-form').on('beforeSubmit', function() {
                var email = $('#registrationform-email').val();
                var timeZone = jstz.determine().name();
                $.ajax({
                    url: '',
                    dataType: 'json',
                    type: 'POST',
                    data: {
                        role: $('#registrationform-role .register-radio input:checked').val(),
                        username: $('#registrationform-username').val(),
                        email: email,
                        timeZone: timeZone
                    },
                    success: function (result) {
                        if (result.success) {
                            closeModal(jsModalRegister, 0);
                            showModal($('.js-register-end-modal'), 0);
                            $('#place-email').text(email);
                            ga('send', 'event', 'modal_reg', 'modal_register');
                        }
                    }
                });
                return false;
            });
            
            var jsModalTextCut = $('.js-modal-forbidden-copying');
            
            $('#disallow-text-copying-register-form').on('beforeSubmit', function() {
                var email = $('#disallowtextcopyingregistrationform-email').val();
                var timeZone = jstz.determine().name();
                $.ajax({
                    url: '',
                    dataType: 'json',
                    type: 'POST',
                    data: {
                        email: email,
                        timeZone: timeZone
                    },
                    success: function (result) {
                        if (result.success) {
                            closeModal(jsModalTextCut, 0);
                            window.location.href = '/question.html?new_student=1';
                        }
                    }
                });
                return false;
            });
        });
    // Signup modal 

    
    var mosignup = document.querySelector(".mo-signup");
    mosignup.innerHTML = htm;
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    autoPages("SignLocal", "login-btn");

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
        document.body.classList.remove("mo-signup")

    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.classList.remove("mo-signup")
        }
    }
}