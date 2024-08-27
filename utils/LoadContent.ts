import fs from 'fs';
import path from 'path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeHtml from 'rehype-stringify';
import rehypeAddClasses from 'rehype-add-classes';

export default async function loadContent(file: string) {
  const filePath = path.join(process.cwd(), 'markdown', `${file}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeAddClasses, {
      h1: 'fw-bold',
      p: 'fs-4 mt-4 fw-normal',
    })
    .use(rehypeHtml)
    .process(fileContent);

  return processedContent.toString();
}
