# CSS 적용하기

<br>

1. **인라인 방식**

```html
<body style="font-size: 14px;"></body>
```

2. **내부 스타일 시트**

```html
<head>
  <style>
    body {
      font-size: 14px;
    }
  </style>
</head>
```

3. **외부 스타일 시트**

```html
<head>
  <link rel="stylesheet" href="css/foo.css" />
</head>
```

4. **다중 스타일 시트**

```html
@import "foo.css";
```

-> CSS 파일 안에 CSS 포함하기

- 위 코드처럼 @가 붙는 문법을 at-rule이라고 한다.
- import 외에 다양한 엣룰이 있다.
  - @charset : 스타일시트에서 사용하는 문자 인코딩을 지정합니다. 문서에서 가장 먼저 선언합니다.
  - @import : 다른 스타일 시트에서 스타일 규칙을 가져옵니다. @charset 바로 다음에 선언되어야 합니다.
  - @font-face : 디바이스에 없는 폰트를 다운받아 적용할 때 사용합니다.
  - @keyframes : 애니메이션을 만들 때 사용합니다.
  - @media : 사용자 디바이스에 따른 스타일을 분기 처리하고자 할 때 사용합니다.
  - @supports : 특정 CSS 속성을 브라우저가 지원하는지 확인하고 스타일을 선언하고자 할 때 사용합니다.

<br><br><br>

# RESET CSS

- 브라우저 제작사들마다 각각 브라우저가 제공하는 요소의 기본 스타일이 모두 다르다.
- 디자이너에게 받은 웹디자인을 구현하기 위해 각각의 브라우저에 따라 **스타일을 다르게 부여**해야한다는 문제가 발생
- 비효율적인 이 문제를 해결하기 위해 다양한 해결방법이 나타나게됨

1. **에릭마이어의 reset CSS**

