import {NextResponse} from 'next/server';

export async function middleware(req) {
    console.log("I NEVER GET CALLED");
    return NextResponse.rewrite("/");
}

export const config = {matcher: '/error/'};