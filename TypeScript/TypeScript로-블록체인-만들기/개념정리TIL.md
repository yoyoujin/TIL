# Typescript로 블록체인 만들기

# 1. Introduction

✨ TypeScript의 중요포인트 : TypeChecker와 소통하는것 ✨

- **타입스크립트**는 자바스크립트가 가지고 있는 여러 문제를 해결하고 보완하기위해 만들어진 언어이다.
- 자바스크립트를 버리고 타입스크립트로 넘어오는 이유?
  → 타입 안정성 때문!
  - 코드에 버그가 엄청나게 줄어들게된다.
  - 런타임 에러가 줄어듬
  - 생산성이 늘어나게됌
- 불안정한 자바스크립트

  - 자바스크립트는 매우 flexible 한 언어이다.
    말도 안되는 멍청한 코드를 허용해 줌. → 개발자를 최대한 배려해준다,,,,ㅎ

        [1, 2, 3, 4] + false

        '1, 2, 3, 4false'

  - 자바스크립트는 아래와 같이 이상한 입력값을 넣어도 코드 실행을 막아주지 않음
    → divide 함수는 숫자 두개를 입력값으로 보내야 하는데 하나만 보냈음에도 코드가 실행되버림
    → 다른 언어에서는 이런 코드는 절대실행되지 않음

        function divide(a, b) {
            return a / b
        }

        divide(2, 3)
        0.6666666666666666

        divide('xxxxxxxx')
        NaN

- 자바스크립트의 런타임에러
  - 좋은 언어라면, nico라는 객체를 분석해서 nico에는 hello() 함수가 없다는 걸 코드가 실행되기전에 띄워줄 것! 이 경우, 코드 실행자체가 안되는 언어들도 있음 (컴파일 실패)
  - 자바스크립트는 유저가 코드를 실행했을때 비로소 에러를 띄워줌
  ```javascript
  const nico = { name: 'nico' };
  nico.hello();
  //error
  ```

# 2. Overview of TypeScript

타입스크립트는 우리의 코드를 확인한 다음에 변환된 자바스크립트 안에서 실수가 일어나지 않게 확인을 해준다!

타입스크립트 코드에 에러가 있으면 그 코드는 자바스크립트로 컴파일 되지 않는다.

- 1번에서 쓴 말도안되는 코드의 경우 타입스크립트 에서는 컴파일 조차 되지 않는다
  <br><br>

# Implicit Types vs Explicit Types

- 데이터와 변수의 타입을 명시적으로 정의할 수 있다

  - 정의하지 않아도 타입을 추론해준다.

  ```typescript
  let a: boolean = false;
  // 변수 a가 boolean타입이어야 함을 명시적으로 알려줌
  // 그러나 이렇게 하지 않는 것을 추천! 타입을 추론해주기때문에

  let b = [1, 2, 3];
  // number로 이루어진 array라는것을 추론함

  b.push('1');
  // string을 number의 배열에 집어넣으려고 하는 것이기때문에 작동하지 않게됨
  ```

  <br>

# Types of TS

```typescript
let a: number[] = [1, 2];
let b: string[] = ['i1', '1'];
let c: boolean[] = [true];
// 명시적으로 지정해주는 방법!
// 가능한한 Typescript로 추론하게 하는 방법이 좋음
```

## Optional type

만약 모든 player가 name은 필수적으로 가지고 있고, age는 선택적으로 가지고 있는 경우?

```typescript
const player: {
  name: string;
  age?: number;
} = {
  name: 'nico',
};

// const player = {
//     name: string;
//     age?: number | undefined;
// }
```

이런 player 객체를 여러개 생성해야하는 경우 중복되는 코드를 계속 쓰게된다.
이 경우 아래와 같은 방법으로 해결한다.

## Alias 타입

```typescript
type Age = number;
type Player = {
  name: string;
  age?: Age;
};

const Nico: Player = {
  name: 'nico',
};

const Lynn: Player = {
  name: 'lynn',
  age: 12,
};
```

## 함수의 return 값의 타입을 지정해주는 방법

```typescript
type Player = {
  name: string;
  age?: Age;
};

function playerMaker(name: string): Player {
  return {
    name,
  };
}
// string타입으로 name을 받고 Player 타입을 return하는 함수가 된다.
// 화살표 함수 ver.
// const playerMaker = (name:string) : Player => ({name})

const nico = playerMaker('nico');
nico.age = 12; // type을 Player로 지정해주지 않았다면 error가 났을 코드이다.
```

## readonly 읽기전용

요소들을 '읽기전용'상태로 만든다.

