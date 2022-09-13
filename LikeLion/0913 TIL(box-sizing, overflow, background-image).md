## 마진 겹침 현상

<hr>
- 요소와 요소의 사이에 마진 탑(margin-top) 혹은 마진 바텀(margin-bottom)의 공간이 있을 경우 더 높은 값의 마진 값이 적용되는 현상<br>
- 부모 요소와 자식 요소가 존재할 때, 자식 요소의 마진 탑 혹은 마진 바텀 값이 부모의 높이에 영향을 미치지 않는 현상
<br><br>
💡 해결방법

1. 부모 요소에 overflow 속성 값을 적용해줍니다.
2. 부모 요소에 display: inline-block 값을 적용해줍니다.
3. 부모 요소에 border 값을 적용해줍니다.
4. 부모 요소에 display 속성으로 flow-root을 사용합니다. (IE 지원 불가)

➡️  이러한 방법들을 사용하면 Block-Formatting Context를 생성하게된다.
<br><br><br>

## 대체 CSS 박스모델

<hr>

- 표준 CSS 박스모델에서 요소의 전체적인 크기는 컨텐츠 박스 + 보더 박스 + 패딩 박스의 너비와 높이 값을 모두 더해 정해진다.
- 그러나 마진/패딩값 등이 변할때마다 박스의 크기가 가변적이기 때문에 대체 박스 모델이 도입된다.

### box-sizing

```css
h1 {
  box-sizing: border-box;
  /*box-sizing: content-box; --> box-sizing의 기본 값. 표준 박스 모델에서 사용됩니다. */
}
```

- 이렇게 설정하면 박스 모델 중에 보더 박스의 영역까지 내가 설정한 width, height 값으로 적용된다.
- 매우 직관적으로 요소의 크기를 설정하는 것이 가능하기 때문에 많이 사용되는 방법 !
  <br><br>

## 단위

<hr>

단위는 크게 절대길이단위와 상대길이단위로 나누어진다.

절대길이단위 (Absolute length units)

- px

  - ‘화소’ 를 의미하며 디바이스 화면에서 이미지를 표현하는 가장 작은 단위
  - px은 \***\*절대 길이 단위**로 CSS에서 많이 쓰이는 기본 단위\*\*
  - 사용자가 선언한 고정된 크기 그대로를 화면에 그리기 때문에 직관적으로 쉽게 사용할 수 있다

- 화면의 짧은 쪽을 100으로 나눈것이 vmin,
  긴 쪽을 100으로 나눈것이 vmax

<br><br>

## overflow

<hr>

콘텐츠가 너무 커다랄 경우 요소를 어떻게 처리할지 지정

`overflow-x`, `overflow-y`의 축 별로 값을 설정할 수 있다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <style>
      div {
        /* overflow: hidden; */
        /* overflow: scroll;  */
        /* overflow: visible hidden; */
        /* overflow: hidden visible; */
        width: 100px;
        height: 100px;
      }
    </style>
  </head>
  <body>
    <div>
      <img width="200px" src="http://www.paullab.co.kr/images/ceo.png" alt="" />
    </div>
  </body>
</html>
```

`overflow: hidden`

흘러 넘치는 것을 잘라낸다!

지정한 100px x 100px 박스보다 이미지 사진이 더 크기때문에

overflow:hidden으로 흘러넘친 부분을 잘라낸다.

`overflow` 속성은 첫 번째 `overflow-x`, 두 번째 값은 `overflow-y`를 지정한다.

(하나만 사용하면 지정한 값을 양 축 모두에 적용)

- overflow 중요속성
  - overflow:visible 속성의 기본값으로, 콘텐츠를 자르지 않는다.
  - overflow:hidden 콘텐츠를 요소의 크기만큼 맞추기 위해 잘라낸다. (스크롤바 x)
  - overflow: scroll 콘텐츠를 요소의 크기만큼 맞추기 위해 잘라낸다. 잘린 나머지 부분을 확인 할 수 있도록 스크롤바가 제공된다.

<br><br>

## background-image

<hr>
- HTML 요소 뒤에 이미지를 배치할 때 사용<br>
- 이미지를 넣을 때  HTML의 img 태그를 사용하는 방법과<br>
  CSS의 background 속성을 사용하는 방법, 이 두 가지를 주로 사용

<br><br>
속성

- background-image: url을 이용해 이미지의 주소에서 이미지를 불러온다
- background-color: 요소의 배경 색을 지정
- background-position: 배경이미지의 위치를 지정
- background-repeat: 배경이미지를 어떻게 반복할 것인지 지정
  - repeat
  - no-repeat
  - repeat-x
  - repeat-y
  - round
  - space
- background-size
  - background-size: cover 이미지를 넓이,높이에 맞게 잘라낸다
  - background-size: contain 이미지 넓이나 높이에 맞춰 자신의 이미지를 모두 다 넣고 반복
  - background-size: 100% 이미지를 width와 height에 맞게 압축

```css
.home-header {
  background-image: url('apple.jpg');
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}
```

(no-repeat / cover / center 조합 많이 사용함)

<aside>
💡 어느 곳에서 img 태그를, 어느곳에서 background-image를 사용해야 하나요?

- 주로 백엔드 개발자와 협업해야 하는 공간에는 img 태그, FE 혼자 작업하는 공간에는 background-image를 사용
- 스크린리더가 읽지 않아야 하는 곳에서 사용하기도 함

</aside>

##

<br><br>
참고!
**사용자 지정 CSS 속성 사용하기 (변수)**

[https://developer.mozilla.org/ko/docs/Web/CSS/Using_CSS_custom_properties](https://developer.mozilla.org/ko/docs/Web/CSS/Using_CSS_custom_properties)

<br><br>

<hr>
<br>
✅  오늘 배운 것 
<br><br>

1만 시간의 법칙 과제를 하면서 몰랐던 속성들 때문에 꽤 고생을 했는데

오늘 수업에서 해결방법을 아주 많이 찾아 행복하다.

em 단위

overflow:hidden

background-image 속성들

box-sizing: border-box

등..

이번주에 검색하면서 처음 알게된 아이들인데

수업&복습을 통해 다시한번 탄탄하게 정리해야겠다!

box-sizing: border-box를 일찍알았더라면.. 그렇게 계속 계산하고있지 않았겠지?
