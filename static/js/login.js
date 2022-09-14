
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);

function pwCheck(){
    var passwd=document.getElementById("passwd").value;
    passwd=passwd.trim();
    if(passwd.length<4 || isNaN(passwd)){
        alert("비밀번호 4글자 이상 숫자로 입력해 주세요");
        document.getElementById("passwd").focus();
        return false;
    }//if end
    
    var message="진행된 내용은 복구되지 않습니다\n계속 진행할까요?";
    if(confirm(message)){ //확인true, 취소false
        return true;  //서버로 전송
    }else{
        return false;
    }//if end    
}//pwCheck() end


function loginCheck(){	//로그인 유효성검사(아이디, 비번)
    //1)아이디 5~10글자이내인지 검사
    var id=document.getElementById("id").value;
	id=id.trim();
	if(!(id.length>=5 && id.length<=10)){
		alert("아아디 5~10글자이내 입력해 주세요");
		document.getElementById("id").focus();
		return false;		
	}//if end
    
    //2)비밀번호 5~10글자이내인지 검사
    var passwd=document.getElementById("passwd").value;
	passwd=passwd.trim();
	if(!(passwd.length>=4 && passwd.length<=10)){
		alert("비밀번호 4~10글자이내 입력해 주세요");
		document.getElementById("passwd").focus();
		return false;		
	}//if end    
    
    return true;
}//loginCheck() end
