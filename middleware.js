import {NextResponse} from 'next/server';

export async function middleware(req) {
    console.log("MIDDLEWARE", req.nextUrl);
    const url = req.nextUrl.clone();
    url.pathname = "/410/";
    return NextResponse.rewrite(url);
}

export const config = {matcher: '/error/:path*'};