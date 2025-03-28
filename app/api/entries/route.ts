import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';

const postsDirectory = path.join(process.cwd(), 'entries');

function getSortedEntriesData() {
  const coins = [];

  const categories = fs.readdirSync(postsDirectory);

  for (let i = 0; i < categories.length; i++) {
    const catPath = path.join(process.cwd(), `entries/${categories[i]}`);
    const fileNames = fs.readdirSync(catPath);

    const allPostsData = fileNames.map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(catPath, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        id,
        ...matterResult.data,
      };
    });

    for (let j = 0; j < allPostsData.length; j++) {
      coins.push(allPostsData[j]);
    }
  }

  return coins;
}

export async function GET() {
  return NextResponse.json(
    JSON.stringify({
      entries: getSortedEntriesData(),
    }),
    { status: 200 },
  );
}
