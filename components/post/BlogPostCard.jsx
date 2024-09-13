import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function PostCard({ data }) {
  const slug = data.fileName.replace('.md', ''); // 파일 이름을 슬러거로 변환
  const formattedDate = data.date
    ? new Date(data.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
    : 'No Date';

  return (
    <Link
      href={`/blog/${slug}`}
      className="block m-5 overflow-hidden transition-transform duration-300 transform bg-white rounded-lg shadow-lg hover:scale-y-105 hover:shadow-2xl dark:bg-customDarkStudyBg dark:hover:bg-gray-800 hover:bg-gray-100"
      style={{ transformOrigin: 'bottom' }}
    >
      <div className="relative w-full h-60 aspect-w-16 aspect-h-9">
        <Image
          src={data.thumbnail || '/GDSC_Dong-Eui_University_Vertical_color.png'} // 기본 이미지 설정
          alt={data.title || 'Post Thumbnail'}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-black dark:text-white">
          {data.title}
        </h2>
        <div>
          <div className="mt-2 mb-2">
            {Array.isArray(data.tags) && data.tags.length > 0 ? (
              data.tags.slice(0, 3).map((tag, index) => (
                <button
                  key={index}
                  className="px-3 py-1 m-1 bg-slate-200 drak:bg-gray-600 rounded-2xl"
                >
                  {tag}
                </button>
              ))
            ) : (
              <div className="p-5 m-1"></div>
            )}
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-100">
          {formattedDate}
        </p>
        <hr className="mt-3 mb-3 border-gray-400" />
        <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">
          by {data.author}
        </p>
      </div>
    </Link>
  );
}

export default PostCard;
