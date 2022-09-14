(function ($) {
    'use strict';
    /*==================================================================
        [ Daterangepicker ]*/
    try {
        $('.js-datepicker').daterangepicker({
            "singleDatePicker": true,
            "showDropdowns": true,
            "autoUpdateInput": false,
            locale: {
                format: 'DD/MM/YYYY'
            },
        });
    
        var myCalendar = $('.js-datepicker');
        var isClick = 0;
    
        $(window).on('click',function(){
            isClick = 0;
        });
    
        $(myCalendar).on('apply.daterangepicker',function(ev, picker){
            isClick = 0;
            $(this).val(picker.startDate.format('DD/MM/YYYY'));
    
        });
    
        $('.js-btn-calendar').on('click',function(e){
            e.stopPropagation();
    
            if(isClick === 1) isClick = 0;
            else if(isClick === 0) isClick = 1;
    
            if (isClick === 1) {
                myCalendar.focus();
            }
        });
    
        $(myCalendar).on('click',function(e){
            e.stopPropagation();
            isClick = 1;
        });
    
        $('.daterangepicker').on('click',function(e){
            e.stopPropagation();
        });
    
    
    } catch(er) {console.log(er);}
    /*[ Select 2 Config ]
        ===========================================================*/
    
    try {
        var selectSimple = $('.js-select-simple');
    
        selectSimple.each(function () {
            var that = $(this);
            var selectBox = that.find('select');
            var selectDropdown = that.find('.select-dropdown');
            selectBox.select2({
                dropdownParent: selectDropdown
            });
        });
    
    } catch (err) {
        console.log(err);
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
	if(!(passwd.length>=5 && passwd.length<=10)){
		alert("비밀번호 5~10글자이내 입력해 주세요");
		document.getElementById("passwd").focus();
		return false;		
	}//if end    
    
    return true;
}//loginCheck() end


function idCheck(){ //아이디 중복확인
	
	//bootstrap 모달창
	//->부모창과 자식창이 한몸으로 구성되어 있음
	//->참조 https://www.w3schools.com/bootstrap/bootstrap_modal.asp
	
	//새창만들기
	//->부모창과 자식창이 별개로 구성되어 있음
	//->모바일에 기반을 둔 frontend단에서는 사용하지 말것!!
	//->참조 https://www.w3schools.com/jsref/met_win_open.asp
	//window.open("파일명", "새창이름", "다양한 옵션들")
	window.open("idCheckForm.do", "idwin", "width=400,height=350");	
	
}//idCheck() end



function emailCheck() { //이메일 중복확인

	window.open("emailCheckForm.do", "emailwin", "width=400, height=350");	
	
}//idCheck() end


function memberCheck(){ //회원가입 유효성 검사
	//1)아이디 5~10글자 인지?
	
    //2)비밀번호 5~10글자 인지?
	
    //3)비밀번호와 비밀번호확인이 서로 일치하는지?

    //4)이름 두글자 이상 인지?

    //5)이메일 5글자 인지?

    //6)직업을 선택했는지?
	var job=document.getElementById("job").value;
	if(job=="0"){
	    alert("직업 선택해 주세요");
	    return false;
	}//if end

	return true;//서버로 전송
	
}//memberCheck() end
