# Text level semantics

<br>

### 텍스트 레벨 요소의 특징

<br><br>

1. 요소안의 컨텐츠의 크기 만큼만 영역을 점유
2. 자식으로 Sections, Grouping Contents를 배치할 수 없음

- \<br> : 줄바꿈을 위한 태그
- \<wbr> : 텍스트 박스에서 한 줄로 모두 표시가 안될 때에만 줄바꿈이 일어나게 하는 역할
  - word-break: break-all → 문자 단위로 브레이크됨
  - 한글과 영어의 기본 word-break 속성이 다르다.
    → 한글은 글자마다
- \<a href=”경로”> : 링크를 만들 때 사용
  - <a> 요소는 HTML의 핵심 요소로 하이퍼 텍스트 즉, 링크를 만들 때 사용
  - 기존의 책 : 끈이나 아교로 연결되어있음
  - HTML : Hyper Text, anchor로 연결되어있는 거대한 책
  - **앵커 태그만 예외적으로 sections, grouping content 요소를 자식으로 하는것이 허용**
  ```html
  <a href="https://www.naver.com">click</a>
  <a href="https://www.naver.com" target="_blank">click</a>
  <!-- 새 창으로 열기 -->
  <a href="./index.html">click</a>
  <!-- 자신을 로드함! 다른 파일 경로를 걸어주면 해당 파일을 로드 -->
  <a href="./hello.hwp" download="a.hwp">hwp download click</a>
  <!-- 파일을 download 속성 내의 값을 이름으로 받을 수 있게 된다 -->
  <a href="#three">click</a>
  <!-- 해쉬 링크 : 내부이동에 사용할 때, id에만 사용 가능함 -->
  <a href="./index.html" download>click</a>
  <!-- download 속성 : 클릭하면 다운됨 -->
  <a href="tel:+82027777777">(02)777-7777</a> /
  <!-- FaceTimed으로 연결하는 창이 뜬다! 신기.. -->
  <a href="mailto:hello@gmail.com">hello@gmail.com</a>
  <!-- Mail 앱을 열겠냐고 뜬다 !-->
  ```
  - 스크롤 관련 참고문서 : [https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)
- \<b> : 굵은 글꼴을 표현하고 싶을 때 / 의미x → 쓰지말기 ! 레거시 코드임
- \<strong> : 굵은 글꼴 + 중요도를 더해 강조할 때 사용한다. (시맨틱하다)

- \<i> : italic, 기울임 글꼴
  - 문단에서 주 언어와 다른 언어로 표현된 경우 사용
  - 등장인물의 생각이 표기되어있는 부분 등 어떤 이유로 주위와 구분해야하는 부분을 표현하기 위해 사용
- \<em> : 기울임 글꼴 + 강조의 의미가 있음

- \<dfn> : 현재 문맥에서 정의하고 있느나 용어를 나타냄

  - 목록일 경우 주로 dt-dd 태그를 많이 사용한다.

  ```html
  <dl>
    <dt>WWW</dt>
    <dd>
      <dfn>WWW</dfn>는 인터넷에 연결된 컴퓨터를 통해 사람들이 정보를 공유할 수
      있는 전 세계적인 정보 공간을 말한다. - 위키백과
    </dd>
  </dl>
  ```

- \<abbr> : 준말, 약자를 나타내고 싶을 때 사용

  - 보통 홀로쓰이며, dfn 태그로 감싸주기도 한다
  - title 속성은 ‘WWW’ 위에 커서를 올리면 값을 표시해준다.

  ```html
  <dd>
    <dfn><abbr title="World Wide Web">WWW</abbr></dfn
    >는 인터넷에 연결된 컴퓨터를 통해 사람들이 정보를 공유할 수 있는 전 세계적인
    정보 공간을 말한다. - 위키백과
  </dd>
  ```

- \<sup> : 윗첨자
- \<sub> : 아랫첨자
  - 화학기호나 수학공식 등 첨자 기호를 이용해야 하는 곳에서 사용
  - 단순히 작은 글자를 표현하는 용도로는 사용 x
