import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

// To handle a GET request to /api
export async function GET(request: NextRequest, response: Response) {
  // const url = new URL(request.url);

  // const searchParams = new URLSearchParams(url.searchParams);
  // const urlParam = searchParams.get('url');

  // if (!urlParam) {
  //   return NextResponse.json({ error: 'URL is required' });
  // }
  // return NextResponse.json('Hello', { status: 200 });
  try {
    const res = await fetch(
      'https://beyonddemo.ourdemo.online/storage/projects/documents/project-doc-1684002071.docx'
    );

    // console.log('🚀 ~ GET ~ res:', res);

    // const data = await response.buffer();

    // res.setHeader(
    //   'Content-Type',
    //   'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    // );
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.send(data);
    // response.setHeader('Content-Type', response.headers['content-type']);
    // return response.send(res.data);

    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to fetch the file' },
      { status: 500 }
    );
  }
  // Do whatever you want
}
