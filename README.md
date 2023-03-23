# 원티드 프리온보딩 프론트엔드 인턴십 4주차 기업과제

## 목차

1. [프로젝트 소개](#1-프로젝트-소개)
2. [구현 결과](#2-구현-결과)
3. [과제 수행 과정](#3-과제-수행-과정)
4. [Best Practice 산출 전략 및 근거](#4-Best-Practice-산출-전략-및-근거)
5. [Refactoring](#5-Refactoring)
6. [팀 협업 방식](#6-팀-협업-방식)

<br>

## 1. 프로젝트 소개

![image](https://user-images.githubusercontent.com/85419343/227121956-10e68362-6bb0-4d25-88d1-ffd6beddfdb2.png)

<p align="center">
  <a href="https://main--gorgeous-toffee-7570e0.netlify.app/?datetime=2023-03-08">🔗 배포 URL</a>
</p>

### Switchwon Transaction History Project

- 이 프로젝트는 <a href="http://www.switchwon.com/">스위치원</a>에서 출제한 과제로, 주어진 데이터를 기반으로 주문 내역을 관리하는 페이지를 구현하였습니다.

### 진행 방식

- 7명의 팀원들이 각자 과제를 구현하고, 2회의 Pull Request를 보내 코드리뷰를 진행 후 Best Practice를 선정하였습니다.
- Best Practice로 뽑힌 코드 외에 다른 좋은 코드를 반영하기 위해 페어 프로그래밍으로 refactoring을 진행했습니다.

### 진행 기간

- 2023.03.19 ~ 2023.03.23 (5일)

### 프로젝트 실행 방법

```
$ git clone git@github.com:wanted-pre-onboarding-team5/pre-onboarding-9th-4-5.git
$ cd wanted-pre-onboarding-9th-4-5
$ npm install && npm run dev
```

<br>

## 2. 구현 결과

### (1) 주문 목록 페이지 구현 및 정렬 / 필터

|                                               주문목록 페이지 구현                                               |
| :--------------------------------------------------------------------------------------------------------------: |
| ![](https://cdn.discordapp.com/attachments/1016940382061346880/1088363380655530024/ezgif.com-video-to-gif-3.gif) |

|                                              정렬, 필터 기능 구현                                              |
| :------------------------------------------------------------------------------------------------------------: |
| ![](https://cdn.discordapp.com/attachments/1016940382061346880/1088361751256498216/ezgif.com-video-to-gif.gif) |

**주문 목록 페이지 구현 및 정렬 / 필터 요구사항** [ISSUE#2](https://github.com/wanted-pre-onboarding-team5/pre-onboarding-9th-4-5/issues/2)

- [x] 1.  주어진 mock data를 이용해서 주문 목록 페이지를 구현한다.
  - `transaction_time` 2023년 3월 8일자의 데이터만 보여준다.
  - 주문에 대한 모든 정보를 표 형태로 구현한다.
  - 한 페이지에 50건의 주문 보일 수 있도록 페이지네이션을 구현한다.
- [x] 2.  정렬 기능을 구현한다.
  - 기본 정렬은 `ID`를 기준으로 오름차순으로 구현한다.
  - `주문번호`, `거래일 & 거래시간` 버튼을 누르면 각각 내림차순 정렬이 되도록 구현한다.
- [x] 3.  주문 처리 상태(`status`)에 따라 filtering 기능을 구현한다.

<br>

### (2) **검색 기능 / 최신화 기능 / 테스트 코드**

|                                                    검색 기능                                                     |
| :--------------------------------------------------------------------------------------------------------------: |
| ![](https://cdn.discordapp.com/attachments/1016940382061346880/1088362297879171092/ezgif.com-video-to-gif-2.gif) |

|                                                   최신화 기능                                                    |
| :--------------------------------------------------------------------------------------------------------------: |
| ![](https://cdn.discordapp.com/attachments/1016940382061346880/1088363830301700146/ezgif.com-video-to-gif-4.gif) |

|                                              테스트 코드 구현                                              |
| :--------------------------------------------------------------------------------------------------------: |
| ![](https://cdn.discordapp.com/attachments/1016940382061346880/1088398526683299950/2023-03-23_6.45.29.png) |

**검색 기능 / 최신화 기능 / 테스트 코드 요구사항** [ISSUE#3](https://github.com/wanted-pre-onboarding-team5/pre-onboarding-9th-4-5/issues/3)

- [x] 1.  검색(search) 기능을 구현한다.
  - 최신화된 데이터에서 고객이름(**`customer_name`)** 을 검색 할 수 있다.
  - 유저로부터 input 값을 받아 검색할 수 있다.
- [x] 2.  최신화(update) 기능을 구현한다.
  - 5초마다 새로운 데이터를 불러온다.
- [x] 3.  전체 요구사항에 따른 테스트 코드를 구현한다.

<br>

## 3. 과제 수행 과정

### 사용한 라이브러리

<div>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white">
  <img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=MUI&logoColor=white">
  <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white">
  <img src="https://img.shields.io/badge/husky-5D4F85?style=for-the-badge&logo=husky&logoColor=white">
</div>
 
<div style='margin-top:10px;'>
    <img src="https://img.shields.io/badge/Testing Library-E33332?style=for-the-badge&logo=Testing Library&logoColor=white"> 
    <img src="https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=Vitest&logoColor=white"> 
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white"> 
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white"> 
</div>
<br>

- **React** : 요구사항의 필수 스택인 react를 사용하였습니다.
- **Vite** : vite를 사용하여 프로젝트 툴체인을 구성하였습니다.
- **TypeScript** : 안정적인 프로그래밍을 위해 사용하였습니다.
- **Material UI** : 완성도가 높은 UI를 빠르게 구현하기 위해 사용하였습니다.
- **react-router-dom** : 직관적인 API로 SPA 구축 시 라우팅을 수월하게 할 수 있어 사용했습니다.
- **eslint** : 팀원간 코드 컨벤션을 통일하기 위해 사용했습니다.
- **prettier** : 팀원간 코드 포맷을 통일하기 위해 사용했습니다.
- **husky** : git hook을 좀 더 편리하게 적용할 수 있도록 사용했습니다.
- **React-Testing-Library** : React component를 사용자 관점에서 테스트하기 위해 사용했습니다.
- **vitest** : vite 기반 프로젝트에서 native test runner를 적용하기 위해 사용했습니다.
  - 참고: vitest와 jest를 비교하는 링크입니다. ([1](https://www.libhunt.com/compare-vitest-vs-jest), [2](https://www.youtube.com/watch?v=7f-71kYhK00))

### 리팩토링 후 폴더 구조

```
📦src
 ┣ 📂__test__
 ┃ ┗ 📜index.test.tsx
 ┣ 📂components
 ┃ ┣ 📂FilterBox
 ┃ ┃ ┣ 📜DateFilter.tsx
 ┃ ┃ ┣ 📜SearchFilter.tsx
 ┃ ┃ ┣ 📜StatusFilter.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂TransactionTable
 ┃ ┃ ┣ 📜StyledTableCell.tsx
 ┃ ┃ ┣ 📜TransactionTableBody.tsx
 ┃ ┃ ┣ 📜TransactionTableHead.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📜Header.tsx
 ┃ ┗ 📜TableTitle.tsx
 ┣ 📂constants
 ┃ ┗ 📜table.ts
 ┣ 📂helpers
 ┃ ┗ 📜processData.ts
 ┣ 📂hooks
 ┃ ┣ 📜useDebounce.tsx
 ┃ ┗ 📜useIntervalRevalidate.tsx
 ┣ 📂pages
 ┃ ┣ 📜Error.tsx
 ┃ ┣ 📜Main.tsx
 ┃ ┗ 📜Root.tsx
 ┣ 📂routes
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜loader.ts
 ┣ 📂types
 ┃ ┗ 📜responseData.ts
 ┣ 📂utils
 ┃ ┣ 📜capitalizeFirstLetter.ts
 ┃ ┗ 📜httpClient.ts
 ┣ 📜App.tsx
 ┣ 📜main.tsx
 ┗ 📜setupTest.ts
```

<br>

## 4. Best Practice 산출 전략 및 근거

### Best Practice 산출 전략

- 분석한 요구사항을 토대로 큰 단위의 이슈 2개로 나눴으며, 팀원 모두 요구사항을 구현하여 2회의 PR을 정해진 시간까지 보냈습니다.
  - 1회차 PR: 3/21(화) 오후 12시까지 (EPIC ISSUE 1)
  - 2회차 PR: 3/22(수) 오후 2시까지 (EPIC ISSUE 2)
- PR message에는 Pull Request 템플릿에 맞춰 자신이 구현한 로직과 의도를 설명하여 팀원들이 이해하기 쉽도록 하였습니다.
- 팀원들의 코드를 리뷰하며 자신의 의견 및 질문을 코멘트로 남겼습니다.
- 마지막 코드 리뷰를 마친 후 자신이 생각하는 Best Practice를 뽑고 그 근거를 Notion에 정리했으며, 토론을 통해 최종 Best Practice를 선정했습니다.
- 선정된 Best Practice를 main 브랜치에 merge하였고, 팀원들과 함께 리팩토링을 진행하여 코드 퀄리티를 높였습니다.

### Best Practice 산출 근거

> 이번 주차에도 다양한 사람들의 코드의 장점을 녹여낼 수 있도록 여러 명의 Best Practice를 뽑았습니다. Base로 창환님의 코드를 뽑아 함께 잘 한 점들을 적용할 수 있도록 Refactoring 작업을 진행했습니다.

- 창환
  - 고객 이름 검색 기능에서 검색어에 일치하는 부분에 Highlight를 적용하여 사용자의 편의를 향상시켰습니다.
  - 과제의 요구사항중 하나였던 테스트코드를 구현했습니다.
  - useRevalidator라는 custom hook을 이용하여 최신화를 구현했습니다.
- 현오

  - 컴포넌트를 적절한 단위로 분리하고 폴더에 정리하여 구조화하였으며, 중복되는 코드를 최소화하고 재사용성을 높였습니다.
  - 적절한 로고와 UI 전체에 주황색 색깔 테마를 더하여 페이지 UI가 통일감있게 보이도록 구현했습니다.

- 자윤, 은우, 승훈
  - 고객 이름 검색 기능 구현 시 onChange 이벤트를 활용하여 한 글자씩 입력해도 실시간으로 검색될 수 있도록 하였으며, searchParams를 활용하여 URL로도 검색될 수 있도록 하였습니다.

<br>

## 5. Refactoring

> 페어 프로그래밍으로 진행한 리팩토링 목록입니다. 토론을 통해 각자가 구현한 과제에서 잘 한 부분을 적용했습니다.

### 1. 컴포넌트 구조 개선

![image](https://user-images.githubusercontent.com/85419343/227130732-5b685c39-2785-4abf-9583-349da0de17e6.png)

- 컴포넌트의 구조를 시각화하여 볼 수 있도록 팀원들과 함께 컴포넌트의 구조를 그렸습니다.
- 기존의 컴포넌트의 구조를 변경했습니다.
  ```
  📦components
   ┣ 📂FilterBox
   ┃ ┣ 📜DateFilter.tsx
   ┃ ┣ 📜index.tsx
   ┃ ┣ 📜SearchFilter.tsx
   ┃ ┗ 📜StatusFilter.tsx
   ┣ 📂TransactionTable
   ┃ ┣ 📜index.tsx
   ┃ ┣ 📜StyledTableCell.tsx
   ┃ ┣ 📜TransactionTableBody.tsx
   ┃ ┗ 📜TransactionTableHead.tsx
   ┣ 📜Header.tsx
   ┗ 📜TableTitle.tsx
  ```
- 기존에는 components 폴더 안에 컴포넌트들이 같은 수준에 있었지만, 페이지를 크게 FilterBox부분과 TransactionTable로 나누어 관심사 분리를 수행했습니다.
- 나눈 폴더안에 응집도를 고려하여 각 컴포넌트들을 배치했습니다.

### 2. UI, UX를 고려한 디자인 개선

- switchwon의 signature 색상인 오렌지 컬러를 사용하여 UI 테마를 구성하였습니다.
- 사용자의 편의성을 고려해서 고객 이름 검색창과 필터의 위치가 가깝도록 변경하였습니다.
- Table에 MUI의 Sticky Header를 적용해서 Header가 테이블의 상단에 유지되도록 하여 편의성을 개선하였습니다.
- 페이지 전체 스크롤을 해야 페이지를 변경할 수 있는 불편함을 개선하기 위해, Table Height 옵션을 주어서 Table 내에서 스크롤 할 수 있도록 변경하였습니다.
- 5초마다 최신화되는 데이터를 시각적으로 확인할 수 있도록 `UpdatedAt` 을 표기하였습니다.

### 3. 코드 가독성 개선

- inline으로 작성된 콜백 함수를 분리하고 함수의 이름을 붙여 일관성 및 가독성을 향상했습니다.
- fn, array 등 식별자에 타입이 포함된 경우 중복이라 판단되어 이를 제거했습니다.

### 4. 성능 개선

- `useDebounce` 커스텀 훅을 만들어 change 이벤트에 debounce 기법을 적용해, 검색 로직이 호출되는 횟수를 줄였습니다.

<br>

## 6. 팀 협업 방식

### 🏃🏻‍♂️ 팀 프로젝트 진행 방식

#### 1. Discord 채널을 활용한 주기적인 회의 진행

- 주기적인 회의를 통해 서로의 의견을 나누고, 다음 할 일에 대한 계획을 수립하였습니다.
- 기능을 구현하는데 필요한 스택을 논의한 뒤 사용 라이브러리를 정하였습니다
- 분류에 따라 팀원 개개인이 과제를 수행했습니다.
- 리뷰 시간을 정하여 해당 시간에 PR에서 코드리뷰를 했습니다.
- 투표를 통해 Best Practice를 선정한 후, 다른 과제 중 좋았던 구현들을 의논하여 추가하였습니다.
- [이슈](https://github.com/wanted-pre-onboarding-team5/pre-onboarding-9th-4-5/issues?q=is%3Aissue+is%3Aclosed)와 [PR메시지](https://github.com/wanted-pre-onboarding-team5/pre-onboarding-9th-4-5/pulls)를 활용하여 문서화하였습니다.

#### 2. Notion을 활용한 팀 프로젝트 과정 문서화

- 진행한 프로젝트의 문서화를 위해 notion을 활용하여 모든 구성원이 의견을 남기고, 진행 과정을 정리하였습니다.

#### 3. [요구사항 분석 후 Issue 생성](https://github.com/wanted-pre-onboarding-team5/pre-onboarding-9th-4-5/issues)

- 프로젝트 개발의 요구사항을 분석, 세부적으로 나누어 issue를 생성하였습니다.

#### 4. [Pull requests와 코드 리뷰](https://github.com/wanted-pre-onboarding-team5/pre-onboarding-9th-4-5/pulls)

- 세부적 issue를 두 개의 큰 단락으로 나누어 메인, 장바구니와 Best Practice, refactoring으로 총 네 번의 PR과 코드 리뷰를 진행하였습니다.

<br>

### 🤙 팀 컨벤션

<details>
<summary>💬<strong>커밋 컨벤션</strong></summary>
    
<div markdown="1">
    
#### Commit message

```tsx
[#Issue Number] Type: commit title

Description
```

#### Commit Type and Description

| Type     | Description                                                                        |
| -------- | ---------------------------------------------------------------------------------- |
| Feat     | 새로운 기능 추가                                                                   |
| Design   | CSS 등 UI 디자인 변경                                                              |
| Refactor | 코드 리팩토링                                                                      |
| Fix      | 버그 수정                                                                          |
| Docs     | 문서 작업, 수정                                                                    |
| Style    | 코드 스타일 및 포맷 변경(코드 자체의 변경은 없는 경우, 함수/ 변수명 변경 포함)     |
| Test     | 테스트 코드 작성, 테스트 리팩토링(프로덕션 코드 변경 X)                            |
| Chore    | 소스 코드를 건들지 않는 작업 - 빌드 테스트 업데이트, 패키지 매니저를 설정하는 경우 |
| Init     | 초기화                                                                             |
| Build    | 빌드 관련 파일 수정                                                                |
| CI       | CI 관련 설정 수정                                                                  |
| Rename   | 파일 혹은 폴더명을 수정하거나 옮기는 작업만 수행                                   |
| Remove   | 파일을 삭제하는 작업만 수행                                                        |

</div>
</details>

<br>

<details>
<summary><strong>💬 eslint/prettier 설정</strong></summary>
<div markdown="1">
 
#### .eslintrc.cjs
 
```js
 module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    'no-var': 'error',
    'no-multiple-empty-lines': 'error',

    'no-console': ['warn', { allow: ['error'] }],
    eqeqeq: 'error',
    'dot-notation': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: '@/*',
            group: 'internal',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

},
};

```

#### .prettierrc.cjs

```

'use strict';

module.exports = {
bracketSpacing: true,
singleQuote: true,
tabWidth: 2,
trailingComma: 'all',
printWidth: 100,
endOfLine: 'auto',
useTabs: false,
semi: true,
jsxSingleQuote: true,
arrowParens: 'always',
};

```

</div>
</details>

<br>

<details>
<summary>💬<strong>이슈 전략</strong></summary>

- 이슈는 요구사항 분석에 작성한 리스트를 토대로 크게 시계열 차트 및 호버 시 툴팁 구현과 차트 필터링 기능을 구현하는 것을 EPIC이슈로 두고 만들었습니다.

- **EPIC 이슈 -** PR 보낼 때 멘션하는 용도, 브랜치에 표시되어야 합니다. **(Epic/#1-chadseok**)
- **요구사항 이슈 -** 커밋에 명시하는 용도입니다. (ex. [**#5**] Feat: 모달창 띄우기 기능)
</details>
<br>

### 👤 팀 멤버
|   강승훈   |   김은우   |   박준수   |   박한나   |   석창환   |   이자윤   |   조현오   |
|:--------:|:--------:|:--------:|:--------:|:--------:|:----------:|:----------:|
|[@seunghoonKang](https://github.com/seunghoonKang)|[@eunoo1995](https://github.com/eunoo1995)|[@junsu1220](https://github.com/junsu1220)|[@hannaax](https://github.com/hannaax)|[@chadseok](https://github.com/chadseok)|[@jaypedia](https://github.com/jaypedia)|[@letsjo](https://github.com/letsjo)|
|<img src="https://avatars.githubusercontent.com/seunghoonKang" width="80">|<img src="https://avatars.githubusercontent.com/eunoo1995" width="80">|<img src="https://avatars.githubusercontent.com/junsu1220" width="80">|<img src="https://avatars.githubusercontent.com/hannaax" width="80">|<img src="https://avatars.githubusercontent.com/chadseok" width="80">|<img src="https://avatars.githubusercontent.com/jaypedia" width="80">|<img src="https://avatars.githubusercontent.com/letsjo" width="80">|
<br>
```