- \<span> : 별다른 의미 x
  - 줄바꿈 없이 영역을 묶는 용도로 사용
  - 여러 요소를 묶어 컨트롤 하기 위한 영역으로, id나 클래스를 줘서 사용하기도 한다.
  - div와 마찬가지로 최후 수단으로 사용하기 !!

## Embedded content

- \<img> : html 페이지에 이미지를 삽입할 때 사용하는 태그

  - src : img의 필수속성
    - 브라우저에게 이미지 파일의 위치 및 파일명을 알려줌
    - 절대경로 or 상대경로가 와야 함
      - 절대경로 : 내가 있는 위치와 상관없이 불러올 수 있음
      - 상대경로 : 나(지금 열려있는 파일) 기준
      ```html
      <!-- 상대경로 : 현재 폴더에 jeju.jpg -->
      <img src="./jeju.jpg" alt="이미지" />
      <!-- 상대경로 : 상위 폴더 > img폴더 > jeju.jpg -->
      <img src="../img/jeju.jpg" alt="이미지" />
      <!-- 절대경로 -->
      <img src="http://www.paullab.co.kr/images/ceo.png" alt="이미지" />
      ```
  - alt : 이미지가 보이지 않을 때 alt 속성에 적힌 텍스트를 이미지 대신 보여줌
    - 스크린리더와 같은 접근성을 위해 프로그램에 정보제공 용도로 사용됨
    - 따라서 SEO에 도움을 주기도 한다.

  ```html
  <!-- 스크린 리더가 읽지 않는다 -->
  <img src="a.jpg" alt="" />
  <!-- 스크린리더가 a를 읽는다 (파일명) -->
  <img src="a.jpg" />
  <!-- 스크린리더가 '이미지'를 읽는다 -->
  <img src="a.jpg" alt="이미지" />
  ```

  - 반응형 이미지를 위한 srcset : 여러 해상도에 대응하여 브라우저가 최상의 이미지를 로딩하는데 도움을 줌

  - Pixel density : 화소의 갯수가 많을수록 더 높은 해상도의 기기임을 알 수 있다 !
    현재 화면의 화소 밀도를 알고 싶다면 개발자 화면의 콘솔창에서 `window.devicePixelRatio` 명령어를 입력해보면 알 수 있다.
  - w서술자 : 브라우저에게 원본이미지의 넓이를 알려줌. px이 아닌 w로 표기

    - srcset을 사용하지 못하는 브라우저의 경우 이 방법을 사용

    ```html
    <img
      srcset="img/logo_3.png 700w, img/logo_2.png 600w, img/logo_1.png 300w"
      sizes="(min-width: 960px) 250px,
    			 (min-width: 620px) 150px,
    			 300px"
      src="a.png"
      alt="test"
    />
    ```

  - size : 뷰포트의 조건에 따라 이미지가 UI안에서 차지하게 될 사이즈를 브라우저에 알려줌
    - CSS를 통한 이미지의 사이즈를 컨트롤 하는 방법과 충돌 할 수 있음
    - CSS 스타일이 우선임
    - 협업할 때는 사전에 반드시 동료들에게 어떠한 방법으로 반응형 이미지를 처리했는지 공유해야함

- \<picture> : `\<source>` 요소와 `\<img>` 요소를 통해 각기 다른 디스플레이 혹은 디바이스에 따라 조건에 맞는 이미지를 보여주는 요소
  - media : `\<source>` 요소 안의 `media` 속성을 볼 수 있다.

```html
<picture>
  <source srcset="./sample/a.jpg" media="(min-width:960px)" />
  <!-- 960px 이상일 때 로드하겠다!-->
  <source srcset="./sample/b.jpg" media="(min-width:620px)" />
  <!-- 620px 이상일 때 로드하겠다!-->
  <img src="./sample/c.jpg" alt="귀여운 아기 팽귄들" />
</picture>
```

<aside>

💡 **점진적 향상기법** <br>
기본적으로 예전 기술 환경에서 동작할 수 있는 기능을 구현해두고, 최신 기술을 사용할 수 있는 환경에서는 최신 기술을 제공하여 더 나은 사용자 경험을 제공할 수 있는 방법입니다.

