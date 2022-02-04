import { NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req) {
  if (!PUBLIC_FILE.test(req.nextUrl.pathname)) {
    const { nextUrl } = req;

    if (
      nextUrl.pathname.indexOf('/prodotti/') >= -1 ||
      nextUrl.pathname.indexOf('/articoli/') >= -1
    ) {
      console.log('NEXTURL ', nextUrl);
      console.log('LANGUAGE IT');
      nextUrl.pathname = nextUrl.pathname.replace('/prodotti/', '/products/');
      nextUrl.pathname = nextUrl.pathname.replace('/articoli/', '/articles/');
      console.log('REWRITE');
      return NextResponse.rewrite(nextUrl);
    }
  }
}
