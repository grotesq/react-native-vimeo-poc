# React Native Vimeo Player PoC

## 개요

Vimeo 에서 제공하는 Player API 를 이용해 iframe 없이 네이티브로 비디오를 재생하는 컨셉 검증용 프로젝트입니다.

향후 별개의 플레이어 라이브러리로 분리할 수 있습니다.

## 사용법

```typescript jsx
import { VimeoPlayer } from "./VimeoPlayer";

<VimeoPlayer id={'video-id like 347119375'} width={400} height={300} />
```

## 데모 앱 사용법

앱 내의 3개의 TextInput 은 각각

- id
- width
- height

값을 입력할 수 있게 되어 있습니다.
id를 변경해 원하는 비디오를 재생해볼 수 있습니다.

---

문서 끝.
