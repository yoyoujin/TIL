# React-konva

[GitHub](https://github.com/konvajs/react-konva)

- react-konva는 React를 사용하여 복잡한 캔버스 그래픽을 그리기 위한 자바스크립트 라이브러리이다.

- HTML5 캔버스 라이브러리에서 React를 작동시키려는 시도.
- 목표는 일반적인 React와 유사한 선언적 마크업과 유사한 데이터 흐름 모델을 갖는 것.

💡 참고 <br>

- Konva [예제](https://konvajs.org/)

## Konva 구조

- Stage, Layer, Group, Shape는 HTML 페이지 내의 가상의 DOM 노드로 구성이 되어서 화면상에 그려진다.

- 대략적인 구조는 Stage안에 각각에 Layer를 가지고, 그 안에 Group이나 Shape(사각형, 원, 이미지, 스프라이트, 텍스트, 선, 다각형, 정다각형, 경로, 별등..)을 그려 넣는 구조이다.

- Shape는 미리 만들어진 모양을 사용할 수 있지만 Shape 클래스를 인스턴스 화하고 그리기 기능을 만들어 사용자 정의 모양을 만들 수도 있다.
