import matter from 'gray-matter';
import { remark } from 'remark';
import remarkToc from 'remark-toc';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';
import { read } from 'to-vfile';
import { unified } from 'unified';
import fs from 'fs';

// const file = fs.readFileSync('src/lib/posts/example-post.md', 'utf8');