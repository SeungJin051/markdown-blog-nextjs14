import React from 'react';
import { TOKEN, STUDY_DATABASE_ID } from '@/config';
import StudyItem from '@/components/studys/StudyItem';

export default function Studys({ studys }) {
  // 데이터 유효성 검사
  if (!studys || !studys.results) {
    return <h1>데이터를 불러오지 못했습니다.</h1>;
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <div className="grid grid-cols-1 gap-2 p-10 pt-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <h1 className="mb-0 text-4xl font-bold m-7 col-span-full">
          🧑‍💻 스터디
          <span className="ml-3 text-2xl col-span-full">
            {studys.results.length}
          </span>
        </h1>
        <span className="mb-10 text-2xl ml-7 col-span-full">
          더 나은 우리를 만드는 스터디
        </span>
        {studys.results.map(study => (
          <StudyItem key={study.id} data={study} />
        ))}
      </div>
    </div>
  );
}

// Notion API에 HTTP 요청을 보낼 때 사용되는 설정 | ISR로 로딩시간 줄이기
export async function getStaticProps() {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: 'Name',
          direction: 'descending',
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${STUDY_DATABASE_ID}/query`,
    options,
  );

  const studys = await res.json();

  return {
    props: { studys },
    revalidate: 300,
  };
}