</aside>

<aside>
💡  크로스 브라우징  <br>
웹페이지 제작 시 모든 브라우저에서 깨지지 않고 의도한 대로 올바르게 나오게 하는 작업 (호환성)
W3C의 웹 규격에 맞는 코딩을 함으로써 어느 브라우저, 기기에서건 
사이트가 의도된대로 보여지고 작동되게하는 기법
</aside>
<br>

- \<iframe> : 현재 HTML 페이지에서 또 다른 HTML 페이지를 보여주고 싶을 때 사용
  - width 혹은 height 속성으로 크기를 조절합니다.
  - 따로 값을 설정하지 않는다면 height는 150px, width는 300px을 기본값
  ```html
  <iframe
    width="1280"
    height="720"
    src="https://www.youtube.com/embed/orf9ailzXvI"
    title="[코테준비] N시간만에 끝내는 Python 코딩테스트(2018-2021년) 풀영상"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  >
  </iframe>
  ```
  - iframe 해킹공격 - MITM(중간자 공격)
    1. 유저 인증
    2. 유저가 접속 지역 설정
    3. iframe 같은 태그 지원 X

<br><br><br>
💡 **article 판단 기준 참고!**

1. **특정한 기능을 가진 위젯인가, 독립적인 어플리케이션인가**
2. **다른 페이지 중간에 들어가도 어색하지 않은가, 독립적으로 사용 가능한가**
3. **재사용 할 수 있는가 (기능단위로)**
   <br><br>

💡  **텍스트 숨기기**<br>
스크린리더를 위해 section, article 등의 태그에 임의로 제목을 지어주는 경우
나중에 CSS를 통해 이를 숨겨주어야 한다.

- `clip-path: polygon(0 0, 0 0, 0 0);`
  - 클리핑 범위를 모두 0으로 지정해서 요소를 숨긴다.
  - 화면에서 요소를 숨기고 스크린 리더가 해당 요소의 텍스트를 읽을 수 있다.
  - 보조기기가 접근했을 때 화면 스크롤의 움직임을 막을 수 있다.

💡  **저작권 관련 참고**<br>
<br>
**Image**

- 상업적 용도 사용 가능
- 출처 안 밝혀도됨
- 사업적 용도로 사용하여 돈을 벌었는지가 쟁점
- 사용을 하지 않는 것을 권고 <br>

**Font**

- 무료폰트(개인무료폰트, 상업용도무료폰트)
- 대기업 무료폰트 (한글은 제외, 내용 증명 날라온다)
- 폰트는 저작권 확인하고 써야 함!

  <br><br>

<hr>  
<br>
오늘은 Text level semantics / Embedded content 요소들에 대해 배웠다.<br>
그 중 내가 마크업 과제를 진행했을 때 놓쳤던 부분들은 다음과 같다.<br>
<br><br>

1. **\<img> 내에 alt 요소를 빼먹은 것<br>** - 스크린리더 등 프로그램에 정보제공 용도로 사용되는 요소이기 때문에, SEO 에도 영향을 미친다.<br> - 만약 alt 내에 표시할 값이 없더라도 “alt=” 이렇게라도 남겨놓기!<br>
   <br>

2. **\<section> \<article> 내에 \<h>제목을 넣어주기**
   - 임의로 제목을 넣어주는 경우 나중에 CSS를 통해 이를 숨겨주어야 한다.
   - `clip-path: polygon(0 0, 0 0, 0 0);` 사용
     수업 중 강사님께서
     **HTML,CSS 에 대해 이렇게 견고하게 배울 수 있는 건 지금 뿐** 일거라고 말씀을 하셨다.
     강사님의 말씀에 정말 공감한다.
     JS 가 아닌 HTML, CSS 를 정말 이해하며 하나하나 꼼꼼하게 배울 수 있는 기회는
     정말 이번이 마지막 일 것이다.
     남은 시간동안 복습에 충실하면서 마지막으로 배운다 생각하고 열심히 얻어가는, 성장하는 시간으로 채우고싶다.
