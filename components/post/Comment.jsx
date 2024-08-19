import React, { useEffect, useRef } from 'react';

const Comment = () => {
  const commentsRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('repo', 'SeungJin051/notionapi-nextjs14');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('label', 'comment');
    script.setAttribute('theme', 'github-light');

    commentsRef.current.appendChild(script);
  }, []);

  return <div ref={commentsRef} />;
};

export default Comment;
