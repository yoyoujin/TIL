// More complex types

// array
let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

// object
let person: {
  name: string;
  age: number;
};

person = {
  name: 'Max',
  age: 32,
};

// 객체 배열
let people: {
  name: string;
  age: number;
}[];

// Type inference
let course = 'React - The Complete Guide';

// course가 선언되면서 할당된 값의 자료형을 확인
// -> 타입추론에 의해 문자열로 타입으로 추론됨
// course = 12345; error : 타입추론때문
// 타입추론에 의해 타입이 지정되는 것을 권장 : 불필요하게 타입을 지정하지 않아도 되기 때문에

// Union Type
let course2: string | number = 'React - The Complete Guide';
course2 = 12345;

let userName: string | string[];
userName = 'Max';
userName = ['Max', 'Kim'];

// ✨ Type Alias 타입별칭
// 코드를 줄일 수 있는 매우 중요한 기능
// 타입스크립트에만 존재하는 기능이기때문에 자바스크립트로 컴파일하면 이 코드는 사라진다.

type Person2 = {
  name: string;
  age: number;
};

let person2: Person2;
let personArr: Person2[];

// Functions & types
// 함수에서는 입력, 리턴값의 타입도 모두 고려하기!
function sum(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

updatedArray[0].split('');
// 현재 updatedArray의 0번째 인덱스의 자료형은 number이다.
// 하지만 함수 정의에서 타입을 'any'로 명시적으로 작성해주었기때문에 0번째 인덱스의 값이 number인 것을 타입스크립트는 알 수 없으며, 이 때 문자열에 사용하는 메서드 split을 사용해도 오류가 생기지 않는다.
// 하지만 런타임 시 오류가 발생하게된다.

// 👉 이러한 문제를 해결하기 위해 Generics이라는 기능을 사용하게된다.
// insertAtBeginning2 함수는 제네릭 타입을 설정하였고, 매개변수 array와 value의 값은 같은 타입임을 명시해줌
function insertAtBeginning2<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
const demoArray2 = [1, 2, 3];
const updatedArray2 = insertAtBeginning2(demoArray, -1); // [-1, 1, 2, 3]

const stringArray = insertAtBeginning2(['a', 'b'], 'c');

// 제네릭 타입을 사용하여 타입스크립트에게 any 타입이 아님을 알려줌 -> updatedArray2는 number[] 임을 타입스크립트가 알게된다.
