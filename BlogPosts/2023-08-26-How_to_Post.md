---
layout: post
title: "포스팅 하는 방법"
date: 2023-08-26T23:58:13Z
tags: [infomation, jekyll, markdown]
thumbnail: /GDSC_Dong-Eui_University_Vertical_color.png
author: 김남주
---

## 글 작성 하는 방법

1. `blog/_posts` 폴더에 `yyyy-mm-dd-제목.md` 형식으로 파일을 생성합니다.

   | `YYYY-MM-DD-template.md` 파일을 복사하여 사용해도 됩니다.

   작성일이 미래라면 게시글이 게시되지 않습니다.

2. 파일 상단에 아래와 같은 형식으로 작성합니다.

   ```markdown
   ---
   layout: post
   title: "글 작성 하는 방법"
   date: 2023-08-26T23:58:13
   tag: [infomation]
   author: 작성자
   ---
   ```

   - layout
     - 레이아웃을 지정합니다. post를 사용하면 마크다운 문법 + 댓글 레이아웃을 사용할 수 있습니다.
   - title
     - 글의 제목을 입력합니다.
   - date
     - 글의 작성일을 입력합니다. (시간은 선택사항)
     - 예) 2023-08-26T23:58:13
   - tag
     - 글의 태그를 입력합니다.
     - 예) [infomation, programming, etc]
   - author
     - 글의 작성자를 입력합니다.

3. 마크다운 문법으로 글을 작성합니다.

   - [마크다운 문법](https://docs.github.com/ko/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

## 이미지 첨부 하는 방법

1. `assets/img/blogs/오늘 날짜` 폴더에 이미지를 업로드 합니다.
2. 아래와 같은 형식으로 이미지를 첨부합니다.

   - 마크다운 문법

     ```markdown
     ![이미지 설명](/assets/img/blogs/오늘 날짜/이미지 파일명.확장자)
     ```

   - HTML 문법

     ```html
     <img
       src="/assets/img/blogs/오늘 날짜/이미지 파일명.확장자"
       alt="이미지 설명"
     />
     ```

## 참고

- [Jekyll Docs](https://jekyllrb.com/docs/)

- [Jekyll Themes](https://jekyllthemes.io/)
