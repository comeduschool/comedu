## 이미지 빌드

Dockerfile이 있는 폴더에서 아래를 실행합니다.
(필수 `app01.js` 파일과 `app02.js` 파일도 같은 위치에 있어야 합니다.

```shell
docker build -t http:example .
```

## 컨테이너 실행

- 예제 1번 실행

```shell
docker run -d -p 3100:3000 --name http-ex01 http:example app01.js
```

- 예제 2번 실행

```shell
docker run -d -p 3101:3000 --name http-ex02 http:example app02.js
```

## 요청 보내기
```shell

```