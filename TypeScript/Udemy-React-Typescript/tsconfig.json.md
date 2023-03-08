# tsconfig.json에 대하여

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

- 타입스크립트를 사용하는 특정 프로젝트에 추가할 수 있는 파일이다.
- 컴파일과 관련된 사항을 구성

<br>

## 주요옵션

- `target`<br>
  - 작성한 타입스크립트 코드를 어떤 자바스크립트 버전으로 변환할 것인지 결정
- `lib`: ["dom", "dom.iterable", "esnext"]<br>
  - 기본 타입스크립트 라이브러리<br>
  - 어떤 라이브러리가 타입스크립트에서 기본으로 지원되는지 결정
  - 현재 배열 안에 있는 라이브러리들은 타입스크립트에 내장되어있음 -> 추가적인 패키지 설치 필요 X
- `allowJs`
  - .js 파일 포함 여부를 결정
  - 일반 자바스크립트 파일을 프로젝트에 둘 것인지
  - 일반 자바스크립트 파일로부터 뭔가 가져올 때 오류를 표시하지 않을 것인지
- `strict` ✨
  - 이 프로젝트에 가장 엄격한 설정이 적용됨
  - ex. 묵시적인 any 타입을 사용할 수 없음 ✨
- `jsx`
  - jsx코드를 지원할 것인지
  - 결과물로 어떤 코드를 생성할 것인지 결정
