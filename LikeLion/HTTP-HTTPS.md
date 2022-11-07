# HTTP / HTTPS

## 개요

웹브라우저에서 주소 입력란에 URL을 입력했을 때, 어떻게 해서 웹페이지가 보이는걸까?

- 브라우저 주소 입력란에 URL을 입력하면 브라우저는 서버에게 해당 주소에 대한 리소스를 요청(Request)하고 웹 서버는 응답(Response)을 통해 리소스를 전송한다.

- 백엔드 개발자와 원활한 커뮤니케이션을 위해, API를 다루기 위해서 기초적인 HTTP를 알아야한다!
  <br><br>

## HTTP란?

- HyperText Transfer Protocol
  : 하이퍼미디어 문서를 전송하기 위한 프로토콜

- Protocol
  - 데이터가 전송되는 방식을 결정하는 규약
  - 송/수신자 사이의 합의를 통해 '데이터 포맷은 이렇게, 오류제어는 이렇게 해서 데이터를 주고받자!'와 같이 서로 통신할 때 이해할 수 있는 규칙을 만든 것을 의미

### TCP / IP

- TCP : 트랜스포트 계층 (전송계층)
- IP : 네트워크 계층 (인터넷계층)
- 인터넷에 관련한 다양한 프로토콜의 집합을 통칭
- HTTP는 TCP / IP 중 하나이다.

<br><br>

## URL

URI, URL, RUN? 대체 무슨 차이일까?
<br>

### URI

- Uniform Resource Identifier: 통합자원식별자
- URI는 URL과 URN으로 분류될 수 있다.

- Uniform: 리소스 식별하는 통일된 방식
- Resource: 자원, URI로 식별할 수 있는 모든 것 (제한없음)
- Identifier: 다른 항목과 구분하는데 필요한 정보

### URL

- locator: 리소스가 있는 위치를 지정

### URN

- name: 리소스에 이름을 부여

```
💡 위치(주소)는 변할 수 있지만, 이름은 변하지 않는다!
ex)  Name : 위니브 / Locator : 제주 제주시 첨단로 330
택시 기사님 위니브로 가주세요! 보다 제주 제주시 첨단로 330로 가주세요!
```

💡 URL

- 웹사이트를 표시하기 위해 입력하는 주소
- 자원이 어디있는지를 알려주기 위한 규약
- URL은 웹사이트 주소 뿐 아니라, 컴퓨터 네트워크상의 자원을 모두 나타낼 수 있다.
  <br><br><br><br>

# HTTP 메시지 구조

### Request

```
GET /index.html HTTP/1.1
user-agent: MSIE 6.0; Windows NT 5.0
accept: text/html; */*
cookie: name = value
referer: http://www.naver.com
host: www.paullab.co.kr
```

- GET : 메소드
- /index.html : URI
- HTTP/1.1 : 프로토콜 버전

1. 데이터 처리방식 / 기본페이지 / 프로토콜 버전
2. user-agent : 사용자 웹 브라우저 종류 및 버전 정보
3. accept: 웹서버로부터 수신되는 데이터 중 웹브라우저가 처리할 수 있는 데이터 타입
4. cookie : HTTP 프로토콜 자체가 세션을 유지하지 않는 State-less(접속상태를 유지하지 않는) 방식이기 때문에 로그인 인증을 위한 사용자 정보를 기억하려고 만든 인위적인 값. 즉 사용자가 정상적인 로그인 인증 정보를 가지고 있다는 것을 판단하고자 사용.
5. refer : 현재 페이지 접속 전에 어느 사이트를 경유했는지 알려주는 도메인 정보
6. host : 사용자가 요청한 도메인 정보
   <br><br>

### HTTP 요청 메서드

- GET : 리소스 취득
- POST : 리소스 생성
- PUT : 리소스의 모든 것을 업데이트
- DELETE : 리소스 삭제
- PATCH : 리소스의 일부를 업데이트
  <br><br>

### GET : 서버 ! 네가 가진 유저 정보좀 줘!

```
GET /user HTTP/1.1
Host 146.56.183.55:5050/
```

