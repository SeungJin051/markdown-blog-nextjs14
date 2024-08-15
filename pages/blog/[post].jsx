// /pages/blog/[post].js
import React from 'react';
import { getAllPostFile, getHTML, getMetadata } from '@/config/BlogEngine';
import Image from 'next/image';
import parse from 'html-react-parser';
import { format } from 'date-fns';

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

// In the BlogPostPage component
const BlogPostPage = ({ postHTML, metadata }) => {
  return (
    <div>
      <h1>{metadata.title}</h1>
      <p>{metadata.category}</p>
      <div>
        <Image
          className="rounded-lg"
          src={metadata.thumbnail}
          width={500}
          height={500}
          alt={metadata.title}
        />
      </div>
      <br />
      <article>{parse(postHTML)}</article>
      <div>
        {metadata.date} {/* Use the pre-formatted date directly */}
      </div>
    </div>
  );
};

export default BlogPostPage;
