import React, { useEffect } from 'react';
import { getAllPostFile, getHTML, getMetadata } from '@/config/BlogEngine';
import Image from 'next/image';
import parse from 'html-react-parser';
import { format } from 'date-fns';

export default function BlogPost({ metadata, postHTML }) {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      // 특정 요소들에 클래스를 추가하는 로직
      const elements = document.querySelectorAll(
        'h1, h2, h3, h4, blockquote, strong, code, a, th',
      );

      elements.forEach(element => {
        element.classList.add('dark:text-white');
      });
    }
  }, []);

  return (
    <div className="flex justify-center min-h-screen px-10 pt-5 dark:bg-customDarkBg ">
      <div className="prose text-black dark:text-white">
        <h1 className="dark:text-white">{metadata.title}</h1>
        <div className="flex my-5">
          <Image
            className="rounded-lg"
            src={metadata.thumbnail}
            width={500}
            height={500}
            alt={metadata.title}
          />
        </div>
        <br />
        <article id="rootArticle">{parse(postHTML)}</article>
        <div className="mt-4 text-gray-600 dark:text-gray-400">
          {metadata.date}
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const posts = getAllPostFile();
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
  const postHTML = getHTML(fileName);
  const metadata = getMetadata(fileName);

  const formattedDate = format(new Date(metadata.date), 'MM/dd/yyyy');

  return {
    props: {
      postHTML,
      metadata: { ...metadata, date: formattedDate },
    },
  };
}
