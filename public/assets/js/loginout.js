$(document).ready((function(){$("#signup_btn").click((function(){$(this).css({background:"#f2f2f2",color:"#000","border-top":"6px solid #4caf50"}),$("#login_btn").css({background:"#d9d9d9",color:"#666","border-top":"6px solid #d9d9d9"})})),$("#login_btn").click((function(){$("#signup_btn").css({background:"#d9d9d9",color:"#666","border-top":"6px solid #d9d9d9"}),$(this).css({background:"#f2f2f2",color:"#000","border-top":"6px solid #4caf50"})}));function r(){var r=$("#first_name").val();""==r?(c("#first_name_error","Please enter your first name!"),$("#first_name").css("borderColor","red"),$("#first_name_checked").html(""),!1):r.length<3?(c("#first_name_error","name is too short!"),$("#first_name").css("borderColor","red"),$("#first_name_checked").html(""),!1):($("#first_name_error").css("display","none"),$("#first_name").css("borderColor","#fff"),$("#first_name_checked").html("<img src='/images/checked.png'>"),!0)}function s(){var r=$("#signup_email").val();""==r?(c("#signup_email_error","Please enter your email!"),$("#signup_email").css("borderColor","red"),$("#signup_email_checked").html(""),!1):0==/\w+@\w+\.(com|net|edu|org)/.test(r)?(c("#signup_email_error","Your email address is invalid!"),$("#signup_email").css("borderColor","red"),$("#signup_email_checked").html(""),!1):(r,$("#signup_email_error").css("display","none"),$("#signup_email").css("borderColor","#fff"),$("#signup_email_checked").html("<img src='/images/checked.png'>"),!0)}function o(){var r=$("#signup_password").val();""==r?(c("#signup_password_error","Please enter your password!"),$("#signup_password").css("borderColor","red"),$("#signup_password_error").css({whiteSpace:"nowrap",width:""}),$("#signup_password_checked").html(""),!1):r.length<6==1||-1==r.search(/[A-Z]/)||-1==r.search(/[a-z]/)||-1==r.search(/[0-9]/)||-1==r.search(/[ !|@|#|$|%|^|&|*|_ ]/)?(c("#signup_password_error","Requirement: 6 characters, one capital letter, one lowercase letter, atleast one digit and one special character!"),$("#signup_password").css("borderColor","red"),$("#signup_password_error").css({whiteSpace:"normal",width:"340px"}),$("#signup_password_checked").html(""),!1):($("#signup_password_error").css("display","none"),$("#signup_password").css("borderColor","#fff"),$("#signup_password_checked").html("<img src='/images/checked.png'>"),!0)}function e(){var r=$("#signup_password").val(),s=$("#confirm_password").val();""==s?(c("#confirm_password_error","Please re-enter your password!"),$("#confirm_password").css("borderColor","red"),$("#confirm_password_checked").html(""),!1):r!=s?(c("#confirm_password_error","Password does not match!"),$("#confirm_password").css("borderColor","red"),$("#confirm_password_checked").html(""),!1):(r,$("#confirm_password_error").css("display","none"),$("#confirm_password").css("borderColor","#fff"),$("#confirm_password_checked").html("<img src='/images/checked.png'>"),!0)}function i(){var r=$("#login_email").val();""==r?(c("#login_email_error","Please enter your email!"),$("#login_email").css("borderColor","red"),$("#login_email_checked").html(""),!1):0==/\w+@\w+\.(com|net|edu|org)/.test(r)?(c("#login_email_error","Your email address is invalid!"),$("#login_email").css("borderColor","red"),$("#login_email_checked").html(""),!1):($("#login_email_error").css("display","none"),$("#login_email").css("borderColor","#fff"),$("#login_email_checked").html("<img src='/images/checked.png'>"),!0)}function n(){""==$("#login_password").val()?(c("#login_password_error","Please enter your password!"),$("#login_password").css("borderColor","red"),$("#login_password_checked").html(""),!1):($("#login_password_error").css("display","none"),$("#login_password").css("borderColor","#fff"),$("#login_password_checked").html("<img src='/images/checked.png'>"),!0)}function c(r,s){$(r).html("<img src='/images/arrow.png'><span style='color:#fff;'>"+s+"</span> ").css({background:"red",paddingTop:"10px",paddingBottom:"12px",padding:"10px",border:"2px solid #000",display:"block"})}$("#first_name").keyup((function(){r()})),$("#signup_email").keyup((function(){s()})),$("#signup_password").keyup((function(){o()})),$("#confirm_password").keyup((function(){e()})),$("#signup_submit").click((function(){r(),s(),o(),e()})),$("#login_email").keyup((function(){i()})),$("#login_password").keyup((function(){n()})),$("#login_submit").click((function(){n(),i()}))}));