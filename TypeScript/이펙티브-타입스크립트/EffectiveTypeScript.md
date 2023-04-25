# Effective TypeScript

## item1. 타입스크립트와 자바스크립트의 관계 이해하기

- 타입스크립트는 자바스크립트의 상위 집합
- 타입스크립트는 자바스크립트 런타임 동작을 모델링하는 타입 시스템을 가지고 있기 때문에 런타임 오류를 발생시키는 코드를 찾아내려고 한다. -> 타입 체커를 통과하면서도 런타임 오류를 발생시키는 코드는 충분히 존재 할 수 있음!
- 타입 시스템은 전반적으로 자바스크립트의 동작을 모델링한다.

## item2. 타입스크립트 설정 이해하기

- 타입스크립트 컴파일러는 언어의 핵심 요소에 영향을 미치는 몇 가지 설정을 포함하고 있으며 커맨드라인을 이용하기 보다는 tsconfig.json을 사용하는 것이 좋다.
- 자바스크립트 프로젝트를 타입스크립트로 전환하는 것이 아니라면, 새 프로젝트를 시작할 때 `noImplicitAny`를 설정하는 것이 좋다.
- 'undefined는 객체가 아닙니다' 같은 런타임 오류를 방지하기 위해 `strictNullChecks`를 설정하는 것이 좋다.
- 타입스크립트에서 엄격한 체크를 하고싶다면 strict 설정을 고려해야 한다.

```ts
//tsconfig.json
"noImplicitAny": true,
"strictNullChecks": true,
```

## item3. 코드 생성과 타입이 관계없음을 이해하기

- 타입스크립트 타입은 런타임 동작이나 성능에 영향을 주지 않는다.
  - 타입과 타입연산자는 자바스크립트 변환 시점에 제거된다.
- 타입 오류가 존재하더라도 코드생성(컴파일)은 가능하다.
- 타입은 런타임에 사용할 수 없다. 런타임에 타입을 지정하려면, 타입 정보 유지를 위한 별도의 방법이 필요하다.
  - 태그된 유니온과 속성 체크 방법을 많이 사용 (아래 예시코드 참고)

```ts
interface Square {
  width: number;
}
interface Rectangle extends Square {
  height: number;
}
type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if ('height' in shape) {
    // Rectangle
    return shape.width * shape.height;
  } else {
    // Square
    return shape.width * shape.width;
  }
}
```

```ts
interface Square {
  kind: 'square';
  width: number;
}
interface Rectangle {
  kind: 'rectangle';
  height: number;
  width: number;
}
type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape.kind === 'rectangle') {
    // Rectangle
    return shape.width * shape.height;
  } else {
    // Square
    return shape.width * shape.width;
  }
}
```
