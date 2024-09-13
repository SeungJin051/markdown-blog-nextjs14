import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function AnnouncementPostCard({ data }) {
  const slug = data.fileName.replace('.md', ''); // 파일 이름을 슬러거로 변환
  const startTime = new Date(data.start_time).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const endTime = new Date(data.end_time).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <section className="w-3/6 text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto border-t-2 border-b-2">
        <div className="flex flex-wrap-m-4">
          <div className="p-4 lg:w-full">
            <Link href={`announcement/${slug}`}>
              <div className="flex flex-col h-full text-center sm:flex-row sm:justify-start sm:text-left">
                <Image
                  width={200}
                  height={200}
                  alt="thumbnail"
                  className="flex-shrink-0 mb-4 rounded-lg h-25 object-fit sm:mb-0 sm:w-0 lg:w-52"
                  src={data.thumbnail || '/GDSCUTM-Bracket.png'}
                />
                <div className="flex-grow sm:pl-8 lg:ml-10">
                  <h2 className="text-lg font-medium text-gray-900 title-font">
                    {data.short_title}
                  </h2>
                  <h3 className="mb-3 text-gray-500">작성자 | {data.author}</h3>
                  <p className="mb-3">{`${startTime} ~ ${endTime}`}</p>
                  <p className="mb-4">
                    {data.tags.map(tag => (
                      <span
                        key={tag}
                        className="p-1 mr-1 text-white rounded-lg bg-emerald-500"
                      >
                        {' '}
                        {tag}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
