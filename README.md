# Secure Cookie

웹 브라우저가 서버와 통신할 때 **HTTPS 프로토콜**을 사용하는 암호화된 연결에서만 쿠키를 서버로 전송하도록 설정된 쿠키입니다.  
이 설정은 네트워크 패킷 감청, 중간자 공격(Man-in-the-Middle Attack) 등을 방지합니다.

---

## Nest.js Secure Cookie 적용 예시

```
setCookie(@Res() res: Response) {
    res.cookie(‘token’, accesstoken,{ httpOnly: true, secure: true, maxAge: 60000, path: ‘/’ });
    res.send(‘쿠키 설정 완료’);
}
```

---

## 쿠키 속성 설명

### HttpOnly
- 쿠키를 자바스크립트에서 읽거나 수정하는 것을 막아줍니다.
- XSS 등 클라이언트 스크립트 악용을 방지합니다.
- 예시:

```Set-Cookie: token=accesstoken; path=/; HttpOnly```

### Secure
- HTTPS 연결에서만 서버로 전송됩니다.
- 네트워크 패킷 감청, 중간자 공격 방지
- 예시:
  
```Set-Cookie: token=accesstoken; path=/; Secure```
