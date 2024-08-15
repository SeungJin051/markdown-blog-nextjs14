const fs = require('fs');
const path = require('path');
const frontmatter = require('frontmatter');
const Markdoc = require('@markdoc/markdoc');

const postsDirectory = path.join(process.cwd(), '/BlogPosts');

function getAllPostFile() {
  return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md')); // .md 파일만 필터링
}

function getHTML(mdFile) {
  // mdFile에 .md가 추가되지 않도록 확인
  if (!mdFile.endsWith('.md')) {
    mdFile += '.md';
  }
  const filePath = path.join(postsDirectory, mdFile);
  const content = fs.readFileSync(filePath, 'utf-8');
  const ast = Markdoc.parse(content);
  const tree = Markdoc.transform(ast);
  return Markdoc.renderers.html(tree);
}

function getMetadata(mdFile) {
  // mdFile에 .md가 추가되지 않도록 확인
  if (!mdFile.endsWith('.md')) {
    mdFile += '.md';
  }
  const filePath = path.join(postsDirectory, mdFile);
  const content = fs.readFileSync(filePath, 'utf-8');
  const metadata = frontmatter(content).data;

  if (metadata.date) {
    metadata.date = new Date(metadata.date).toISOString();
  }

  return metadata;
}

module.exports = {
  getAllPostFile,
  getHTML,
  getMetadata,
};
