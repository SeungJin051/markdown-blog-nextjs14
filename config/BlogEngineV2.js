const fs = require('fs'); // 파일 접근 권환
const path = require('path');
const frontmatter = require('frontmatter');
const Markdoc = require('@markdoc/markdoc');

// 폴더 정의
const blogPostsDirectory = path.join(process.cwd(), '/BlogPosts');
const announcementPostsDirectory = path.join(
  process.cwd(),
  '/AnnouncementPosts',
);

// 특정 폴더의 모든 게시물 파일을 가져오는 함수
function getAllPostFiles(directory) {
  return fs.readdirSync(directory).filter(file => file.endsWith('.md'));
}

// 마크다운 파일에서 HTML 콘텐츠를 가져오는 함수
function getHTML(directory, mdFile) {
  if (!mdFile.endsWith('.md')) {
    mdFile += '.md';
  }
  const filePath = path.join(directory, mdFile);
  const content = fs.readFileSync(filePath, 'utf-8');
  const ast = Markdoc.parse(content);
  const tree = Markdoc.transform(ast);
  return Markdoc.renderers.html(tree);
}

// 마크다운 파일에서 meta 데이터를 가져오는 함수
function getMetadata(directory, mdFile) {
  if (!mdFile.endsWith('.md')) {
    mdFile += '.md';
  }
  const filePath = path.join(directory, mdFile);
  const content = fs.readFileSync(filePath, 'utf-8');
  const metadata = frontmatter(content).data;

  console.log(metadata);

  if (metadata.date) {
    metadata.date = new Date(metadata.date).toISOString();
  }

  return metadata;
}

module.exports = {
  blogPostsDirectory,
  announcementPostsDirectory,
  getAllPostFiles,
  getHTML,
  getMetadata,
};
