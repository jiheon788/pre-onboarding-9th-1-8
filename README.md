# 원티프 프리온보딩 인턴쉽 1주차 과제

### [결과물 바로가기](https://wanted-pre-onboarding-team8-1.netlify.app/signin)&nbsp;&nbsp;&nbsp;&nbsp;[백엔드 API](https://github.com/walking-sunset/selection-task)

원티드 프리온보딩 프론트엔드 인턴쉽 1주차 과제입니다. [과제 가이드라인](https://github.com/walking-sunset/selection-task)을 준수하였습니다.

이 프로젝트는 [CRA + TypeScript 템플릿](https://create-react-app.dev/docs/adding-typescript/)으로 제작되었습니다.

#### 과제 목적

- Todos 어플의 best practice 만들어 제출하기
- 동료 학습 및 협업 체계 만들기

#### 과제 진행 방법

[기능 구현 목록](/REQUIREMENTS.md)을 작성 후 아래와 같이 분류하였습니다.

1. Sign in / Sign up
2. CR-- todo
3. --UD todo

분류에 따라 팀원 개개인이 수행한 과제를 통해 토론을 진행했습니다. 투표를 통해 Best Practice를 선정한 후, 다른 과제 중 좋았던 구현들을 의논하여 추가하였습니다. [이슈](https://github.com/Wanted-PreOnboarding-Team-8/wanted-pre-onboarding-frontend-1/issues)와 [PR메시지](https://github.com/Wanted-PreOnboarding-Team-8/wanted-pre-onboarding-frontend-1/pulls)를 활용하여 문서화하였습니다.

<br/>

# What Did I Do

## Features

### [--UD todo Practice PR](https://github.com/Wanted-PreOnboarding-Team-8/wanted-pre-onboarding-frontend-1/pull/25)

- 🏆 Best Practice 선정
- `Update`, `Delete` 기능 파트입니다.
- 역할에 따라 컴포넌트 나누는 기준을 고려하며 구현하였습니다.

### [CR-- todo Practice PR](https://github.com/Wanted-PreOnboarding-Team-8/wanted-pre-onboarding-frontend-1/pull/13)

- `Create`, `Read` 기능 파트입니다.
- 재사용 되는 로직을 함수화하였습니다.

### [Signin / Signup Best Practice PR](https://github.com/Wanted-PreOnboarding-Team-8/wanted-pre-onboarding-frontend-1/pull/3)

- 🏆 Best Practice 선정
- `Signin`, `Signup` 기능 파트입니다.
- Custom Hook, Router 할당 자동화, Axios interceptors를 사용해 반복되는 작업을 줄였습니다.
- Context API와 토큰 클래스, Axios interceptors를 통해 인증&인가 횡단 관심사 처리하였습니다.
- HOC(고차 함수 컴포넌트)를 사용하여 로그인 여부에 따른 리다이렉트 기능을 구현했습니다.

## Bug Fixes

### [Path Alias 오류 수정 PR](https://github.com/Wanted-PreOnboarding-Team-8/wanted-pre-onboarding-frontend-1/pull/1)

- 초기 환경 구성 중 path alias를 사용하기 위한 세팅에 장애가 발생하였고 craco 라이브러리를 사용하여 해결하였습니다.

## Docs

### [요구 사항 목록](./REQUIREMENTS.md)

- 요구 사항 목록을 작성하여 커밋시마다 체크하는 방식을 제안하였습니다.

<br/>

# Team

<table border>
  <tbody>
    <tr>
       <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/67201870?v=4"  alt="김상연님"/><br />
        <br/>
        <a href="https://github.com/greyHairChooseLife">
          <img src="https://img.shields.io/badge/김상연-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src='https://avatars.githubusercontent.com/u/90181028?v=4'  alt="박지헌님"/><br />
        <br/>
        <a href="https://github.com/jiheon788">
          <img src="https://img.shields.io/badge/박지헌-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/106523012?v=4"  alt="복준우님"/><br />
       <br/>
        <a href="https://github.com/bokjunwoo">
          <img src="https://img.shields.io/badge/복준우-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/48446896?v=4"  alt="양소연님"/><br/>
                <br/>
        <a href="https://github.com/Noeyso">
          <img src="https://img.shields.io/badge/양소연-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
     </tr>
         <tr>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/62588402?v=4"  alt="정찬욱님"/><br />
       <br/>
        <a href="https://github.com/raw20">
          <img src="https://img.shields.io/badge/정찬욱-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/103406196?v=4"  alt="조효림님"/><br/>
       <br/>
        <a href="https://github.com/hyorimcho">
          <img src="https://img.shields.io/badge/조효림-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/82688516?v=4"  alt="최정훈님"/><br/>
                <br/>
        <a href="https://github.com/jhoon9494">
          <img src="https://img.shields.io/badge/최정훈-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/17325845?v=4"  alt="한호수님"/><br/>
       <br/>
        <a href="https://github.com/tnghgks">
          <img src="https://img.shields.io/badge/한호수-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
     </tr>
  </tbody>
</table>

<br/>

# Team History

## Features Best Practice

- Feb 24, 2023 | [--UD todo Practice Best Practice](https://github.com/Wanted-PreOnboarding-Team-8/wanted-pre-onboarding-frontend-1/pull/25)
- Feb 23, 2023 | [CR-- todo Practice Best Practice](https://github.com/Wanted-PreOnboarding-Team-8/wanted-pre-onboarding-frontend-1/pull/11)
- Feb 23, 2023 | [Signin / Signup Best Practice Best Practice](https://github.com/Wanted-PreOnboarding-Team-8/wanted-pre-onboarding-frontend-1/pull/3)

## Issue

- Feb 23, 2023 | [개발 툴 차이에 따른 lint 적용 이슈 해결](https://github.com/Wanted-PreOnboarding-Team-8/wanted-pre-onboarding-frontend-1/pull/11/commits/d995d1cf6607353e4dc288cf9e832b58bb542147)
- Feb 23, 2023 | [Path Alias 오류 수정 PR](https://github.com/Wanted-PreOnboarding-Team-8/wanted-pre-onboarding-frontend-1/pull/1)

<br/>

# Getting Started

#### Install

```
npm i
```

#### Build

```
npm run build
```

#### Start

```
npm start
```

<br/>

# Features

- Authenticate users via JWT (sign in, sign up, logout)
- Validation sign in, sign up
- Redirect processing based on login
- CRUD Todos

<br/>

# Tech Stack

`React`, `Typescript`, `Axios`, `React-router-dom`, `Bootstrap`, `craco`

Collaboration Tool: `Discord`, `Notion`, `Github`

<br/>

# DEMO

![DEMO](https://user-images.githubusercontent.com/90181028/218148314-5036b532-a75d-4e87-b0f3-7e542a0ffbca.gif)

<br/>

# Directory

```
public
src
├── api // 서버 함수
│   ├── auth
│   └── todo
├── components // 재사용 컴포넌트
│   ├── HOC
│   └── todo
├── constants // 상수
├── contexts // 전역 state
├── lib
│   ├── hooks // 커스텀 훅
│   └── utils // 유틸 함수
└── pages // 페이지 컴포넌트
    ├── HomePage
    ├── SignInPage
    ├── SignUpPage
    └── TodoPage
```
