import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function StudyItem({ data }) {
  const title = data.properties.Name.title[0]?.plain_text;
  const introduction = data.properties.소개.rich_text[0]?.plain_text;
  const state = data.properties.상태.select.name;
  const date = data.properties.일정.rich_text[0]?.plain_text;
  const link = data.url;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const stateColor =
    state === '진행 중'
      ? 'bg-blue-500'
      : state === '종료'
        ? 'bg-red-500'
        : 'bg-gray-300';

  return (
    <Link
      href={link}
      className="block m-5 overflow-hidden transition-transform duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl dark:bg-customDarkStudyBg dark:hover:bg-gray-800 hover:bg-gray-100"
    >
      <div className="relative w-full h-60 aspect-w-16 aspect-h-9">
        <Image
          src={imgSrc}
          alt={imgSrc}
          fill // 이미지가 부모 div를 채우도록 설정합니다.
          style={{ objectFit: 'cover' }} // 이미지가 부모 div를 가득 채우면서 비율을 유지하도록 설정합니다.
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-black dark:text-white">
          {title}
        </h2>
        <p className="mb-2 text-lg text-gray-700 dark:text-gray-300">
          {introduction || <br />}
        </p>
        <p
          className={`inline px-2 py-1 text-white rounded-sm text-md dark:text-white ${stateColor}`}
        >
          {state}
        </p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-100">{date}</p>
      </div>
    </Link>
  );
}