```typescript
// 예제1
type Player = {
  readonly name: string;
  age?: Age;
};

const playerMaker = (name: string): Player => ({ name });

const nico = playerMaker('nico');
nico.name = 'las'; // error
```

```typescript
// 예제2
const numbers: readonly number[] = [1, 2, 3, 4];
numbers.push(1); // error
numbers.map();
numbers.filter();
// map이나 filter는 array는 바꾸지 않기 때문에 가능!

// readonly는 immutability(불변성)을 갖게한다 👍
```

## Tuple

- array를 생성해준다
  - 최소한의 길이를 가져야한다
  - 특정 위치에 특정 타입이 있어야한다

```typescript
const player: [string, number, boolean] = ['nico', 1, true];
// 정해진 갯수의 요소를 가져야하는 array를 지정할 수 있다 !

player[0] = 1;
// error
// typescript가 첫번째 index는 항상 string값이 들어와야한다는 것을 알고 있음

player[0] = 'hi';
// 타입에 readonly를 주면 이 코드도 error
// const player: readonly [string, number, boolean]
```

## any

- 비어있는 값들의 기본값
- TypeScript로부터 빠져나오고 싶을 때 쓰는 타입
- JavaScript의 상태가 되고, TypeScript로부터의 보호장치를 비활성화시킨다👎

```ts
const a: any[] = [1, 2, 3, 4];
const b: any = true;

a + b;
// error가 나지 않음...! 👎
// 타입 any를 써서 TypeScript의 보호장치로부터 빠져나왔기 때문
```

## Unknown

- 변수의 타입을 미리 알지 못할 때 사용
- TypeScript가 타입 확인작업을 강제로 시키게됨

```ts
let a: unknown;

let b = a + 1;
// error
// a의 타입이 unknown이기 때문에

if (typeof a === 'number') {
  let b = a + 1;
}
// 가능
```

## Void '비어있는 것'

- 아무것도 return 하지 않는 함수를 대상으로 사용

```ts
function hello() {
  console.log('x');
}
// ts는 hello 함수가 void라고 띄워준다
// function hello(): void

const a = hello();
a.toUpperCase();
// error
// void타입에는 toUpperCase가 없기 때문에
```

## never

- 함수가 절대 return 하지 않을 때 발생
  - ex) 함수에서 exception(예외)이 발생할 때
- 타입이 두가지 일 수도 있는 상황에 발생

```ts
// 예시1 : 함수가 절대 return 하지 않을 때
function hello1(): never {
  return 'X';
}
// error

function hello2(): never {
  throw new Error('xxx');
}
// return하지 않고 오류를 발생시키는 함수
```

```ts
// 예시2 : 타입이 두가지 일 수도 있는 상황일 때
function hello(name: string | number) {
  if (typeof name === 'string') {
    name; // type:string
  } else if (typeof name === 'number') {
    name; // type:number
  } else {
    name; // type:never
    // 이코드블럭은 실행되면 안됌 !
  }
}
```

<br><br>

# 3. Functions

## 1. Call Signitures

- 타입스크립트에게 함수가 어떻게 호출되는지 설명해주는 부분
  - 함수의 파라미터는 어떤 타입인지?
  - 함수의 리턴 타입은 무엇인지?

함수의 call signature 타입 만들기

```ts
// call signature
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;
```

## 2. Overloading

- 함수가 여러 개의 call signatures를 가지고 있을 때 발생시킨다.

```ts
type Add = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add: Add = (a, b) => {
  if (typeof b === 'string') return a;
  return a + b;
};
```

```ts
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  // string이나 Config 타입을가지고 있다면
  // 아래 if문을 통해 내부에서 그 타입을 체크하도록 해준다
  if (typeof config === 'string') {
    console.log(config); // string
  } else {
    console.log(config.path); // config타입 객체
  }
};
```

```ts
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add(1, 2);
add(1, 2, 3);
```

## 3. Polymorphism 다형성

- generic이란 ?
  - call signature를 작성할 때, 들어올 값들의 확실한 타입을 모를 때 사용
  - placeholder를 사용해서 작성한 코드의 타입 기준으로 변경해줌
  - TypeScript가 나의 코드를 보고 추론하여 알아냄

```ts
type SuperPrint = <T, M>(arr: T[], b: M) => T;

const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4], 'x');
const b = superPrint([true, false, true], 1);
const c = superPrint(['a', 'b', 'c'], false);
const d = superPrint([1, 2, true, false], []);
```

제네릭을 사용하는 예시!

