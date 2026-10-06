아기 준비물 웹앱 - 올리는 방법

[1] GitHub에 올리기 (공통)
1. github.com → 오른쪽 위 "+" → New repository → 이름 예: baby-prep → Create repository
2. Add file → Upload files
3. 압축을 푼 baby-prep-app 폴더 "안의" 파일과 icons 폴더를 통째로 끌어다 놓기
   (저장소 맨 위에 index.html, manifest.webmanifest, sw.js, icons/ 가 바로 보여야 해요.
    baby-prep-app 폴더째 올리면 안 돼요)
4. Commit changes

[2-A] GitHub Pages로 열기 (임신 기록 앱 때 방식)
1. 저장소 Settings → Pages
2. Source: Deploy from a branch / 브랜치 main / 폴더 / (root) → Save
3. 1~2분 뒤 https://아이디.github.io/baby-prep/ 주소가 생겨요

[2-B] 또는 Vercel로 열기 (식비·자산장부 앱 때 방식)
1. vercel.com → Add New → Project → baby-prep 저장소 Import
2. Framework Preset "Other" 그대로 → Deploy

쓰는 사람은 링크를 열고
- 아이폰: Safari 공유 버튼 → "홈 화면에 추가"
- 안드로이드: 크롬 메뉴(⋮) → "앱 설치" / "홈 화면에 추가"

목록은 각자 폰 브라우저에 저장됩니다. 폰을 바꿀 땐 설정 → 백업 파일 저장/불러오기.
앱을 고쳐 다시 올릴 때는 sw.js 맨 위 VERSION 숫자를 올려 주세요(예: babyprep-v2).
