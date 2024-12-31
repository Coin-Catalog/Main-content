import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { NextResponse } from 'next/server';

const postsDirectory = path.join(process.cwd(), 'entries')

function getSortedEntriesData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allPostsData.sort((b, a) => {
    if (a.id < b.id) {
      return 1
    } else {
      return -1
    }
  })
}

export async function GET() {
    return NextResponse.json(
        JSON.stringify({
            'entries': getSortedEntriesData()
        }),
        {status: 200}
    )
}