/**
 * myscript.js
 */

function bbsCheck(){ //게시판 유효성 검사
    
    //1)작성자 2글자 이상 입력
    var wname=document.getElementById("wname").value; //작성자 가져오기
    wname=wname.trim(); //좌우 공백제거하기
    if(wname.length<2){
        alert("작성자 2글자 이상 입력해 주세요");
        document.getElementById("wname").focus(); //작성자칸에 커서 생성
        return false; //전송하지 않음
    }//if end
    
	//2)제목 2글자 이상 입력
	var subject=document.getElementById("subject").value;
	subject=subject.trim();                               
	if(subject.length<2){
	    alert("제목 2글자 이상 입력해 주세요");
    	document.getElementById("subject").focus();     
    	return false;                                 
	}//if end
	
	//3)내용 2글자 이상 입력
	var content=document.getElementById("content").value;
	content=content.trim();                               
	if(content.length<2){
	    alert("내용 2글자 이상 입력해 주세요");
    	document.getElementById("content").focus();     
    	return false;                                 
	}//if end
    
    //4)비밀번호는 4글자 이상이면서, 숫자형 기호만 입력
    var passwd=document.getElementById("passwd").value;
    passwd=passwd.trim();
    if(passwd.length<4 || isNaN(passwd)){
        alert("비밀번호 4글자 이상 숫자로 입력해 주세요");
        document.getElementById("passwd").focus();
        return false;
    }//if end
    
    return true; //onsubmit이벤트에서 서버로 전송
    
}//bbsCheck() end



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
	window.open("idCheckForm.jsp", "idwin", "width=400,height=350");	
	
}//idCheck() end



function emailCheck() { //이메일 중복확인

	window.open("emailCheckForm.jsp", "emailwin", "width=400, height=350");	
	
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












