import Members from '@/components/members/Members';
import React from 'react';

// 1. Notion API를 통해서 정보를 가져옴(DB)
// 2. 필수 정보 뿌려주기(이름, Role, 활동기수, 학년, 학과, 상태, 깃허브)
// Role, 상태 -> 값 별로 CSS
// 3. User 깃허브 "avatar_url" 가져오기 위해서 github API 사용
export default function Member() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20 text-center">
          <h1 className="mb-4 text-2xl font-medium text-gray-900 title-font">
            OUR Members
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">asdfasdf</p>
        </div>
        <Members />
      </div>
    </section>
  );
}
