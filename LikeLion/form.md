## Forms

### \<Form> 기본 속성

- 폼은 정보를 입력하는 영역
  - 로그인 화면에서 아이디와 비밀번호를 입력, 회원 가입할 때 정보를 입력하는 양식 등에 모두 폼을 이용한다.
- 입력된 정보를 제출(submit)하게되면 데이터는 서버로 전송된다.
- 이 데이터는 웹서버가 처리하며, 처리후 로그인 결과 화면 같은 다른 웹페이지를 클라이언트에게 전송한다. - 정보 제출 시

          브라우저에 정보입력 및 제출 → 웹서버 → 앱서버 → DB서버

      - DB서버에서 데이터 처리 시

          DB서버 → 앱서버 → 웹서버 → 브라우저

  <br><br>

  #### 더 보기

  - **Server** : 서빙(24시간 돌아가는 컴퓨터, 대부분 IP 연결)
  - **Web Server** : 정적 파일을 서빙 (PHP와 같은 프로그래밍 언어도 처리하긴 한다)
  - **App Server** : 두뇌 역활
  - **DB** : 데이터 저장(이미지와 같은 경우에는 이미지 경로만 저장한다. 실제 이미지는 보통 스토리지에 저장되어 있다. 이미지를 DB에 저장할 경우)
  - **API Server** : 카페에 카운터 직원입니다. 직접 커피를 내릴 필요는 X.
    - 예를 들어 윈도우 API reference 책을 사용하면 메모장같은 앱을 만드실 수 있는데,
      저장과 같은 기능을 직접 구현할 필요가 없습니다.
    - API는 손님(프로그램)이 주문할 수 있게 메뉴(명령 목록)를 정리하고, 주문(명령)을 받으면 요리사(응용프로그램)와 상호작용하여 요청된 메뉴(명령에 대한 값)를 전달합니다.
      쉽게 말해, API는 프로그램들이 서로 상호작용하는 것을 도와주는 매개체로 볼 수 있습니다.
    - 읽어보기 [https://brunch.co.kr/@operator/65](https://brunch.co.kr/@operator/65)
  - GET : URL로 데이터를 전달할 때 사용(file같은 큰 파일은 GET으로 전송하지 않습니다. id와 pw와 같은 민감 데이터X)
  - POST : 패킷 안에 데이터를 넣어 전달 할 때 사용합니다.(민감 데이터 O, 큰 데이터 O)
    <br><br>

#### 폼 동작 방식

1. 웹 페이지에 있는 form에 데이터를 입력한다.
2. 웹 페이지 내 액션이 일어나게 되면 데이터는 웹 서버로 이동하게 된다.
3. 웹 서버는 데이터를 처리하기 위해 APP을 호출한다. 이때 APP은 물리적으로 별도의 서버일 수 있다.
4. 필요에 따라 APP은 DB로 데이터를 전송한다. 이때 DB는 물리적으로 별도의 서버일 수 있다.
5. DB에서 CRUD 작업이 일어나고 작업 결과를 APP으로, WEB으로 전송한다.
6. 웹 서버는 받은 결과를 Client 브라우저에게 보낸다.
7. 사용자 브라우저는 Response 받은 페이지를 렌더링하여 사용자에게 보여준다.

- CRUD

  | 이름   | 조작 | SQL    | method |
  | ------ | ---- | ------ | ------ |
  | Create | 생성 | INSERT | POST   |
  | Read   | 읽기 | SELECT | GET    |
  | Update | 갱신 | UPDATE | PUT    |
  | Delete | 삭제 | DELETE | DELETE |

  <br><br>

#### 폼(form)의 속성

- action

  - **입력값을 전송할 페이지를 나타낸다.**

- method
  - **폼의 데이터를 전송할 방법을 정의한다.**
  - method의 속성에는 `get`과 `post`가 있다.
    - `get`은 웹 서버에 데이터를 요청할 때 사용하며, 주소에 데이터를 입력하는 방식
      - url로 데이터를 전달할 것이냐? -> get 방식
      - URL로 데이터를 전달할 때 사용(file같은 큰 파일은 GET으로 전송X, id와 pw와 같은 민감 데이터X)
      - 남들에게 공유해야 하는 게시글 같은 경우에는 post로는 쿼리스트링이 남지 않아 get 방식으로 해야한다.
    - `post`는 파일을 올리거나, 보안이 필요한 데이터를 전송할 때 등 사용된다.
      - url에 데이터가 노출되면 안되는 것이냐? -> post 방식 (목적 + 보안)
      - 패킷 안에 데이터를 넣어 전달할 때 사용한다.(민감 데이터 O, 큰 데이터 O)
      - 또 한, 주소에 입력 내용이 나타나지 않도록 한다.
        <br>
  - [form에서 put, delete를 지원하지 않는 이유](https://c3epmos.tistory.com/61)
  - [PUT, PATCH, DELETE 미지원 처리](https://velog.io/@ette9844/REST-PUT-PATCH-DELETE-%EB%AF%B8%EC%A7%80%EC%9B%90-%EC%B2%98%EB%A6%AC)
    <br><br>

## \<input>

- `<input>`은 사용자가 다양하게 폼 태그에 입력할 수 있는 공간을 만들어 주고, 사용자에게 정보를 입력 받는다.

### \<input>의 속성

| 이름        | 설명                                                                                                 |
| ----------- | ---------------------------------------------------------------------------------------------------- |
| type        | 태그 모양을 다양하게 변경할 수 있다. Type에는 text, radio, checkbox, password, button 등을 지정 가능 |
| name        | 태그 이름을 지정                                                                                     |
| readonly    | 태그를 읽기 전용으로 함                                                                              |
| maxlength   | 최대 글자 수를 지정                                                                                  |
| minlength   | 최소 글자 수를 지정                                                                                  |
| required    | 필수 태그로 지정. 입력안하고 submit 버튼을 누르면 에러가 떠 데이터가 전송되지 않음                   |
| autofocus   | 웹 페이지가 로딩되면 이 속성을 지정한 태그로 포커스가 바뀜                                           |
| placeholder | 입력할 값에 대한 힌트를 줌                                                                           |
| pattern     | 정규표현식을 사용하여 특정 범위 내의 유효한 값을 입력 받을 때 사용                                   |

### \<input> 타입

- `text`: 입력한 text를 그대로 표현해주는 input
- `button`: 누를 수 있는 간단한 버튼을 만드는 input
- `password`: 마스크 처리된 text input
- `search`: 검색 창으로 사용할 수 있는 input
- `date`: 날짜를 입력할 때 사용할 수 있는 input
- `time`: 시간을 입력할 때 사용할 수 있는 input
- `range`: 슬라이드 바 형식의 input
- `number`: 수를 선택할 수 있게 하는 input
- `color`: 색을 선택할 수 있는 input
- `radio`: 선택 항목 중 하나만 선택 가능한 input/
- `checkbox`: 선택 항목 중 0개 이상 선택 가능한 input
- `file`: 파일을 업로드할 수 있는 input
- `email`: 이메일 주소를 입력하게 하는 input
- `url`: 웹페이지 주소를 입력하게 하는 input
- `tel`: 전화번호를 입력하게 하는 input
- `hidden`
  - form에 제출되는 data를 javascript로 수정하는 일을 가능하면 하지 않는다. (input으로 해결 가능!)
  - form에 없는 데이터를 추가하고 싶다면 hidden으로 input 하나 더 만들어 value를 javascript로 추가하는 방식을 사용한다.

### \<label>

- 단순히 `<input>` 태그를 설명하는 텍스트를 옆에 붙여 무엇을 입력해야 하는지 설명할 수 있겠지만, 시각 장애인들도 폼을 사용할 수 있도록 시멘틱한 `<label>` 요소를 사용해야 한다.

#### `<label>`의 사용법

- 텍스트의 설명과 폼 입력 모두를 포함하는 방식

  ```html
  <label>
    이름 :
    <input type="text" name="name" />
  </label>
  ```

- 폼 입력에서 분리하여 `for` 속성을 이용해 레이블을 지정하는 방식

```html
<label for="myName">이름 : </label>
<input type="text" name="name" id="myName" />
```

#### `for` 속성

- `for` 속성은 레이블이 속한 `input`과 같은 폼 컨트롤(`input`, `select`, `textarea`와 같은 요소들)을 의미한다.
- 위의 예시처럼 `for` 속성의 값은 해당 레이블이 속할 폼 컨트롤의 `id`값과 일치해야 한다.
- 레이블과 폼 컨트롤이 연결되면 레이블을 선택해도 해당하는 폼 컨트롤이 선택된 것과 같이 동작한다.
  - 이러한 점 때문에 사용자는 클릭할 수 있는 영역이 넓어져 폼을 쉽게 사용할 수 있게 된다.

### \<select>

- \<select> 요소는 드롭다운 리스트 박스를 생성한다. 이때 사용자가 선택해야 하는 리스트 박스 안의 아이템을 만들 때에는 `<option>` 태그를 사용한다.

```html
<form action="">
  <label for="myDevice"
    >현재 사용하고 있는 스마트폰의 제조사를 선택해주세요</label
  >
  <select name="device" id="myDevice">
    <option value="iphone">아이폰</option>
    <option value="galaxy">갤럭시폰</option>
    <option value="ㅜㅜ">LG폰</option>
  </select>
</form>
```

#### \<select>의 속성들

1. multiple="multiple": `multiple` 속성을 사용하면 여러개의 `option` 요소를 선택할 수 있게 된다. 단, 단순 클릭으로는 선택되지 않으며 windows에서는 `crtl`, OSX에서는 `command` 버튼을 누르고 클릭해야 여러 개를 선택할 수 있다.
2. size: `size` 속성을 통해 드롭다운 리스트에서 한 번에 보여줄 수 있는 `option`의 갯수를 조절할 수 있다.

#### \<option>의 속성들

1. value: `<option>` 요소는 `value` 속성을 사용하여 선택값에 따라 서버에 어떠한 값을 전송할지 설정할 수 있다.
2. selected: `selected` 속성은 페이지가 로딩되고 난 뒤 기본으로 선택되는 옵션을 나타내는데 사용한다. `selected` 옵션을 사용하지 않으면 첫번째 `<option>` 이 페이지 로드 시 선택되고, 아무것도 선택하지 않고 데이터를 서버로 전송하면 첫 번째 `<option>` 값의 `value`가 전송된다.

### \<fieldset>

`fieldset` 요소를 사용하면 그 자식 요소로 사용되는 폼 컨트롤들을 그룹화할 수 있다. 특히 폼 내용이 방대하여 섹션별로 나눌 필요성이 있을 경우 유용하게 상요된다. 브라우저가 기본적으로 구현하는 스타일을 보면 그 의미가 더 명확하다.

```html
<!-- 브라우저에서 어떻게 표현되는지 확인해보세요 -->
<form action="">
  <fieldset>
    <legend>개인정보</legend>
    <label for="myName">이름</label>
    <input type="text" name="name" id="myName" />
    <label for="myTel">전화번호</label>
    <input type="tel" name="tel" id="myTel" />
    <label for="myEmail">이메일</label>
    <input type="email" name="email" id="myEmail" />
  </fieldset>
  <fieldset>
    <legend>개인정보 제공 동의</legend>
    <label for="checkAgree">개인정보 제공에 동의하십니까?</label>
    <input type="checkbox" name="agree" id="checkAgree" />
  </fieldset>
</form>
```

### \<legend>

`<legend>` 요소는 `<fieldset>` 태그 바로 뒤에 위치하며 폼 그룹의 목적을 나타내는 제목을 의미한다. 반드시 `<fieldset>`의 첫 번째 자식으로 사용해야 한다.

### \<button>

type은 버튼의 행동 방식을 설정하는 속성이다.

- `submit`: 버튼이 서버로 양식 데이터를 제출한다. 지정하지 않은 경우 기본값이며, 유효하지 않은 값일 때도 사용한다. 때문에 form 양식을 제출하기 위한 용도가 아니라면 반드시 type을 선언해줘야 한다.
- `reset`: `<input type="reset">`처럼, form의 모든 값을 초기화시킨다.
- `button`: 클릭 가능한 버튼이다. 사용자가 기능을 부여하기 전까지는 별 다른 작동을 하지 않는다.

```html
<!-- 네이버 메인 화면의 검색 버튼 html 구조 -->
<button id="search_btn" type="submit" title="검색">
  <span class="blind">검색</span>
  <span class="ico_search_submit"></span>
</button>
```

#### Input vs button 무엇을 써야할까?

`<button>` 요소는 `<input>` 요소보다 스타일을 적용하기 훨씬 수월하다. `<input>`은 닫는 태그가 없기 때문에 `value` 특성에 텍스트 값 밖에 지정할 수 없지만, `<button>`은 내부에 여러가지 자식 컨텐츠를 추가할 수 있고 여기 더해 `::after`와 `::before`와 같은 가상 요소를 사용하는 것도 가능하다. 더 다채롭고 멋진 스타일을 적용해야 한다면 `<button>` 요소를 우선적으로 고려해 보는 것이 좋다.

- 띠리사 버텅 `<button>`쓰는 경우가 많다.

### \<textarea>

여러 줄의 text를 입력받을 수 있다.

#### `<textarea>`의 주요 속성

1. cols: textarea가 보여줄 입력창의 넓이이다. 문자의 평균적인 넓이를 기준으로 한다. 양수 값만 사용할 수 있으며 기본값은 20이다.
2. rows: textarea 입력 창이 기본적으로 보여줄 입력 줄 수를 의미한다.

```html
<textarea
  name=""
  id=""
  cols="40"
  rows="10"
  maxlength="10"
  minlength="5"
></textarea>
```

<br>
### \<datalist>

- `<datalist>`는 `<select>`와 `<input>`을 섞어서 사용할 수 있도록 한다. `<input>`의 `list` 속성을 이용해 `<datalist>` 요소의 `id` 속성과 연결하여 사용한다.
- 사용자에게 기본적으로 선택할 수 있는 옵션을 제공함과 동시에, 만약 옵션에 선택하고 싶은 값이 없는 경우 사용자가 원하는 임의의 값을 입력 받을 수 있도록 편의성을 제공한다.

```js
<label for="solasystem">원하는 행성을 선택하세요 : </label>
<input type="text" id="solasystem" list="planets" name="planets">
<datalist id="planets">
    <option value="수성">수성</option>
    <option value="금성">금성</option>
    <option value="지구">지구</option>
    <option value="화성">화성</option>
</datalist>
```

<br>
## Table data
<br>
### \<table>

- `<table>` 태그는 테이블을 생성할 때 사용. 하나의 테이블을 정의한다.
- `<table>` 태그는 컨테이너 요소로서 그 내부에는 제목(caption)과 행(tr), 열(col) 그리고 셀(td)과 셀의 제목(th) 역할을 하는 여러 요소들이 자식으로 사용된다.

### \<caption>

`<caption>`은 테이블의 제목이나 설명을 의미한다. `<table>` 요소의 첫 번재 자식으로 사용해야 한다.

### \<thead>, \<tbody>, \<tfoot>

`<thead>`, `<tbody>`, `<tfoot>`태그는 각각 머리글, 본문, 바닥 글을 의미한다. 테이블의 내용이 많을 때 `<thead>`와 `<tbody>`는 머리글과 바닥 글, 본문으로 테이블의 구역을 나누는 요소로 사용한다. 이 요소들은 테이블의 레이아웃에 영향을 미치지 않는다. 하지만 CSS를 사용하여 디자인의 스타일을 지정할 수 있다.

### \<tr>, \<th>, \<td>

`<tr>`태그는 테이블의 행을 나눌 때 사용한다. `<td>` 태그는 `<tr>` 태그로 나눈 행에서 셀을 분리할 때 사용한다. HTML 요소의 모든 종류(텍스트, 이미지, 목록, 테이블 등)를 포함할 수 있다. `<th>` 태그는 행, 열의 머리말을 나타내는데 사용한다. 글씨를 굵게, 가운데 정렬하여 보여준다.

### colspan, rowspan 속성

`<td>` 또는 `<th>` 태그 요소에 `colspan` 속성을 사용하면 열간 병합을 할 수 있다. 즉, 열과 열을 병합하기 때문에 가로 방향으로 셀들을 병합할 수 있다. 또한 `rowspan` 속성을 사용하면 행간 병합이 가능하다. 즉, 행과 행을 병합하기 때문에 세로 방향으로 셀들을 병합할 수 있다. 이때 병합하고 싶은 셀의 개수를 지정해 준다.

```html
<table>
  <caption>
    이달의 책 판매량
  </caption>
  <tr>
    <th>구분</th>
    <th colspan="2">이름</th>
    <!-- <th>판매량</th> -->
  </tr>
  <tr>
    <td>1</td>
    <td>해리포터</td>
    <td rowspan="2">100</td>
  </tr>
  <tr>
    <td>1</td>
    <td>해리포터2</td>
    <!-- <td>100</td> -->
  </tr>
</table>
```

### \<colgroup>, \<col>

`<colgroup>`과 그 자식 요소로 쓰이는 `<col>` 요소를 통해 한 열에 공통적인 스타일을 주는 것도 가능하다. `<colgroup>` 안의 `<col>` 요소는 각각 테이블의 '열'을 의미한다.

### scope

`<th>` 요소에 `scope` 속성을 사용해 `<td>`와의 연결 관계를 설정할 수 있다.

- row: 행 방향 진행이다. 내용의 흐름이 왼쪽에서 오른쪽으로 연결되어 있음을 알 수 있다.
- col: 열 방향 진행이다. 내용의 흐름이 위에서 아래로 연결되어 있음을 알 수 있다.

```html
<!-- 직접 구현하여 결과를 확인해 보세요 -->
<table>
  <caption>
    요일별 급식 만족도
  </caption>
  <tbody>
    <tr>
      <th></th>
      <th scope="col">월요일</th>
      <th scope="col">화요일</th>
      <th scope="col">수요일</th>
      <th scope="col">목요일</th>
      <th scope="col">금요일</th>
      <th scope="col">토요일</th>
    </tr>
    <tr>
      <th scope="row">메뉴</th>
      <td>돈까스</td>
      <td>짜장면</td>
      <td>볶음밥</td>
      <td>해물라면</td>
      <td>잔치국수</td>
      <td>떡볶이</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">만족도</th>
      <td>3/5</td>
      <td>4/5</td>
      <td>1/5</td>
      <td>5/5</td>
      <td>2/5</td>
      <td>3/5</td>
    </tr>
  </tfoot>
</table>
```