```js
fetch('http://146.56.183.55:5050/user', {
  method: 'GET',
})
  .then((response) => response.json())
  .then((data) => {
    console.log('성공:', data);
  })
  .catch((error) => {
    console.error('실패:', error);
  });
```

<br>

### POST : 서버 ! 새로운 유저 정보를 줄게!

```
POST /user HTTP/1.1
Host 146.56.183.55:5050/
Content-Length: 1560
```

```js
const data = {
  user: {
    email: 'post@post.com',
    password: 'post1234',
    username: '콘푸라이트',
    accountname: 'posttest',
    intro: '시리얼은 포스트 콘푸라이트',
    img: null,
  },
};

fetch('http://146.56.183.55:5050/user', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('성공:', data);
  })
  .catch((error) => {
    console.error('실패:', error);
  });
```

<br>

### PUT : 서버 ! 서버야 유저 정보를 덮어씌워 줘!

```
PUT /user HTTP/1.1
Host 146.56.183.55:5050/
Content-Type: application/json
Content-Length: 1560
Authorization: 토큰값
```

```js
const data = {
  user: {
    username: '콘푸로스트',
    accountname: 'posttest',
    intro: '시리얼은 역시 호랑이기운이 켈로그 콘푸로스트!',
    img: null,
  },
};

fetch('http://146.56.183.55:5050/user', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${토큰값}`,
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('성공:', data);
  })
  .catch((error) => {
    console.error('실패:', error);
  });
```

<br>

### DELETE : 서버야 있던 유저 정보를 삭제해줘!

```
DELETE /user HTTP/1.1
Host 146.56.183.55:5050/
```

### Response

```
HTTP/1.1 200 OK
Server: NCSA/1.4.2
Content-type: text/html
Content-length: 107

<html>
...
</html>
```

- server ~ content-length: 리스폰스 헤더 필드
- `<html>` ~ `</html>`: 바디
- MIME 타입 정보 / 사용자가 요청한 웹페이지 정보가 포함된다
  <br><br>

## 응답의 결과를 알려주는 상태코드

<br>

### 200

- 200 : 서버가 요청을 제대로 처리
- 201 : 성공적으로 요청되었으며 서버가 새 리소스를 작성
- 202 : 서버가 요청을 접수했지만 아직 처리하지않음

### 300

- 301 : 요청한 페이지를 새 위치로 영구적으로 이동

### 400

- 400 : Bad Request 잘못된 요청
- 401 : Unathorized. 권한 없이 요청. Authorization 헤더가 잘못된 경우
- 403 : Forbidden. 서버가 요청을 거부
- 404 : 서버가 요청한 페이지를 찾을 수 없음

### 500

서버쪽에서 오류가 난 경우 ! -> 백엔드 개발자에게 물어보기

- 500 : 서버에 오류가 발생하여 요청을 수행할 수 없음
- 503 : 서버가 오버로드되었거나 유지관리를 위해 다운되었기때문에 서버 사용 불가

<br><br><br>

## HTTPS란?

= HTTP + 암호화 + 인증 + 안정성보호

- 암호화로 도청을 피할 수 있다.
- 통신 상대를 확인한다
  - HTTP는 통신상대를 확인하지 않기 때문에 위장할 수 있음
  - 증명서는 기관에 의해 발행되기에 위조가 상당히 어려움
- 변조를 방지할 수 있음
  - HTTP는 변조가 되어도 알아차리지 못한다.
  - 통신 중, 변조하는 공격을 중간자 공격이라고 부른다.(Man-in-the-Middle)

### 그렇다면 다 HTTPS를 사용해야할까?

- 암호화통신은 CPU, 메모리 등 리소스가 많이 필요함
- 사이트가 민감한 정보를 포함하지 않은 통신에서는 HTTP를 사용하고,
  개인정보 등 민감한 정보를 다룰 때 암호화 통신을 사용함
- 또한 꼭 숨겨야할 정보(로그인, 카드 등의 개인정보)만 암호화하여 리소스를 절약할 수 있음
  > 리소스, 증명서 가격, 유지비용 등을 고려하여 HTTPS사용을 결정하는 것이 좋음!

참고) 패킷을 네트워크에서 보는 방법<br>
(https://velog.io/@joosing/암호화된-HTTPS-패킷을-네트워크에서-보는-방법)
