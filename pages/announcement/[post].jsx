import {
  announcementPostsDirectory,
  getAllPostFiles,
  getHTML,
  getMetadata,
} from '@/config/BlogEngineV2';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import parse from 'html-react-parser';
import React from 'react';

const Comment = dynamic(() => import('@/components/post/Comment'), {
  ssr: false,
});

export default function AnnouncementPost({ metadata, postHTML }) {
  console.log(metadata);

  return (
    <div className="flex justify-center min-h-screen px-10 pt-5 dark:bg-customDarkBg ">
      <div className="prose text-black dark:text-white">
        <h1 className="dark:text-white">{metadata.title}</h1>
        <div className="flex my-5">
          {/* <Image
            className="rounded-lg"
            src={metadata.thumbnail}
            width={500}
            height={500}
            alt={metadata.title}
          /> */}
        </div>
        <br />
        <article id="rootArticle">{parse(postHTML)}</article>
        <div className="mt-4 text-gray-600 dark:text-gray-400">
          {metadata.date}
        </div>
        <Comment />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const posts = getAllPostFiles(announcementPostsDirectory);
  const paths = posts.map(post => ({
    params: { post: post.replace('.md', '') },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const fileName = `${params.post}.md`;
  const postHTML = getHTML(announcementPostsDirectory, fileName);
  const metadata = getMetadata(announcementPostsDirectory, fileName);

  const formattedStartDate = new Date(metadata.start_time).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    },
  );
  const formattedEndDate = new Date(metadata.end_time).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    },
  );

  return {
    props: {
      postHTML,
      metadata: {
        ...metadata,
        start_time: formattedStartDate,
        end_time: formattedEndDate,
      },
    },
  };
}
