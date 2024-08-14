import React from 'react';
import { TOKEN, DATABASE_ID } from '@/config';

export default function Studys({ studys }) {
  // console.log(studys);
  const { id } = studys; // 디스트럭처링

  return (
    <div>
      <h1>총 스터디 : {studys.results.length}</h1>
      {studys.results.map(study => (
        <h1 key={id}>{study.properties.Name.title[0]?.plain_text}</h1>
      ))}
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
          direction: 'ascending',
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options,
  );

  const studys = await res.json();

  return {
    props: { studys },
    revalidate: 300,
  };
}
