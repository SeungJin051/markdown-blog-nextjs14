import React from 'react';
import { getAllPostFile, getMetadata } from '@/config/BlogEngine'; // 서버 사이드 전용 모듈
import PostCard from '@/components/post/PostCard';

export async function getStaticProps() {
  const postFiles = getAllPostFile();
  const posts = postFiles.map(fileName => {
    const metadata = getMetadata(fileName);
    return {
      fileName,
      ...metadata,
    };
  });

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }) {
  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <div className="grid grid-cols-1 gap-2 p-10 pt-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <h1 className="mb-0 text-4xl font-bold m-7 col-span-full">
          📝 Blog
          <span className="ml-3 text-2xl col-span-full">{posts.length}</span>
        </h1>
        <span className="mb-10 text-2xl ml-7 col-span-full">
          블로그를 통해 보는 GDSC-DEU의 노력과 성취
        </span>
        {posts.map(post => (
          <PostCard key={post.fileName} data={post} />
        ))}
      </div>
    </div>
  );
}
