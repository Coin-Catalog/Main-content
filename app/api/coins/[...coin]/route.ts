import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { NextRequest, NextResponse } from 'next/server';

async function getEntryData(id: string, cat: string) {
  const postsDirectory = path.join(process.cwd(), `entries/${cat}`);
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
};

export async function GET(req: NextRequest) {
  const url: URL = new URL(req.url);
  const catagory = url.pathname.slice(11).split('/')[0];
  const coin = url.pathname.slice(11).split('/')[1];

  const coinData = await getEntryData(coin, catagory);

  return NextResponse.json(
    JSON.stringify({
      data: coinData,
    }),
    { status: 200 },
  );
};
