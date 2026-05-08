import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

// Legacy WordPress tag pages that warrant a redirect to the closest real page.
const TAG_REDIRECTS: Record<string, string> = {
  '/tag/chimney-sweep': '/chimney-inspection',
  '/tag/chimney-sweep/': '/chimney-inspection',
  '/tag/chimney-repair': '/chimney-repair-seattle',
  '/tag/chimney-repair/': '/chimney-repair-seattle',
  '/tag/fireplace-repair': '/chimney-repair-seattle',
  '/tag/fireplace-repair/': '/chimney-repair-seattle',
  '/tag/fireplace-cleaning': '/chimney-cleaning',
  '/tag/fireplace-cleaning/': '/chimney-cleaning',
  '/tag/dryer-vent-cleaning': '/services',
  '/tag/dryer-vent-cleaning/': '/services',
  '/tag/the-mad-hatter-chimney-sweep': '/about',
  '/tag/the-mad-hatter-chimney-sweep/': '/about',
};

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/tag/')) {
    const destination = TAG_REDIRECTS[pathname];
    if (destination) {
      return NextResponse.redirect(new URL(destination, req.url), 301);
    }

    return new NextResponse(null, { status: 410 });
  }

  if (
    pathname === '/feed' ||
    pathname === '/feed/' ||
    pathname === '/comments/feed' ||
    pathname === '/comments/feed/' ||
    pathname.startsWith('/wp-json') ||
    pathname.startsWith('/wp-admin') ||
    pathname.startsWith('/wp-content/')
  ) {
    return new NextResponse(null, { status: 410 });
  }

  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const token = req.cookies.get('admin_token')?.value;

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }

    try {
      const secret = new TextEncoder().encode(
        process.env.JWT_SECRET || 'change-me-in-production'
      );
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/tag/:path*',
    '/feed',
    '/feed/',
    '/comments/feed',
    '/comments/feed/',
    '/wp-json/:path*',
    '/wp-json',
    '/wp-admin/:path*',
    '/wp-admin',
    '/wp-content/:path*',
  ],
};