[https://meyerweb.com/eric/tools/css/reset/](https://meyerweb.com/eric/tools/css/reset/)

- 오래전부터 널리 사용된 방법
- 브라우저의 모든 기본스타일 속성들을 완전히 초기화
- 슬프게도 2011년 이후로 업데이트 중단

2. **normalize.css**

[https://necolas.github.io/normalize.css/](https://necolas.github.io/normalize.css/)

- 현재 가장 많이 사용되는 reset css이다.
- 브라우저의 기본적인 스타일 속성들을 모두 제거하지 않음
- 대신, 브라우저 스타일을 기반으로 하여 추가적인 스타일을 덧붙여 어떤 브라우저에서든 비슷하게 보이도록 통일함 (완전히 똑같아지지는 않는다)
- reset.css 는 기존 스타일을 모두 제거하는 적극적인 방법이라면,
  normalize는 브라우저 고유의 스타일을 존중하면서 거기에 스타일을 첨가하는 부드러운 방법이다.

3. **CSS Remedy**

[https://github.com/jensimmons/cssremedy](https://github.com/jensimmons/cssremedy)

- CSS를 제작하는 사람들의 입장이라면, 어떤식으로 브라우저에게 기본스타일을 주게될까? 라는 생각에서 출발한 차세대 CSS reset 프로젝트이다.
- 아직 프로젝트가 진행중이며, 완전한 메이저 버전이 언제 나올지 아직 모른다.

<br><br><br>

# CSS Selector

### 1. 전체 선택자 (Universal Selector)

- 모든 HTML 요소에 접근 가능
- 문서 전체에 공통적으로 기본값 지정 가능

```css
* {
  margin: 0 auto;
}
```

<br>

### 2. 타입 선택자 (Type Selector)

- 태그 이름을 사용
- 해당 태그와 같은 모든 태그에 속성 적용

```css
/* 선택자 */
body {
  background-color: red;
  /* 속성 */ /* 값 */
}
```

<br>

### 3. 아이디 선택자 (ID Selector)

- 같은 페이지 내 id 값은 유일해야한다
- id 이름은 알파벳 or 언더바 or 하이픈으로 시작해야한다
- 최대한 직관적이고 간단명료하게 짓는다

```html
<head>
  <meta charset="utf-8" />
  <title>id</title>
  <style>
    #blue {
      color: blue;
    }
  </style>
</head>
<body>
  <p>이 문단은 평범한 p태그를 사용하였습니다.</p>
  <p id="blue">이 문단은 blue id를 부여하였습니다.</p>
</body>
```

<br>

### 4. 클래스 선택자 (Class Selector)

- id 속성과 마찬가지로 해당 요소를 식별할 때 사용
- class 속성은 id와 다르게, 한 페이지에 **여러 개가 존재**할 수 있음

```html
<head>
  <meta charset="utf-8" />
  <title>id</title>
  <style type="text/css">
    .blue {
      color: blue;
    }
    .bic {
      font-size: 20px;
    }
    .upper {
      text-transform: uppercase;
    } /*text-transform : 컨텐츠를 대문자로 만듭니다.*/
  </style>
</head>
<body>
  <p>이 문단은 평범한 p태그를 사용하였습니다.</p>
  <p class="blue">이 문단은 blue class를 부여하였습니다.</p>
  <p class="blue bic">이 문단은 blue, bic class를 부여하였습니다.</p>
  <p class="blue upper">이 문단은 blue, upper class를 부여하였습니다.</p>
</body>
```

<br>

# 선택자 우선순위

CSS에는 적용 우선순위가 있다.

선택자 역시 우선순위가 존재한다.

### 1. 후자 우선의 원칙

- 동일한 선택자가 연속으로 사용되었을 경우 후자가 우선
- 아래 코드의 경우, 동일한 선택자가 연속으로 사용되었다.
  이 경우 두번째 타입선택자의 color 값으로 덮어씌워진다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <style>
      p {
        color: red;
        font-size: 20px;
      }

      p {
        color: green;
      }
    </style>
  </head>

  <body>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, dolor
      voluptatem inventore deleniti eligendi omnis corporis iste adipisci
      consectetur ad officia quasi, doloribus fuga? Expedita error ad sunt
      reiciendis sapiente.
    </p>
  </body>
</html>
```

### 2. 구체성의 원칙

- Specificity는 특이성, 명시도 혹은 구체성으로 표기하기도 한다.
- 한 선택자가 다른 선택자보다 더 구체적으로 작성되었다면,
  구체적인 선택자가 우선한다.
- 아래 코드에서 선택자는 둘다 p태그를 가리킨다
  하지만 첫번째 선택자가 두번째보다 더 구체적이기 때문에 첫번째 스타일이 적용된다.

```html
<head>
  <style>
    p.color-red {
      color: red;
      font-size: 20px;
    }

    p {
      color: green;
    }
  </style>
</head>

<body>
  <p class="color-red">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolor
    repudiandae tempora consequatur maxime animi ad! Quibusdam beatae laudantium
    itaque eos, cupiditate vero reiciendis assumenda natus reprehenderit eveniet
    at enim?
  </p>
</body>
```

<aside>
💡 가중치

구체성의 원칙은 가중치를 기준으로 작동한다.
어떤 선택자가 더 구체적인가 ? 를 판단 할때 가중치를 기준으로 판단한다.

id, class 가 동시에 있을 경우에는
id > class > 타입 순으로 style이 적용된다.

</aside>

<aside>
💡 우선 순위 계산

구체성의 원칙은 위와같이 가중치를 기준으로 작동한다.
선택자들은 각각 해당하는 가중치 점수가 있다.
이 점수를 이용해 어떤 선택자의 우선순위가 높은지 계산할 수 있다.

[가중치 점수표 (1)](https://www.notion.so/d013188760f7416a90d0de66aa257edf)

- inline-style : 요소의 안에 속성으로 선언되는 스타일입니다. 1000 점의 가중치를 가집니다.
- id 선택자 : 100점의 가중치를 가집니다.
- class, 가상클래스, 속성 선택자 : 10점의 가중치를 가집니다.
- 타입, 가상요소 선택자 : 1점의 가중치를 가집니다.
- 전체선택자(Universal Selector) 는 무시됩니다.
</aside>

### 3. 중요성의 원칙

- 다른 속성보다 더 더 우선적으로 적용되어야할 중요한 스타일 속성이 있다면
  `!important` 값을 추가한다.
- 절대적인 우선순위, 가중치 점수를 무시하고 무조건적인 우선순위를 가진다.

```css
button {
  background-color: lightblue !important;
}
body button {
  background-color: green;
}
```

<br><br>

# Box Model 박스모델

### 1. 박스의 구성

HTML 요소들은 모두 박스를 가지고 있다.

총 4가지의 박스로 이루어져 있으며 이를 박스 모델이라고 한다.

- **콘텐츠(content) 박스**: 요소의 콘텐츠가 표시되는 영역으로 넓이는 `[width](https://developer.mozilla.org/ko/docs/Web/CSS/width)` 그리고 높이는 `[height](https://developer.mozilla.org/ko/docs/Web/CSS/height)`와 같은 속성을 사용해서 설정할 수 있습니다.
- **패딩(padding) 박스**: 패딩은 콘텐츠와 테두리 사이의 공간입니다. 패딩의 크기는 `[padding](https://developer.mozilla.org/ko/docs/Web/CSS/padding)`과 관련 속성을 사용해 제어할 수 있습니다.
- **보더(border) 박스**: 보더 박스는 콘텐츠와 패딩을 둘러싸는 테두리입니다. 보더의 크기와 스타일은 `[border](https://developer.mozilla.org/ko/docs/Web/CSS/border)`와 관련 속성을 사용하여 제어할 수 있습니다.
- **마진(margin) 박스**: 마진은 보더 바깥 쪽 영역으로 요소와 요소 사이의 공백 역할을 합니다. 마진 박스의 크기는 `[margin](https://developer.mozilla.org/ko/docs/Web/CSS/margin)`과 관련 속성을 사용하여 제어될 수 있습니다.

<br>

### 2. 박스의 유형

**2-1. 블록박스**

- 사용 가능한 공간을 양 옆으로 100& 사용하며,
  **사용하지 못하는 공간은 마진 영역**으로 채운다.
- `width` 와 `height` 속성으로 스타일을 컨트롤 할 수 있다.
- 패딩, 마진, 보더 속성을 사용하여 스타일 컨트롤 할 수 있으며,
  해당 속성들이 다른 요소들을 밀어낸다.

**2-2. 인라인 박스**

- 컨텐츠 박스만큼의 크기만 가진다. 때문에 새로운 줄로 행을 바꾸지 않는다.
- `width` 와 `height` 속성을 사용할 수 없다.
- 패딩, 보더 속성을 사용할 수 있지만, 마진은 좌우만 조절할 수 있다.
  상하 값들은 다른 요소들을 밀어내지 않는다.

**2-3. 박스 유형을 결정하는 속성 : display**

- `display` 속성은 박스의 성질을 지정하여
  다른 박스들과 어떤 방식으로 위치가 배치될지 결정한다
  **2.3.1 외부 디스플레이 타입**
  - inline : 인라인 박스로 유형을 결정한다.
  ```css
  div {
    display: inline;
  }
  ```
  - block : 블록 박스로 유형을 결정한다.
  ```css
  div {
    display: block;
  }
  ```
  - inline-block
    - inline 처럼 한 줄에 여러 요소가 존재할 수 있다.
    - block 처럼 width,height,margin,padding 등 모든 값을 지정할 수 있다.
    - inline의 속성의 특징과 block 속성의 특징이 함께 존재하는 박스
    ```css
    div {
      display: inline-block;
    }
    ```
  **2.3.2 내부 디스플레이 타입**
  - flex : 내부 자식 요소들의 위치를 부모 컨테이너 요소 안에서 x축 or y축의 단방향으로 설정하는 속성
  - grid : 내부 자식 요소들의 위치를 부모 컨테이너 요소 안에서 x축과 y축을 모두 이용해 배치하는 속성

<br>

### 3. 표준 CSS 박스모델 (Standard CSS Box Model)

- 요소의 전체적인 크기는 컨텐츠 박스 + 보더박스 + 패딩박스의 너비와 높이 값을 모두 더해 정해진다.

**3.1 width, height**

- 표준 CSS 박스 모델에서는 블록박스인 경우 width, height 값을 통해 content box의 크기를 제어

**3.2 border**

- 보더 박스 영역의 스타일을 정의
  - border-width - 선의 두께와 관련된 속성
  - border-style - 선의 모양과 관련된 속성
  - border-color - 선의 색깔과 관련된 속성

**3.2.1 radius**

- radius 속성은 테두리의 꼭짓점을 둥글게 만든다.
- 또한 50% 값을 주게되면 손쉽게 원을 그릴 수 있다.

```css
h1 {
  border: 3px solid #228b22;
  border-radius: 30px;
}
```

**3.3 padding, margin**

**3.3.1 padding**

padding은 박스 영역의 스타일을 정의한다

```css
h1 {
  padding: 10px 15px 20px 25px; /* 앞에서부터 top, right, bottom, left 입니다. */

  padding: 10px; /* 패딩박스의 top, right, bottom, left가 모두 동일하게 10px일 경우 */
  padding: 10px 20px; /* 패딩박스의 top,bottom이 10px, left, right가 20px일 경우 */
  padding: 10px 20px 15px; /* top이 10px, bottom 15px, left와 right가 20px일 경우 */
}
```

**3.3.2 margin**

margint 박스 영역의 스타일을 정의한다.

(박스 외부공간에만 영향을 미침)

```css
h1 {
  margin: 10px 15px 20px 25px; /* 앞에서부터 top, right, bottom, left 입니다. */

  margin: 10px; /* 마진박스의 top, right, bottom, left가 모두 동일하게 10px일 경우 */
  margin: 10px 20px; /* 마진박스의 top,bottom이 10px, left, right가 20px일 경우 */
  margin: 10px 20px 15px; /* top이 10px, bottom 15px, left와 right가 20px일 경우 */

  /* 
		마진 속성에는 auto값이 존재합니다. 
    요소의 크기를 제외한 나머지 마진영역을 반으로 나눠 left와 right에 골고루 분배합니다. 
		덕분에 auto 를 이용하면 손쉽게 수평 정렬을 만들 수 있지만 아쉽게도 
		top, bottom 에는 auto 값을 적용할 수 없습니다.
		*/
  margin: 10px auto;
}
```
