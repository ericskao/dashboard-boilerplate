import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET || '',
    salt: 'authjs.session-token',
  });
  const { pathname } = req.nextUrl;

  // Check if the user is trying to access the /dashboard route
  if (pathname.startsWith('/dashboard')) {
    // If there is no token, redirect to /login
    if (!token) {
      const loginUrl = new URL('/login', req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  if (pathname.startsWith('/login') && token) {
    const dashboardUrl = new URL('/dashboard', req.url);
    return NextResponse.redirect(dashboardUrl);
  }

  // If the token exists or the route is not protected, continue
  return NextResponse.next();
}

// Specify which paths this middleware should apply to
export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};