```ts
type Player<E> = {
  name: string;
  extraInfo: E;
};

type NicoExtra = {
  favFood: string;
};

type NicoPlyaer = Player<NicoExtra>;

const nico: NicoPlyaer = {
  name: 'nico',
  extraInfo: {
    favFood: 'kimchi',
  },
};

const lynn: Player<null> = {
  name: 'lynn',
  extraInfo: null,
};

// type은 재사용이 가능함!
// 제네릭 덕분~

function printAllNumbers(arr: number[]) === (arr: Array<number>)
// 오른쪽 제네릭 형식으로도 작성 가능
```

<br><br>

# 4. Classes And Interfaces

## 1. Classes

```ts
class Player {
  constructor(private firstName: string, private lastName: string, public nickname: string) {}
}

const nico = new Player('nico', 'las', '니꼬');
nico.firstName; // error (firstName은 private이기 때문)
nico.nickname; // 가능
```

```ts
// 추상클래스 : 다른 클래스가 상속받을 수 있는 클래스
abstract class User {
  constructor(
    private firstName: string, //
    private lastName: string, //
    protected nickname: string //
  ) {}

  // 추상메소드
  abstract getNickName(): void;
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
    //getFullName 메소드의 implementation(구현)
  }
}

// const nico = new User('nico', 'las', '니꼬');
// error
// ts가 추상클래스의 인스턴스를 만들 수 없다고 경고함

class Player extends User {
  getNickName() {
    console.log(this.nickname); // protected이기때문에 사용가능
  }
}
const nico = new Player('nico', 'las', '니꼬');
nico.getFullName();
```

- 추상클래스 : 오직 다른 클래스가 상속받을 수 있는 클래스 그러나, 직접적으로 새로운 인스턴스 만들기는 불가
- 추상메소드 : 추상클래스를 상속받는 모든 것들이 구현해야하는 메소드

  - 추상메소드가 있는 경우, 추상 클래스를 상속받는 클래스에서 추상메소드를 구현해주어야한다.

- private property
  - 인스턴스 밖에서 접근 불가
  - 다른 자식 클래스에서 접근 불가
  - 필드가 외부로부터는 보호되지만, 자식 클래스에서 사용 가능하게 하고 싶다면?
    -> 'protected'를 사용하면됨!

<br>

| 구분         | 선언한 클래스 내 | 상속받은 클래스 내 | 인스턴스 |
| ------------ | :--------------: | :----------------: | :------: |
| private      |       ⭕️        |         ❌         |    ❌    |
| protected    |       ⭕️        |        ⭕️         |    ❌    |
| public(기본) |       ⭕️        |        ⭕️         |   ⭕️    |

<br>

예제)

```ts
type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words; // 객체
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(public readonly term: string, public readonly def: string) {}
}

const kimchi = new Word('kimchi', '한국의 음식');
const dict = new Dict();

dict.add(kimchi);
dict.def('kimchi');

kimchi.def = 'xxxx';
// error
// def가 readonly이기 때문에 수정이 불가함
```

## 2. Interfaces

- 타입
  - 내가 원하는 모든 것이 될 수 있다.<br>
    ex) string의 배열, 특정 값, Player타입처럼 object의 모양을 특정하고 싶을 때 <br><br>
- ## 인터페이스

  - 인터페이스는 오직 한가지 용도를 가지고 있음
    -> ✨ 오브젝트의 모양을 특정해주기 위한 것 ✨
  - 리액트를 이용해서 작업을 할 때 자주 사용됨

  ```ts
  // concrete type인 string이 아니라, 특정 값들을 가질 수 있다.
  type Team = 'red' | 'blue' | 'yellow';
  type Health = 1 | 5 | 10;

  // type과 interface
  // Player와 Person은 같은 역할을 하고 있다
  // ts에게 오브젝트의 모양을 설명함
  type Player = {
    nickname: string;
    team: Team;
    health: Health;
  };
  interface Person {
    nickname: string;
    team: Team;
    health: Health;
  }

  // interface Hello = string
  // error - doesn't work

  const nico: Player = {
    nickname: 'nicco',
    team: 'yellow',
    health: 10,
  };
  ```

  ```ts
  interface User {
    name: String;
  }

  // 클래스와 비슷함
  interface Player extends User {}

  // type User = {
  //     name: string
  // }

  // type Player = User & {

  // }

  const nico: Player = {
    name: 'nico',
  };
  ```

  ```ts
  interface User {
    name: string;
  }

  interface User {
    lastName: string;
  }

  interface User {
    health: number;
  }

  const nico: User = {
    name: 'nco',
    lastName: 'sdf',
    health: 10,
  };

  // 인터페이스를 각각 3번 만들어도, 타입스크립트가 알아서 하나로 합쳐줌
  // 타입은 안됨 ❌
  ```

<br><br>
