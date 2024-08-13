import React from 'react';
import { TOKEN, DATABASE_ID } from '@/config';

export default function Studys({ projects }) {
  // console.log(projects);

  return (
    <div>
      <h1>총 스터디 : {projects.results.length}</h1>
      {projects.results.map(aProject => (
        <h1 key={aProject.id}>
          {aProject.properties.Name.title[0]?.plain_text}
        </h1>
      ))}
    </div>
  );
}

// 각 요청 때마다 호출
export async function getServerSideProps() {
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

  // fetching await 받아올 때 까지 기다림.
  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options,
  );

  // 결과값
  const projects = await res.json();

  const projectNames = projects.results.map(
    aProject => aProject.properties.Name.title[0]?.plain_text,
  );

  // console.log(`projectNames : ${projectNames}`);

  return {
    props: { projects }, // will be passed to the page component as props
    // getStaticProps() 메소드를 사용한다면 revalidate 로 데이터 변경시 갱신가능!
    // revalidate: 1 // 데이터 변경이 있으면 갱신 1초 마다
  };
}
