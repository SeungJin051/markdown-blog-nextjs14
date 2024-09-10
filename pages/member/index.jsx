import Members from '@/components/members/Members';
import { TOKEN, MEMBER_DATABASE_ID } from '@/config';
import React from 'react';

export default function Member({ members }) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20 text-center">
          <h1 className="mb-4 text-2xl font-medium text-gray-900 title-font">
            OUR Members
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">asdfasdf</p>
        </div>
        <div className="container px-5 mx-auto">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {members.results.map(member => (
              <Members key={member.id} data={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
      body: JSON.stringify({
        sorts: [
          {
            timestamp: 'last_edited_time',
            direction: 'descending',
          },
        ],
        page_size: 100,
      }),
    },
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${MEMBER_DATABASE_ID}/query`,
    options,
  );

  const members = await res.json();

  return {
    props: { members },
    revalidate: 300,
  };
}
