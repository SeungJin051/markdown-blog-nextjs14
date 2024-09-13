import React from 'react';
import {
  announcementPostsDirectory,
  getAllPostFiles,
  getMetadata,
} from '@/config/BlogEngineV2';
import AnnouncementPostCard from '@/components/post/AnnouncementPostCard';

export async function getStaticProps() {
  const postFiles = getAllPostFiles(announcementPostsDirectory);
  const posts = postFiles.map(fileName => {
    const metadata = getMetadata(announcementPostsDirectory, fileName);
    return {
      fileName,
      ...metadata,
    };
  });

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}

export default function Anoouncement({ posts }) {
  console.log(posts);
  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <div className="grid grid-cols-1 gap-2 p-10 pt-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <h1 className="mb-0 text-4xl font-bold m-7 col-span-full">
          📝 Notice
          <span className="ml-3 text-2xl col-span-full">{posts.length}</span>
        </h1>
        <span className="mb-10 text-2xl ml-7 col-span-full">
          GDSC-DEU의 공지사항
        </span>
      </div>
      {posts.map(post => (
        <AnnouncementPostCard key={post.fileName} data={post} />
      ))}
    </div>
  );
}
