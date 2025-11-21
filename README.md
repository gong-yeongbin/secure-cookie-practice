secure cookie?
웹 브라우저가 서버와 통신 할 때 https 프로토콜을 사용하는 암호화된 연결에서만 쿠키를 서버로 전송하도록 설정된 쿠키.

nest.js
@Post('set-cookie')
setCookie(@Res() res: Response) {
    res.cookie('token', accesstoken, {
        httpOnly: true,  // JS 접근 차단
        secure: true,    // HTTPS 환경에서만 전송
        maxAge: 60000,   // 쿠키 유효시간 (밀리초)
        path: '/',
    });
    res.send('쿠키 설정 완료');
}

httpOnly 속성
쿠키를 자바스크립트에서 읽거나 수정하는 것을 막아줌. XSS 등 클라이언트 스크립트 악용 방지
Set-Cookie: token=accesstoken; path=/; HttpOnly

secure 속성
https연결에서만 서버로 전송. 네트워크 패킷 감청, 중간자 공격 방지
Set-Cookie: token=accesstoken; path=/; secure