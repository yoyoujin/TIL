## View 로직과 비지니스 로직은 뭘까?

<br>

또 이 둘은 어떻게 구분해야할까?

> A sphere of knowledge, influence, or activity. The subject area to which the user applies a program is the domain of the software. — Eric Evans³

> “우리가 만드는 서비스와 관련된 이야기를 할 때, 어떻게 보여줄지 논의하는 걸 제외하면 모두 도메인, 즉 비지니스 로직이다.”

이 글을 작성하는데 [참고한 글](https://medium.com/@shinbaek89/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98-%EB%B9%84%EC%A7%80%EB%8B%88%EC%8A%A4-%EB%A1%9C%EC%A7%81%EA%B3%BC-%EC%82%AC%EB%A1%80-f09774f53a3b)에서는 위와같이 설명한다.
<br><br>

### ⭐️ 예제를 통해 이해해보자!

엽떡을 방문포장할 경우 최종 결제 금액에서 3,000원을 할인한다.
앱에서 할인 전 가격과 할인 후 가격을 노출하되
할인 전 가격은 작고 흐릿하게, 할인 후 가격은 크고 굵게 표시한다.

위의 조건은 아래와 같이 두 가지로 분리할 수 있다.

B: 방문포장할 경우 최종 결제 금액에서 3,000원을 할일한다.
V: 할인 전 가격과 할인 후 가격을 노출하고, 할인 전 가격은 작고 흐릿하게, 할인 후 가격은 크고 굵게 노출한다.

B는 우리가 만드는 애플리케이션이 사용되는 영역으로, 사업 규칙(비지니스로직)이다.
V(View로직)은 애플리케이션 그 자체로, 사업규칙에 의존하고 변경될 가능성이 높다.
또한 사업규칙을 변경하는 것 보다 보여주는 방법을 변경하는 것이 쉽다.
<br><br>

### input과 에러메세지

로직 분리, 값을 다루는데 어려움을 많이 겪는 케이스의 대표적인 예제로 input과 에러메시지가 있다.

다음은 간단한 비밀번호를 받는 input이다.

```jsx
export default function Page() {
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const handleChange = (e) => {
    setPassword(e.target.value);
    setIsValid(e.target.value.length >= 6);
  };

  return (
    <>
      <h1>어떤 페이지 입니다.</h1>
      ...
      <label htmlFor='password'>비밀번호</label>
      <input id='password' type='password' value={password} onChange={handleChange} />
      <p>{isValid ? '' : '비밀번호는 6자 이상 입력해야 합니다.'}</p>
      ...
    </>
  );
}
```

보통 하나의 input으로 하나의 값을 받는다고 하면 위와 같이 작성했을 것이다.
그런데 아이디, 이메일, 이름 등 input의 갯수가 많아진다면
하나의 상태가 업데이트되면 페이지를 전체를 렌더링 하면서 퍼포먼스가 떨어지게된다.
그래서 다음과 같이 별도의 컴포넌트로 분리하게된다.

```jsx
export default function Page() {
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const handleChange = (e) => {
    setPassword(e.target.value);
    setIsValid(e.target.value.length >= 6);
  };

  return (
    <>
      <h1>어떤 페이지 입니다.</h1>
      ...
      <form onSubmit={...}>
        ...
        <InputPassword />
        ...
      </form>
      ...
    </>
  );
}

```

```jsx
export default function InputPassword() {
  const [isValid, setIsValid] = useState(false);
  const handleChange = (event) => {
    setIsValid(event.target.value.length >= 6);
  };

  return (
    <>
      <label htmlFor='password'>비밀번호</label>
      <input id='password' type='password' onChange={handleChange} />
      <p>{isValid ? '' : '비밀번호는 6자 이상 입력해야 합니다.'}</p>
    </>
  );
}
```

이렇게 분리해야 password가 업데이트 되어도

- InputPassword 컴포넌트만 렌더링이 되고 Page는 렌더링이 되지 않는다.
- 또한 submit 하게될 때 password값을 Page에서 가져올 수 있다.
  <br><br>

### InputPassword 컴포넌트에서 V-B로직 분리하기

- V로직: isValid
- B로직: 비밀번호가 6자 이상이어야 한다

```jsx
const isValidPassword = (password) => {
  if (password.length < 6) {
    return false;
  }

  return true;
};

export default function InputPassword() {
  const [isValid, setIsValid] = useState(false);
  const handleChange = (e) => {
    setIsValid(isValidPassword(e.target.value));
  };
  ...
}
```

- isValidPassword의 UI가 바뀌지 않는 이상 비즈니스 로직과 관련된 변경 사항은 `isValidPassword` 만 수정하면된다.

```jsx
const PasswordValidator = {
  VALIDATIONS: {
    NOT_VALID_EMPTY: { isValid: false, message: '비밀번호를 입력해주세요.' },
    NOT_VALID_LENGTH: { isValid: false, message: '비밀번호는 12자 이상 입력해야 합니다.' },
    VALID: { isValid: true },
  },

  validate: function (password) {
    if (password.length === 0) {
      return this.VALIDATIONS.NOT_VALID_EMPTY;
    }
    if (password.length < 12) {
      return this.VALIDATIONS.NOT_VALID_LENGTH;
    }

    return this.VALIDATIONS.VALID;
  },
};

export default function InputPassword() {
  const [isValid, setIsValid] = useState(PasswordValidator.VALIDATIONS.NOT_VALID_EMPTY);
  const handleChange = (event) => {
    setIsValid(PasswordValidator.validate(event.target.value));
  };

  return (
    <>
      <label htmlFor='password'>비밀번호</label>
      <input id='password' type='password' onChange={handleChange} />
      <p>{isValid.message || ''}</p>
    </>
  );
}
```

- API명세가 바뀌면 관련 내용이 변경되면서 뷰 로직까지 수정되는 부분은 불가피하다.
- 따라서 인터페이스는 API 명세를 만드는 것 처럼 쉽게 바뀌지 않게 디자인하도록 노력해야한다.
  <br><br>

## 비즈니스 로직의 관리

비즈니스 로직은 어떤 수준에서 관리되어야할까?
컴포넌트 수준에서 사용되는 건 불가능하지 않지만 어려운 점이 많다.

![](https://velog.velcdn.com/images/yjinhann/post/3719c84e-3561-4f3f-9b1c-96c3c6918a97/image.png)

한 페이지에서 다루는 비즈니스 로직은 컴포넌트 단위로 움직이지 않는다.
예를들어, 방문포장 구매내역이 컴포넌트A - 최종결제 금액은 컴포넌트 B에서 다룬다.개발자가 어떤 이유로 두 비즈니스 로직을 컴포넌트 수준에서 관리하지만 비즈니스 로직은 뷰를 관리하는 방법과 다른 맥락을 가지기 때문에 문제가 발생할 수 있다는 점이다.

만약 다른 컴포넌트에서 방문포장 구매와 관련된 로직의 상태를 가져와야한다면 상위 컴포넌트를 통해 전달 받는 방식으로 되어야하고, 이렇게 되면 페이지의 코드가 상당부분 바뀔 수 있다.

따라서 **비즈니스 로직은 하위 컴포넌트의 변경에 영향을 받지 않는 페이지 수준**에서 관리되어야한다.
<br>

- 비즈니스 로직의 규모가 작고, 특정 컴포넌트 영역에만 영향을 준다면?

  - 페이지 단위의 비즈니스 로직을 구축하는 비용을 절감하기 위해 위와 같은 방법을 사용하는 것도 효과적이고, 효율적인 방법이 될 수 있다.
    <br>

- 페이지 수준에서 비즈니스 로직을 다뤄야한다면?
  - 페이지의 세션이 유지되는 동안 비즈니스 로직의 상태가 유지되도록 해야한다.
    👉 리액트의 경우 대표적으로 `Context API`가 있다.
    이를 활용해 비즈니스 로직의 상태와 뷰의 상태를 분리하여 관리할 수 있다.

```jsx
class BusinessLogic {
  count;

  constructor() {
    this.count = 0;
  }

  increase() {
    this.count = this.count + 1;
  }
  ...
}

const BusinessLogicContext = React.createContext(new Logic());

// 페이지 컴포넌트
const Page = () => {
  const logic = React.useMemo(() => new Logic(), []);

  return (
    <Context.Provider value={logic}>
      <Counter></Counter>
    </Context.Provider>
  );
};

// 페이지를 구성하는 하위 컴포넌트
const Counter = () => {
  const businessLogic = React.useContext(BusinessLogicContext);
  const [count, setCount] = React.useState(counter.count);

  return (
    <div>
      <button type="button" onClick={() => {
        businessLogic.increase();
        if (businessLogic.count % 2 === 0) {
          setCount(businessLogic.count);
        }
      }}>
        increase
      </button>
      <div>
        <div>count in context : {businessLogic.count}</div>
        <div>count in state : {count}</div>
      </div>
    </div>
  );
};

```

```jsx
// 비즈니스 로직과 관계있는 훅을 관리할 때 좋은 예시 코드
const useMapCount = () => {
  const businessLogic = React.useContext(BusinessLogicContext);

  if (!businessLogic) {
    throw new Error('useMapCount 훅은 PageLogic Context API 환경에서 사용되어야 합니다.');
  }
  ...
}
```

```jsx
// 비즈니스 로직을 주입받는 방법
const useMapCount = (businessLogic) => {
  if (!businessLogic) {
    throw new Error('useMapCount 훅은 PageLogic Context API 환경에서 사용되어야 합니다.');
  }
  ...
}
```

- 인터페이스 관리하기
  - 페이지와 프로젝트 코드를 안정적으로 관리하는데 중요한 부분으로, 인터페이스를 고려해야한다.
  - 이 페이지에서 어떤 비즈니스 로직을 사용하는지, 커스텀 훅은 어떤 입력과 출력을 갖는지 관리하는 것
  - 타입스크립트 환경이라면 인터페이스를 훨씬 수월하게 관리할 수 있다.

```jsx
// interface를 PageLogic과 함께 여기에서 관리하는 건 생각보다 더 중요할 수 있습니다 !
interface BusinessLogicR1 {
  selectExtraProduct: (productId: number) => void;
  ...
}

class PageLogic {
  constructor(
    businessLogicR1: BusinessLogicR1,
    businessLogicR2: BusinessLogicR2,
  ) {
    ...
  }

  selectExtraProduct(productId: number) {
    businessLogicR1.selectExtraProduct(productId);
  }
  ...
}
...
```

- 인터페이스의 장점
  - 어떤 페이지가 어떤 로직들을 가지고 운영되는지 빠르게 살펴볼 수 있음
  - 같은 인터페이스를 가진 다른 로직으로 변경가능
  - 런타임에 비즈니스 로직을 변경할 수도 있어 유연성이 높아짐
    <br>
    <br><br>

### 비즈니스 로직 관리의 문제점

페이지 렌더링

- ContextAPI를 비즈니스 로직을 관리하기위해 사용하다보니 로직의 상태를 업데이트해도 페이지가 렌더링 되지 않아 이벤트가 발생한 컴포넌트를 제외하고 다른 컴포넌트를 렌더링할 수 없는 문제가 발생하기도 한다.
- 다른 상태관리 도구를 사용해서 특정 컴포넌트 그룹만 렌더링 할 수도 있다.
  조금 억지스러워 보일 수 있으나, 비즈니스 상태의 업데이트와 뷰 상태의 업데이트의 결합을 피할 수 있다는 장점이 있다.
- 비즈니스 로직과 뷰 로직을 분리하면 비즈니스 상태에 따른 렌더링 흐름을 제어할 수 있게된다.
- 비즈니스 상태가 렌더링 흐름에 포함되어 있지 않기 때문에 **비즈니스 로직의 사용을 수정해도 렌더링 퍼포먼스나, 부수효과 등에 적은 영향, 즉 뷰에 제한적인 영향을 준다**.
  <br>
  <br>

### 비즈니스 로직 관리 Tip

로직의 분리는 환경을 구분하지 않는다!
분리를 하는 것은 리액트 프로젝트를 잘 운영하는 것보다 더 근본적인 이유를 갖는다.

1. 어떤 환경에서든 조금 더 장수할 수 있는 프로젝트를 만드는 것
2. 프로젝트를 갈아엎거나 기술을 변경하는 것 외에 문제를 해결할 수 있는 방법을 추가적으로 갖는 것
   <br><br>
   <br><br>

💡 리액트를 처음 공부할때 다른 사람의 코드를 보며 어떤 기준으로 컴포넌트를 분리하는지, 컴포넌트 밖에 정의하는 함수는 어떤 기준으로 작성되는지 등등 궁금점이 있었다. 이 글을 작성하면서 그동안 궁금했던 부분도 같이 풀어진 것 같다. 아직은 기능구현에 급급한 코드를 짜고 있다면 앞으로는 성능을 고려하며 비즈니스 로직과 뷰 로직을 분리하는 연습을 진행해봐야겠다고 생각했다.
